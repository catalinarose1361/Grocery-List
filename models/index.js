const mongoose = require("mongoose");
const Schema = mongoose.Schema

//DATA SCHEMA
const GrocerySchema = new Schema({

    
    item: {
        type: String,
        required: "Item is Required"
    },

    amount: {
        type: String,
        required: "Amount is Required"
    },
    category: {
        type: String,
        required: "Category is Required"
    }
})

// MONGOOSE MODEL
const Grocery = mongoose.model("Grocery", GrocerySchema);

module.exports = Grocery