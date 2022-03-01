const jwt  = require("jsonwebtoken")

const Register = require("../models/register")

const auth = async(req,res,next) =>{
    
    try{
        const token = req.cookies.jwt
        const verifyuser = jwt.verify(token,process.env.SECRET_KEY);
     
        console.log(verifyuser)
    
        const user = await Register.findOne({_id:verifyuser._id})
        console.log(user)

        req.token = token,
        req.user = token

         next();
    }catch(er){
        console.log(er)
       res.status(404).send(er)   
    }
}

function authenticationtoken(req, res, next) {
    const token = req.body.token || req.query.token || req.headers[ "x-access-token" ];
    if (token) {
        return jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
            if (err) {
                return res.json({
                    success: false,
                    message: "Failed to authenticate token.",
                });
            }
            req.user = decoded;
            return next();
        });
    }
    
};

module.exports = authenticationtoken