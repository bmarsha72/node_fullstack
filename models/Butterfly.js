var mongoose = require('mongoose');

var butterflySchema = new mongoose.Schema({
  name: String,
  genus: String,
  species: String
})

module.exports = mongoose.model("Butterly",butterflySchema)
