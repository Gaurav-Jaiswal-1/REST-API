// Import mongoose module to interact with MongoDB
const mongoose = require('mongoose');

// Get the Schema class from mongoose
const Schema = mongoose.Schema;

const GeoSchema = new Schema({
    type: {
        type: String,
        default: "Point"
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
});

module.exports = mongoose.model('Geo', GeoSchema);

// Create a new schema for a "ninja"
const ninjaSchema = new Schema({
    // Define a "name" field that is of type String and is required
    name: {
        type: String,
        required: [true, "Name field is required"]
    },

    // Define a "rank" field that is of type String
    rank: {
        type: String
    },

    // Define an "available" field that is of type Boolean with a default value of false
    available: {
        type: Boolean,
        default: false
    },

    geometry : GeoSchema

    // You can add a field for geo location here if needed
});

// Create a model using the schema, the model represents the "ninja" collection in MongoDB
const Ninja = mongoose.model('ninja', ninjaSchema);

// Export the model so it can be used in other parts of the application
module.exports = Ninja;
module.exports = mongoose.model('Geo', GeoSchema);

