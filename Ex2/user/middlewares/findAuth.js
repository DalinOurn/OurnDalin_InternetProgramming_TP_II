const findAuth = (message) => {
    return (req, res, next) => {
        const token = req.cookies;
        const SECRET_KEY = "ckie_secured";

        if ( token.access_token) {
            return res.status(400).json ({ "status": "false", "message":"You cannot " + message + "again"})
        }
        next();
    }
}

module.exports = { findAuth, }