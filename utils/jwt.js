let jwt = require("jsonwebtoken");
let key = "secret";

function signToken(payload, cb){
    jwt.sign(payload, key, cb);
}

module.exports={
    signToken:signToken
}