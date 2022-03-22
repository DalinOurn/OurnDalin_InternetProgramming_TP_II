var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
"use strict"
var userSchema = new mongoose.Schema({ 
    email:{
        type: String,
        unique: true,
        required: true
    },
    username:{
        type: String,
        unique: true,
        required: true,
        validate: {
            validator: async val => Users.doesntExist({username: val}),
            message: ({value}) => `Username ${value} has already been taken.`
        }

    },
    firstname:{
        type: String,
       // unique: true,
        required: true
    },
    lastname:{
        type: String,
       // unique: true,
        required: true
    },
   
    password:{
        type: String,
        unique: true,
        required: true
    },
},
{
    timestamps:true,
});

//encrypt password function
userSchema.pre('save',function(next) {
    if(this.isModified('password')) {
        var salt = bcrypt.genSaltSync(10);
        this.password = bcrypt.hashSync(this.password,salt);
    }
    next();
})

//check matching password
userSchema.methods.mathchesPass = function(password){
    return bcrypt.compareSync(password,this.password);
}

userSchema.statics.doesntExist = async function (options) {
    return (await this.where(options).countDocuments() === 0)
}
var Users = mongoose.model('user',userSchema);
module.exports = Users;