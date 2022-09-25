const mongoose = require("mongoose");

const labSchema = new mongoose.Schema({
    state:String,
    city:String,
    lab:String,
    link:String
    
});

const labs = mongoose.model("workshops", labSchema);

module.exports = labs;