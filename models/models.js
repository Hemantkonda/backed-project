const mongoose = require('mongoose');

// Creating Schema 
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minLength: 10,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
    },
    userType: {
        type: String,
        required: true,
        deafult: "CUSTOMER",
        enum: ["CUSTOMER", "ADMIN"]
    }
}, {timestamps : true})

// Exporting Schema
module.exports = mongoose.model("User", userSchema);
