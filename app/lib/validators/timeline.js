exports.view = (req,res,next) => {

    if(!req.userData._id){
        return res.status(401).json({
            message: "Required Data missing",
            error: {
                1: "Sign in"
            }
        });
    }
    else
    next();
}

exports.add = (req,res,next) => {

    if(!req.userData._id || !req.body.title || !req.body.post || Object.keys(req.body.post).length<=0 || Object.keys(req.body.title).length<=0){
        return res.status(401).json({
            message: "Required Data missing/invalid",
            error: {
                1: "Log in",
                2: "Post cannot be empty",
                3: "Post must be atleast 1 char"
            }
        });
    }
    else
    next();
}

exports.delete = (req,res,next)=>{
    if(req.params.postid){
        next();
    }
    else{
        return res.status(401).json({
            message: "Required Data missing/invalid",
            error: {
                1: "Log in",
                2: "Post cannot be empty",
                3: "Post must be atleast 1 char"
            }
        });
    }
}


exports.edit =  (req,res,next)=>{
    if(req.params.postid && req.body.post && req.body.title){
        next();
    }
    else{
        return res.json({
            Status: 'false',
            Reason: "Required Data missing/invalid",
            error: {
                1: "Log in",
                2: "Post cannot be empty",
                3: "Post must be atleast 1 char"
            }
        });
    }
}
