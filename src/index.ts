import routes from "./app";

// Require the framework
import Fastify from "fastify";

const start = async () => {
  try {
    // Instantiate Fastify with some config
    const app = Fastify({
      logger: false,
    });

    // Register your application as a normal plugin.
    app.register(routes, {
      prefix: "/",
    });

    await app.listen({ port: 8080 }, (err, address) => {
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

process.on("unhandledRejection", (err) => {
  console.error(err);
  process.exit(1);
});

start();
