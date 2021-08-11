const mongoose = require('mongoose')

const posttemplate = new mongoose.Schema({

    name : {
        type : String,
        required : true
    },

    lat : {
        type : String,
        required : true,
    },

    long : {
        type : String,
        required : true,
    }
})

const posts = mongoose.model('posts',posttemplate)

module.exports = {posts}