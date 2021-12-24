// https://nodejs.org/en/docs/guides/getting-started-guide/

require("dotenv").config();
const express = require("express");
const app = express();

const hostname = process.env.HOSTNAME;
const port = process.env.PORT;

const args = require("minimist")(process.argv.slice(2));
const name = args["name"];

app.get("/", (req, res) => {
  res.send(`Hello ${name}`);
});

const server = app.listen(port, () =>
  console.log(`Server running at http://${hostname}:${port}/`)
);

process.on("SIGTERM", () => {
  server.close(() => {
    console.log("Process terminated");
  });
});
