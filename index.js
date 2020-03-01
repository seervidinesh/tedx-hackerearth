const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const PORT = 5000;

// Enable cores
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Body-Parser configuration

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

const event = require("./routes/events");

// Routes

app.use("/api/events", event);

app.listen(PORT, () => console.log(`Application Running on port ${PORT}`));
