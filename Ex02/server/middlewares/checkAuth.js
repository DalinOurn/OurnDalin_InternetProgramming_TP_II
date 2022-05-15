const jwt = require('jsonwebtoken')

const checkAuth = (message) => {
    return (req, res, next) => {
        const token = req.cookies;
        const SECRET_KEY = "YOURSECRETKEYGOESHERE";
        // var decoded = {};
        // console.log(token.access_token);
        if (token.access_token) {
            try {
                // decoded = 
                jwt.verify(token.access_token, SECRET_KEY);
                // console.log("Decoded", decoded.email, "ID", decoded.id);
            } catch (error) {
                return res.status(500).json({ "status": "false", "message": error })
            }
        } else {
            return res.status(400).json({ "status": "false", "message": "Attemp to " + message + " failed" })
        }
        next();
    }
}

module.exports = {
    checkAuth,
}