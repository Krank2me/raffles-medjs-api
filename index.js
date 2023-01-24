require("dotenv").config();
const { server } = require("./app");

const port = process.env.PORT || 4001;

server.listen(port, () => {
  console.log("Server started on port ", port);
});

module.exports = server;