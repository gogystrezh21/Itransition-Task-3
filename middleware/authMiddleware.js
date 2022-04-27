const jwt = require('jsonwebtoken')
const {secret} = require('../config')

const requireAuth = (req, res, next) => {
    try {
        const authToken = req.cookies['AuthToken'];
        const decodedData = jwt.verify(authToken, secret);

        req.user = decodedData;

        next();
    } catch (error) {
        res.redirect('/auth/authorization');
    }
};

module.exports = requireAuth;