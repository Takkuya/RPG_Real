const mongoose = require('mongoose')

const Schema = mongoose.Schema

const SchemaUser = new Schema({
    nome : {
        type:String,
        required: true
    },

    email: {
        type:String,
        required: true
    },

    senha: {
        type: String,
        required: true
    }
})

module.exports = User = mongoose.model('User', SchemaUser)