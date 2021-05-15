const express = require("express");
const app = express();
const mongoose = require("mongoose")
const cors = require("cors");
const path = require("path");
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 
app.use(cors());

//mongoose
mongoose.connect("mongodb+srv://catalina-admin:fliaJUchyWudg52g@cluster0.xttdr.mongodb.net/groceriesDB?retryWrites=true&w=majority")

//data schema and model 
const grocerySchema = {
    item: String,
    amount: String,
    category: String,
}

const Grocery = mongoose.model("Grocery", grocerySchema);

//API routes
app.get('/groceries', function(req, res) {
    Grocery.find().then(groceries => res.json(groceries));
})
//test to see if server is running
// app.get('/', function(req, res) {
//     res.send("express is here")
// })

app.listen(port, function() {
    console.log("EXPRESS SERVER is running");
})
