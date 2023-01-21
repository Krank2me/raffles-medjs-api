require("dotenv").config();
const Airtable = require("airtable");
const { API_KEY, BASE } = process.env;
const base = new Airtable({ apiKey: API_KEY }).base(BASE);

async function addCompetitor(req, res) {
  const { fullname, email } = req.body;

  try {
    base("competitor").create(
      [
        {
          fields: {
            fullname,
            email,
          },
        },
      ],
      function (err, records) {
        if (err) {
          return;
        }
        records.forEach(function (record) {
          console.log(record.getId());
          res.status(200).send({ message: "Competitor registed success", id: record.id });
        });
      }
    );
  } catch (error) {
    res.status(500).send({ erroMessage: "server internal error" });
  }
}

module.exports = addCompetitor;
