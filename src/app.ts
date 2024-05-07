import {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  FastifyServerOptions,
} from "fastify";
import translatorRouter from "./modules/translator/translator.route";

async function app(
  instance: FastifyInstance,
  opts: FastifyServerOptions,
  done: any
) {
  instance.get(
    "/health-check",
    async (req: FastifyRequest, reply: FastifyReply) => {
      return "Hello there! 👋";
    }
  );
  instance.register(translatorRouter, { prefix: "/api/translator" });
  done();
}

export default app;
