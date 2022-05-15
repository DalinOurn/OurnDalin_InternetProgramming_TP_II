const { user } = require("../models/user")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');



const findUser = async(_id, req, res) => {
    try {
        const currentUser = await user.findById(
            _id
        );
        // console.log(currentUser);
        if (currentUser) {
            return res.status(200).json({ status: "true", message: currentUser });
        } else {
            throw "User not found"
        }
    } catch (error) {
        return res.status(500).json({ status: "false", message: error });
    }

}

const currentUser = async(req, res) => {
    const token = req.cookies;
    const SECRET_KEY = "YOURSECRETKEYGOESHERE";
    try {
        const decoded = await jwt.verify(token.access_token, SECRET_KEY);
        // console.log("Decoded", decoded.email, "ID", decoded.id);
        const currentuser = await user.findById(
            decoded.id
        );
        return res.status(200).json({ status: "true", data: currentuser });
    } catch (error) {
        return res.status(400).json({ status: "false", error: error })
    }
}

const updateUser = async(params, req, res) => {
    const { firstname, lastname } = params;

    try {
        // console.log(firstname, lastname);
        await user.updateOne({ firstname: firstname, lastname: lastname });
        return res.status(200).json({ status: "true", message: "Update user succesfully" });
    } catch (error) {
        return res.status(400).json({ status: "false", error: error })
    }

}

const updatePassword = async(params, req, res) => {
    const { oldpassword, newpassword } = params;

    const saltRounds = 10;
    const myPlaintextPassword = newpassword;
    const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);

    const token = req.cookies;
    const SECRET_KEY = "YOURSECRETKEYGOESHERE";
    try {
        const decoded = await jwt.verify(token.access_token, SECRET_KEY);
        // console.log("Decoded", decoded.email, "ID", decoded.id);
        const currentuser = await user.findById(
            decoded.id
        );
        if (bcrypt.compareSync(oldpassword, currentuser.password)) {
            await user.updateOne({ password: hash });
            res.status(200).json({ status: "True", message: "Update password successfully" });
        } else {
            throw ("Password is not correct");
        }

    } catch (error) {
        return res.status(400).json({ status: "false", error: error });
    }
}

const deleteUser = async(req, res) => {
    const token = req.cookies;
    const SECRET_KEY = "YOURSECRETKEYGOESHERE";
    try {
        const decoded = await jwt.verify(token.access_token, SECRET_KEY);
        // console.log("Decoded", decoded.email, "ID", decoded.id);
        const currentuser = await user.findById(
            decoded.id
        );
        await user.deleteOne({ username: currentuser.username });
        res.status(200).clearCookie('access_token').json({ status: "True", message: "User deleted successfully" })
    } catch (error) {
        return res.status(400).json({ status: "false", error: error })
    }
}
module.exports = {
    findUser,
    currentUser,
    updateUser,
    updatePassword,
    deleteUser,
}