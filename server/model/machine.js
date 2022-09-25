const mongoose = require("mongoose");

const machineSchema = new mongoose.Schema({
   image:String,
   capacity:String,
   material:String
    
});

const machinedetails = mongoose.model("machine", machineSchema);

module.exports = machinedetails;