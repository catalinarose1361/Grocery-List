const router = require("express").Router();
const Grocery = require("../models")

//FIND ALL MOVIES
router.get('/groceries', function(req, res) {

    console.log("finding all movies")

    //SEND A RESPONSE TO THE FRONT END IN JSON FORMAT
    Grocery.find().then(groceries => res.json(groceries));
    
});

// ADD MOVIE

//RECEIVING A POST REQUEST FROM THE FRONT END
router.post('/newGrocery', function(req, res) {

    console.log(req.body)

   //DECONSTRUCTING THE OBJECT SENT FROM THE FRONT END
   const item = req.body.item;

   const price = req.body.price;
   
   //CREATING A NEW MOVIE TO ADD TO MONGODB USING MOVIE MODEL
   const newGrocery = new Grocery({

        item,
        price

    })

    //SAVING NEW MOVIE TO MONGODB ATLAS
    newGrocery.save()

})

//REMOVE MOVIE
router.delete('/delete/:id', function(req, res) {

    //RECONSTRUCT ID SENT FROM FRONT END 
    const id = req.params.id;

    //WHEN THE ID OF THE MODEL MATCHES THIS ID, DELETE
    Grocery.findByIdAndDelete({_id: id}, function(err) {

        if(!err) {

            console.log("Grocery Removed Sucessfully");

        } else console.log("Error grocery cannot be removed")

    })

})

module.exports = router