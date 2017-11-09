const FBAuth = require('../models/fbauth')

class FBAuthentic{
    static login(req, res){
        FBAuth.authenticate(req.body.response)
        .then(accessToken=>{
            res.status(200).send({accessToken: accessToken})
        })
        .catch(err=>{
            res.status(500).send(err)
        })
    }
}

module.exports = FBAuthentic;