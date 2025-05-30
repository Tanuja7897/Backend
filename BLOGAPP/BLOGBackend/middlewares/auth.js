async function verifyUser(req,res,next){
    console.log("User verification middleware called");
    next();
}
module.exports = verifyUser;