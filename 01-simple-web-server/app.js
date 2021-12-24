// https://nodejs.org/en/docs/guides/getting-started-guide/

const express = require("express");
const app = express();

const hostname = process.env.HOSTNAME;
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World");
});

const server = app.listen(port, () =>
  console.log(`Server running at http://${hostname}:${port}/`)
);

process.on("SIGTERM", () => {
  server.close(() => {
    console.log("Process terminated");
  });
});
