const express = require("express");
const server = express();
const PORT = process.env.PORT || 2370;

server.listen(PORT, () => {
  console.log("Server is up and running");
})
