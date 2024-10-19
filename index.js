// Import the express module, which is a framework for building web applications
const express = require("express");

// Correct typo: 'requier' should be 'require'
const bodyParser = require('body-parser'); 

const mongoose =require("mongoose");

// Create an instance of an Express application
const app = express();

// Connect to mongodb
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

// Use body-parser to parse JSON bodies
app.use(bodyParser.json());

// Initialize routes
app.use('/api', require('./routes/api'));

// Error handling middleware
app.use(function(err, req, res, next){
    // console.log(err);

    // send the error message to client
    // status(433) is for showing the status of the backend to client
    res.status(433).send({error: err.message})
})

// Start the server and listen for incoming requests on a specified port (from environment variable 'process.env.port') or default to port 4000
app.listen(process.env.port || 4000, function(){
    // This function runs when the server starts successfully
    console.log("Now I am listening to the requests");
});
