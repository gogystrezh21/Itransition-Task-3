const jwt = require('jsonwebtoken')
const {secret} = require('../config')

module.exports = function (req, res) {
    if (req.method === "OPTIONS") {
        next()
    }
    try {
        const token = req.header('x-auth-token');
        if (!token) {
            return res.status(403).json({message: "User is not authorized"})
        }
        const decodedData = jwt.verify(token, secret)
        req.user = decodedData
        next()
    } catch (e) {
        console.log(e)
        return res.status(403).json({message: "User is not authorized"})
    }
};