## Ref:

- https://github.dev/hmake98/fastify-typescript

## Running Locally

```bash
# install dependencies
pnpm install
# run
pnpm build
pnpm start
```

## Example

/api/translator/hello

```json
{
  "data": {
    "word": "hello",
    "pos": ["exclamation", "noun", "exclamation", "noun"],
    "verbs": [
      {
        "type": "Interjectionhello"
      }
    ],
    "pronunciation": [
      {
        "lang": "us",
        "url": "https://dictionary.cambridge.org/us/media/english/us_pron/h/hel/hello/hello.mp3",
        "pron": "/heˈloʊ/"
      },
      {
        "lang": "uk",
        "url": "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukh/ukhef/ukheft_029.mp3",
        "pron": "/heˈləʊ/"
      }
    ],
    "definition": [
      {
        "id": 0,
        "text": "used when meeting or greeting someone: ",
        "translation": "",
        "example": [
          {
            "id": 0,
            "text": "Hello, Paul. I haven't seen you for ages.",
            "translation": ""
          },
          {
            "id": 1,
            "text": "I know her vaguely - we've exchanged hellos a few times.",
            "translation": ""
          },
          {
            "id": 2,
            "text": "I just thought I'd call by and say hello.",
            "translation": ""
          },
          {
            "id": 3,
            "text": "And a big hello (= welcome) to all the parents who've come to see the show.",
            "translation": ""
          }
        ]
      },
      {
        "id": 1,
        "text": "something that is said at the beginning of a phone conversation: ",
        "translation": "",
        "example": [
          {
            "id": 4,
            "text": "\"Hello, I'd like some information about flights to the U.S., please.\"",
            "translation": ""
          }
        ]
      },
      {
        "id": 2,
        "text": "something that is said to attract someone's attention: ",
        "translation": "",
        "example": [
          {
            "id": 5,
            "text": "The front door was open so she walked inside and called out, \"Hello! Is there anybody in?\"",
            "translation": ""
          }
        ]
      },
      {
        "id": 3,
        "text": "said to someone who has just said or done something stupid, especially something that shows they are not noticing what is happening: ",
        "translation": "",
        "example": [
          {
            "id": 6,
            "text": "She asked me if I'd just arrived and I was like \"Hello, I've been here for an hour.\"",
            "translation": ""
          }
        ]
      },
      {
        "id": 4,
        "text": "an expression of surprise: ",
        "translation": "",
        "example": [
          {
            "id": 7,
            "text": "Hello, this is very strange - I know that man.",
            "translation": ""
          }
        ]
      },
      {
        "id": 5,
        "text": "used when meeting or greeting someone: ",
        "translation": "",
        "example": [
          {
            "id": 8,
            "text": "\"Hello, Paul,\" she said, \"I haven’t seen you for months.\"",
            "translation": ""
          },
          {
            "id": 9,
            "text": "I know her vaguely – we’ve exchanged hellos a few times.",
            "translation": ""
          },
          {
            "id": 10,
            "text": "Come and say hello to my friends (= meet them).",
            "translation": ""
          }
        ]
      },
      {
        "id": 6,
        "text": "Hello is also said at the beginning of a telephone conversation.",
        "translation": "",
        "example": [
          {
            "id": 11,
            "text": "She walked into the shop and called out, \"Hello! Is anybody here?\"",
            "translation": ""
          }
        ]
      },
      {
        "id": 7,
        "text": "Hello is also used to attract someone’s attention: ",
        "translation": "",
        "example": []
      }
    ]
  },
  "message": "OK!"
}
```
