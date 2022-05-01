const { user } = require("../models/user");
const bcrypt = require('bcrypt');

const register = async(params, res) => {
    const { email, username, firstname, lastname, password } = params;
    const saltRounds = 10;
    const myPlaintextPassword = password;
    const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);

    try {
        const newUser = {
                email,
                username,
                firstname,
                lastname,
                password
                
            }
            //add newUser to users
        const createUser = await user.create(newUser);
        //write users to DB
        return res.status(200).json({ status: "true", message: "User created successfull!", data: createUser });
    } catch (error) {
        return res.status(400).json({ status: "false", message: error });

    }
}

module.exports = {
    register,
}