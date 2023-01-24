require("dotenv").config();
const Airtable = require("airtable");
const { API_KEY, BASE } = process.env;
const base = new Airtable({ apiKey: API_KEY }).base(BASE);

async function getWiners(req, res) {
  const persons = [];
  try {
    base('competitor').select({
      maxRecords: 500,
      view: "Grid view"
  }).eachPage(function page(records, fetchNextPage) {
      records.forEach(function(record) {
          persons.push(record.get('fullname'));
      });
      res.status(200).send({ data: persons });
      fetchNextPage();
  }, function done(err) {
      if (err) { console.error(err); return; }
  });
  } catch (error) {
    res.status(500).send({ erroMessage: "server internal error" });
  }
}

module.exports = getWiners;
