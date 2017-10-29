require('dotenv').config();

const jwt = require('jsonwebtoken');
const FB = require('fb');

class FacebookAuth {

    static authenticate(response) {
        return new Promise((resolve, reject) => {
            FB.setAccessToken(response.authResponse.accessToken);
            FB.api('/me?fields=id,name,email', function (facebookResponse) {
                const payload = {
                    facebookID: facebookResponse.id,
                    name: facebookResponse.name,
                    email: facebookResponse.email
                }

                jwt.sign(payload, process.env.JWT_SECRET, (err, accessToken) => {
                    if (err) reject(err);
                    resolve(accessToken);
                });
            });
        });
    }
}

module.exports = FacebookAuth;