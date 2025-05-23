const jwt = require('jsonwebtoken');
async function JwtToken(payload) {
    //payload + secret key
    let token = await jwt.sign(payload,"yhasecretkeydetehaijissetokwngeneratehoga")
    return token
}

async function verifyJWT(token){
    //generated token + secret key
    try{
        let isvalid = await jwt.verify(token , "yhasecretkeydetehaijissetokwngeneratehoga") 
        return true;
    }catch(err){
        return false;
    }
        
}

async function decodeJWT(token) {
    let  decode = jwt.decode(token)
    return decode    
}
module.exports = {JwtToken , verifyJWT , decodeJWT};