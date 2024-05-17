import {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  FastifyServerOptions,
} from "fastify";
import cors from "@fastify/cors";
import translatorRouter from "./modules/translator/translator.route";

async function app(
  instance: FastifyInstance,
  opts: FastifyServerOptions,
  done: any
) {
  instance.register(cors, {
    origin: "*",
  });

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
