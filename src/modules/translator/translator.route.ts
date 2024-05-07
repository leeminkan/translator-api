import { FastifyInstance } from "fastify";

import * as controllers from "./translator.controller";

async function translatorRouter(fastify: FastifyInstance) {
  fastify.route({
    method: "GET",
    url: "/",
    schema: {
      querystring: {
        word: { type: "string" },
      },
    },
    handler: controllers.get,
  });
}

export default translatorRouter;
