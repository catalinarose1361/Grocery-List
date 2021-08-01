const mongoose = require("mongoose");
const Schema = mongoose.Schema

//DATA SCHEMA
const GrocerySchema = new Schema({

    item: {

        type: String 

    },

    price: {

        type: Number
        
    }
    
})

// MONGOOSE MODEL
const Grocery = mongoose.model("Grocery", GrocerySchema);

module.exports = Grocery