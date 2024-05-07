import type { IncomingMessage, ServerResponse } from "http";
import app from "./app";

// const start = async () => {
//   try {
//     await app.listen({ port: 8080 }, (err, address) => {
//       if (err) {
//         console.error(err);
//         process.exit(1);
//       }
//       console.log(`Server listening at ${address}`);
//     });
//   } catch (err) {
//     console.error(err);
//     process.exit(1);
//   }
// };

// process.on("unhandledRejection", (err) => {
//   console.error(err);
//   process.exit(1);
// });

// start();

/**
 * This is a similar implementation to the one found in the Fastify docs,
 * which can be found [here]{@link https://www.fastify.io/docs/latest/Serverless/#should-you-use-fastify-in-a-serverless-platform#Vercel}.
 * The `app#ready()` is to indicate that all plugins have been loaded and the server is ready,
 * then the `app#server#emit()` method is called to handle the incoming request and Fastify handles it from there.
 */
export default async (
  req: IncomingMessage,
  res: ServerResponse
): Promise<void> => {
  await app.ready();
  app.server.emit("request", req, res);
};
