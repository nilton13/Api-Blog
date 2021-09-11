var jwt = require("jsonwebtoken");

var secret = "70459c48756f9ef63928acdce8415388a4ca7318e4dd2943bf8e678c9af11efb"

module.exports = function(req,res,next){
    const authToken = req.headers['authorization']

    if(authToken != undefined){

        const bearer = authToken.split(' ');
        var token = bearer[1];

        try {
            var decoded = jwt.verify(token,secret);

            console.log(decoded);
            next();    
        } catch (err) {
            res.status(403);
            res.send("Você não está autenticado!");
            return;    
        }        

    }else{
        res.status(403);
        res.send("Você não está autenticado!");
        return;
    }

}