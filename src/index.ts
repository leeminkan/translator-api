import Fastify from "fastify";

const fastify = Fastify();

fastify.get("/", async (request, reply) => {
  return "Hello there! 👋";
});

const start = async () => {
  try {
    await fastify.listen({ port: 8080 }, (err, address) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      console.log(`Server listening at ${address}`);
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
