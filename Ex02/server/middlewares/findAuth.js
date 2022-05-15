const findAuth = (message) => {
    return (req, res, next) => {
        const token = req.cookies;
        const SECRET_KEY = "YOURSECRETKEYGOESHERE";
        // console.log(token.access_token);
        if (token.access_token) {
            return res.status(400).json({ "status": "false", "message": "You can not " + message + " again" })
        }
        next();
    }
}

module.exports = {
    findAuth,
}