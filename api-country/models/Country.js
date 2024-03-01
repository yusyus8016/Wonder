const mongoose = require("mongoose");

const Country = new mongoose.Schema({
    code:{
        type: String,
        required: true,
        trim: true
    },
    name:{
        type: String,
        required: true,
        trim: true
    },
    continent:{
        type: String,
        required: true,
        trim: true
    },
    capital:{
        type: String,
        trim: true
    },
    language:{
        type: String,
        required: true,
        trim: true
    },
    currency:{
        type: String,
        trim: true
    },
    flag:{
        type: String,
        trim: true
    },
    photos:{
        type: [String],
        trim: true
    }
});

module.exports = mongoose.model("Country", Country);