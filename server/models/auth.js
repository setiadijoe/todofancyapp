require('dotenv').config();
const jwt = require('jsonwebtoken');

class Auth {
    static decode(accessToken) {
        return new Promise((resolve, reject) => {
            resolve(jwt.verify(accessToken, process.env.JWT_SECRET));
        });
    }
}
module.exports = Auth;