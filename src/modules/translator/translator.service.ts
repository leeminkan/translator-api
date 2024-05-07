import * as cheerio from "cheerio";
import axios from "axios";
import https from "https";

const fetchVerbs = (wiki: string) => {
  return new Promise((resolve, reject) => {
    axios
      .get(wiki)
      .then((response) => {
        const $$ = cheerio.load(response.data);
        const verb = $$("tr > td > p ").text();

        const lines = verb
          .split("\n")
          .map((line) => line.trim())
          .filter(Boolean);

        const verbs = [];
        for (let i = 0; i < lines.length; i += 2) {
          const type = lines[i];
          const text = lines[i + 1];
          verbs.push({ type, text });
        }

        resolve(verbs);
      })
      .catch((error) => {
        resolve("verbs not found");
      });
  });
};

export const lookup = async (language: string, word: string) => {
  const url = `https://dictionary.cambridge.org/us/dictionary/${language}/${word}`;
  const httpsAgent = new https.Agent({ keepAlive: true });
  const { data } = await axios.get(url, {
    httpsAgent,
    headers: {
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.84 Safari/537.36",
    },
  });
  const $ = cheerio.load(data);

  const resultWord = $(".hw.dhw").first().text();
  // return first
  if (!resultWord) return;

  // get verbs
  const wiki = `https://simple.wiktionary.org/wiki/${word}`;
  const verbs = await fetchVerbs(wiki);

  const pos = $(".pos.dpos") // part of speech
    .map((_, element) => {
      return $(element).text();
    })
    .get();

  const siteUrl = "https://dictionary.cambridge.org";
  const usAudio = siteUrl + $(".us.dpron-i audio source").first().attr("src");
  const uspPron = $(".us.dpron-i .pron.dpron").first().text();
  const ukAudio = siteUrl + $(".uk.dpron-i audio source").first().attr("src");
  const ukPron = $(".uk.dpron-i .pron.dpron").first().text();

  // definition & example
  const exampleCount = $(".def-body.ddef_b")
    .map((index, element) => {
      const exampleElements = $(element).find(".examp.dexamp");
      return exampleElements.length;
    })
    .get();

  for (let i = 0; i < exampleCount.length; i++) {
    if (i == 0) {
      exampleCount[i] = exampleCount[i];
    } else {
      exampleCount[i] = exampleCount[i] + exampleCount[i - 1];
    }
  }

  const exampleTrans = $(
    ".examp.dexamp > .trans.dtrans.dtrans-se.hdb.break-cj"
  ); // translation of the example
  const example = $(".examp.dexamp > .eg.deg")
    .map((index, element) => {
      return {
        id: index,
        text: $(element).text(),
        translation: exampleTrans.eq(index).text(),
      };
    })
    .get();

  const definitionTrans = $(
    ".def-body.ddef_b > .trans.dtrans.dtrans-se.break-cj"
  ); // translation of the definition
  const definition = $(".def.ddef_d.db")
    .map((index, element) => {
      return {
        id: index,
        text: $(element).text(),
        translation: definitionTrans.eq(index).text(),
        example: example.slice(exampleCount[index - 1], exampleCount[index]),
      };
    })
    .get();

  return {
    word: resultWord,
    pos: pos,
    verbs: verbs,
    pronunciation: [
      {
        lang: "us",
        url: usAudio,
        pron: uspPron,
      },
      {
        lang: "uk",
        url: ukAudio,
        pron: ukPron,
      },
    ],
    definition: definition,
  };
};
