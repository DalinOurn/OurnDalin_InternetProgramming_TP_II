const { user } = require("../models/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const login = async(email, password, req, res) => {
    try {
        const userFind = await user.findOne({
            email
        });
        if (userFind == null) {
            return res.status(500).json({ status: "false", message: "Email or password is incorrect" });

        }
        if (userFind.email != email) {
            return res.status(500).json({ status: "false", message: "Email or password is incorrect" })
        } else {
            if (!bcrypt.compareSync(password, userFind.password)) {
                return res.status(400).json({ status: "false", message: "Email or password is incorrect" });
            } else {
                const SECRET_KEY = "YOURSECRETKEYGOESHERE";
                const token = jwt.sign({ email: email, id: userFind._id.valueOf() }, SECRET_KEY, { expiresIn: '2h' });
                //add token(cookie)
                return res.status(200).cookie("access_token", token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === "production",
                    expires: new Date(Date.now() + 7200000), //expires 2h
                }).json({ status: "true", message: "Log in successful", data: userFind });
            }
        }
    } catch (error) {
        return res.status(500).json({ status: "false", message: error })
    }
}
module.exports = {
    login,
}