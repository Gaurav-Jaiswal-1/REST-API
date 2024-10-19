const express = require('express'); // Import the Express framework for creating web servers.
const router = express.Router(); // Create a new router to handle specific routes.
const Ninja = require('../models/ninja');

// Get the list of ninjas from the database
router.get('/ninjas', function(req, res, next){
    res.send({ type: "GET" });
});

// Add a new ninja to the database
router.post('/ninjas', function(req, res, next){
    // console.log(req.body); // Log the request body to the console
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja);

    }).catch(next)
  
});

// Update a ninja in the database
router.put('/ninjas/:id', function(req, res, next){

    // Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(ninja){
    //     res.send(ninja);


    Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){

        
        Ninja.findOne({_id: req.params.id}).then(function(ninja){

            res.send(ninja);
        })

    })
    // res.send({ type: "PUT" });
});

// Delete a ninja from the database
router.delete('/ninjas/:id', function(req, res, next){

    //console.log(req.params.id);

    Ninja.findByIdAndDelete({_id: req.params.id}).then(function(ninja){
        res.send(ninja);
    })
    // res.send({ type: "DELETE" });
});

module.exports = router; // Make the router available to be used in other parts of the application.
