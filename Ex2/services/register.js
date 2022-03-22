const Users =require("../models/user");

const register = async (parame) => {
    try{
        const {
            firstname,
            lastname,
            username,
            email,
            password

        } = parame;
        console.log(parame);

        //check is user is already existed
        const existed = await Users.findOne({email: email});
        if(existed){
            throw "User is already existed~"
        }

        //create new user
        const newUser = {
            email,
            username,
            firstname,
            lastname,
            password
        }

        const createUser = await Users.create(newUser);
        return createUser
    }catch (err) {
        return {
            success: false,
            error: err || 'error'
        }
    }
}

module.exports = {
    register,
}