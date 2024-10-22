const express = require("express");
const server = express();
const mongoose = require("mongoose");

server.use(express.json( ))

const apis = require("./Router/api");
server.use("/api", apis);

mongoose
  .connect("mongodb://127.0.0.1:27017/db_expressnode_react")
  .then(() => {
    console.log("Successfully connect db...");
  })
  .catch((error) => {
    console.log(error);
  });

const port = 5000;
server.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
