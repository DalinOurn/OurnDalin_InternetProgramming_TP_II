const jwt = require('jsonwebtoken')

const auth = (message) => {
    return (req, res, next) => {
        const token = req.cookies;
        const SECRET_KEY = "ckie_secured";

        if ( token.access_token) {
            try {
                //decoded
                jwt.verify (token.access_token, SECRET_KEY);
            } catch (error) {
                return res.status(500).json ({ "status": "false", "message": error})
            }
        } else {
            return res.status(400).json ({ "status": "false", "message": "Attemp to " + message + "failed"})
        }
        next();
    }
}

module.exports = { auth, }