const { user } = require("../models/user");
const bcrypt = require('bcrypt');
//const { param } = require("express/lib/request");

const register = async (params, res) => {
    const { 
        email,
        username,
        firstname,
        lastname,password
        } = params;
    const saltRounds = 10;
    const myPlaintext = password;
    const hash = bcrypt.hashSync(myPlaintext, saltRounds);

    try {
        const newUser = {
            "email": email,
            "username": username,
            "firstname": firstname,
            "lastname": lastname,
            "password": hash
        }
        //add new user to users
        const createUser = await user.create(newUser);
        //write user to DB
        return res.status(200).json({ status:"true",message:"User created successfully!", data: createUser});
    } catch (error) {
        return res.status(400).json({ status:"false", message: error});
    }
}

module.exports = { register, }