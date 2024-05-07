import { FastifyReply, FastifyRequest } from "fastify";

import { STANDARD } from "../../common/constants";
import { handleServerError } from "../../common/errors";

export const get = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    return reply.status(STANDARD.SUCCESS).send({ data: {}, message: "OK!" });
  } catch (e) {
    handleServerError(reply, e);
  }
};
