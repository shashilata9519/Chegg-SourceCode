const mongoose = require("mongoose");

const langSchema = new mongoose.Schema({
    language:String,
    subtitle:String
    
});

const audio = mongoose.model("audio", langSchema);

module.exports = audio;