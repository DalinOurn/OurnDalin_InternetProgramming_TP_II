
const Users =require('../models/user');
const login = async (email, password) => {
    try {
        
         // check if user existed
       // const index = users?.findIndex(users => users.email == email);
        const user = await Users.findOne({email: email});
        //console.log(user)
        if (user < 0) 
            throw 'The user is not found~'

        // check if password matched
        if (user?.password != password) {
            throw 'The user information is incorrect~'
        }

        // return user's information
        return {
            suscess: true,
            data: user,
        }
        
    }  catch (err) {
        return {
            success: false,
            err: err || 'error'
        }
    }
}

module.exports = {
    login,
}