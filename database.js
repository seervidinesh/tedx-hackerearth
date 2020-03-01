const mongoose = require("mongoose");
const csv = require("csvtojson");
const testSchema = require("./modal/Test");
const tedEventSchema = require("./modal/TedEvent");

// connect mongodb database
var connection = mongoose.createConnection(
  "mongodb://localhost:27017/dinesh-tedx-hackerearth",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

// create schema
var Test = connection.model("testschemadinesh", testSchema);
var TedEvent = connection.model("tedevent", tedEventSchema);

// dump csv Matches data to mongodb Matches Schema
connection.once("open", async () => {
  const testData = new Test({
    name: "Dinesh"
  });
  testData
    .save()
    .then(res => console.log("test"))
    .catch(err => console.log("Err"));
  if ((await TedEvent.countDocuments().exec()) > 0) return;
  Promise.all([
    csv()
      .fromFile("./csv/TED-22kData.csv")
      .then(jsonObj => {
        var eventData = jsonObj.filter(item => item.id !== "id");
        TedEvent.insertMany(eventData)
          .then(res => console.log("Loan Data Added to Database"))
          .catch(err => console.log(err));
      })
  ])
    .then(() => console.log("Adding Loan Data to MongoDb Database"))
    .catch(err => console.log(err));
});

// export schema
module.exports = {
  Test,
  TedEvent
};
