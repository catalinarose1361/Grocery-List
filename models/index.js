const mongoose = require("mongoose");
const Schema = mongoose.Schema

//DATA SCHEMA
const GrocerySchema = new Schema({

    
    item: {
        type: String,
        required: "Item is Required"
    },

    price: {
        type: Number,
        required: "Item is Required"
    }
})

// MONGOOSE MODEL
const Grocery = mongoose.model("Grocery", GrocerySchema);

module.exports = Grocery