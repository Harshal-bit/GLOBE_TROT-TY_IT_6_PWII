const mongoose = require('mongoose');

const mongodb = require("mongodb");



const Schema = mongoose.Schema;

const smallTileSchema =  new Schema({
  
  name: String,
  img: String,
  distance: String,
})

const smallTileModel = mongoose.model('smalltile',smallTileSchema);

module.exports = smallTileModel;
