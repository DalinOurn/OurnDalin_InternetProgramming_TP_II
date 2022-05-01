const { user } = require("../models/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const login = async(email, password, req, res) => {
    try {
        const userFind = await user.findOne({
            email
        });
        if (userFind == null) {
            return res.status(500).json({ status: "false", message: "User not found!" });

        }
        if (userFind.email != email) {
            return res.status(500).json({ status: "false", message: "Email is incorrect!" })
        } else {
            if (!bcrypt.compareSync(password, userFind.password)) {
                return res.status(400).json({ status: "false", message: "Password is incorrect!" });
            } else {
                const SECRET_KEY = "my_cookieTK";
                const token = jwt.sign({ email: email, id: userFind._id.valueOf() }, SECRET_KEY, { expiresIn: '2h' });
                //add token(cookie)
                return res.status(200).cookie("access_token", token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === "production",
                    expires: new Date(Date.now() + 7200000), //expire 2h
                }).json({ status: "true", message: "Log in successfull!", data: userFind });
            }
        }
    } catch (error) {
        return res.status(500).json({ status: "false", message: error })
    }
}
module.exports = {
    login,
}