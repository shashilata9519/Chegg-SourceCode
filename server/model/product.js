const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    state:String,
    city:Array,
    organicFertilizers:Array
    
});

const product = mongoose.model("products", productSchema);

module.exports = product;