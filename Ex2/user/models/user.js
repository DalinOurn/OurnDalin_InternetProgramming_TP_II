const mongoose = require('mongoose')

var userSchema = new mongoose.Schema ({
    username : {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
}, {
     timestamps : true,
});

var user = mongoose.model('Users', userSchema);
module.exports = { user, }