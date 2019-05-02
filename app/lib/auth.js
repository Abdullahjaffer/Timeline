const jwt = require('jsonwebtoken')


module.exports = function(){
    
  return (req, res, next)=>{
    try{
        const decoded = jwt.verify(req.headers.authorization.split(' ')[1], 'abc12385')
        req.userData = decoded;
        next();
    }
    catch(err){
        res.json({
            Status: 'false',
            Reason: "auth failed from auth"
        });
    }
}

// return (req,res,next)=>{
//     next()
// }

}