var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// define schema and export
module.exports = deliveriesSchema = new Schema({
  description: String,
  event: String,
  main_speaker: String,
  name: String,
  published_date: String,
  ratings: String,
  related_talks: String,
  speaker_occupation: String,
  tags: String,
  title: String,
  url: String,
  views: String
});
