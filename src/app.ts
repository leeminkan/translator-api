import Fastify from "fastify";

import translatorRouter from "./modules/translator/translator.route";

const app = Fastify();

app.get("/health-check", async (request, reply) => {
  return "Hello there! 👋";
});

app.register(translatorRouter, { prefix: "/api/translator" });

export default app;
