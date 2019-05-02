exports.signup = (req,res,next) => {

    if(!req.body.name || !req.body.email || !req.body.password || Object.keys(req.body.name).length<=5 || Object.keys(req.body.email).length<=5 || Object.keys(req.body.password).length<8 ){
        return res.status(401).json({
            // message: "Required Data missing/invalid",
            // errors:{
            //     1 : "name required atleast 5 char Count[[[" + Object.keys(req.body.name).length ,
            //     2 : "email required atleast 5 char Count[[[" + Object.keys(req.body.email).length,
            //     3 : "password required atleat 8 char Count[[[" + Object.keys(req.body.password).length
            // }
            Status: "false",
            Reason : "from validator on route in api"
        });
    }
    else
    next();
}


exports.login = (req,res,next) => {

    if(!req.body.email || !req.body.password || Object.keys(req.body.email).length<=5 || Object.keys(req.body.password).length<8 ){
        return res.json({
            // message: "Required Data missing/invalid",
            // errors:{
            //     1 : "email required atleast 5 char Count[[[" + Object.keys(req.body.email).length,
            //     2 : "password required atleat 8 char Count[[[" + Object.keys(req.body.password).length
            // }
            Status: "false",
            Reason : "from validator on route in api"
        });
    }
    else
    next();
}