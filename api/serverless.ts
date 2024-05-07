"use strict";
import type { IncomingMessage, ServerResponse } from "http";
import * as dotenv from "dotenv";
dotenv.config();

import routes from "../src/app";

// Require the framework
import Fastify from "fastify";

// Instantiate Fastify with some config
const app = Fastify({
  logger: false,
});

// Register your application as a normal plugin.
app.register(routes, {
  prefix: "/",
});

export default async (
  req: IncomingMessage,
  res: ServerResponse
): Promise<void> => {
  await app.ready();
  app.server.emit("request", req, res);
};
