// index.js
// where your node app starts

// init project
require("dotenv").config();
var express = require("express");
var app = express();
const moment = require("moment");

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// If argument is provided, check whether it is in unix, or in YYYY-dd-mm, and then returns unix date and utc format date.
app.get("/api/:date", function (req, res) {
  // For shortening purposes
  const date = req.params.date;

  if (date.length == 13) {
    res.json({
      unix: date,
      utc: new Date(Number(date)).toUTCString(),
    });
  } else if (date.length == 10 && isNaN(Date.parse(date)) === false) {
    res.json({
      unix: new Date(date).valueOf(),
      utc: new Date(date).toUTCString(),
    });
  } else {
    res.json({
      error: "Invalid time",
    });
  }
});

// Returns current date in unix and utc if no arguments are given
app.get("/api", function (req, res) {
  res.json({
    unix: new Date(Date.now()).valueOf(),
    utc: new Date(Date.now()).toUTCString(),
  });
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
