const { user } = require("../models/user");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const req = require("express/lib/request");

const logIn = async( email, password, req, res) => {
    try {
        const userFind = await user.findOne ({
            email
        });
        if (userFind == null) {
            return res.status(500).json({ status:"false", message: "Email or password is incorrect"});

        }
        if (userFind.email != email) {
            return res.status(500).json({ status: "false", message: "Email or password is incorrect"});
        }
        else { 
            if ( !bcrypt.compareSync(password, userFind.password)) {
                return res.status(500).json({ status: "false", message: "Email or password is incorrect"});
            } else {
                const SECRET_KEY = "ckie_secured";
                const token = jwt.sign({ email: email, id: userFind._id.valueOf()}, SECRET_KEY, { expiresIn: '3h'} );

                //add token to cookie
                return res.status(200).cookie("access_token", token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === "production",
                    expires : new Date(Date.now() + 10800000), //3h
                }).json ({ status: "true", message: "Log in successfully!", data: userFind});
            }
        }
    } catch (error) {
        return res.status(500).json ({ status:"false", message: error})
    }
}

module.exports = { logIn, }