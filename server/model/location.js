const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
    state:String,
    city:Array,
    link:Array
    
});

const location = mongoose.model("location", locationSchema);

module.exports = location;