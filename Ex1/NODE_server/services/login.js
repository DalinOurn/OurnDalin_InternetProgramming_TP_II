

const Users = require("../modules/user");
const { createAsessionToken } = require('../services/utils');


const login = async (email, password) => {

    try {
        // check if email existed
        const user = await Users.findOne({email})
        if (!user)
            throw 'The user is not found~'
        
        if (!user.matchesPassword(password)) {
            throw "Ther user's information is incorrect~"
        }
          const token = createAsessionToken(user?._id, user?.email);
      
        return {
            suscess: true,
            data: {user, token},
        }
        
    } catch (err) {
        return {
            success: false,
            err: err || 'error'
        }
    }
};

module.exports = {
    login
}