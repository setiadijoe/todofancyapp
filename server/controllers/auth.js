const Auth = require('../models/auth');

class Authenticate {

    static decode(req, res) {
        Auth.decode(req.body.accessToken)
            .then((loggedInUser) => {
                res.status(200).send(loggedInUser);
            });
    }
}

module.exports = Authenticate;