import app from "./app";

const start = async () => {
  try {
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
