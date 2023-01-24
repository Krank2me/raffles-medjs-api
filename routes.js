const raffles = require("./api/raffles");

function routes(app) {
  app.use("/api/v1/raffles", raffles);
}

module.exports = routes;
