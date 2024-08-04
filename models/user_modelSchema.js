const mongoose = require('mongoose');
const Schema = require('mongoose')
const user_modelSchema = new mongoose.Schema(
{
    userName: { 
        type: Schema.ObjectId,
        required: true,
        unique: true
    },
    email: { 
        type: String,
        required: true,
        unique: true
    },
    password: { 
        type: String,
        required: true,
        unique: false
    },
    portfolio: { 
        type: String,
        required: false,
        unique: false
    },
});

module.exports = mongoose.model('user_model', user_modelSchema);
