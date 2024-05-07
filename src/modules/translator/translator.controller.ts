import { FastifyReply, FastifyRequest } from "fastify";

import { STANDARD } from "../../common/constants";
import { handleServerError } from "../../common/errors";

import { lookup } from "./translator.service";

export const get = async (
  request: FastifyRequest<{
    Querystring: {
      word: string;
    };
  }>,
  reply: FastifyReply
) => {
  try {
    const data = await lookup("english", request.query.word);

    return reply.status(STANDARD.SUCCESS).send({ data, message: "OK!" });
  } catch (e) {
    handleServerError(reply, e);
  }
};
