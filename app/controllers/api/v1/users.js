const User = require('../../../models/users')
const validator = require('../../../lib/validators/users')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')




module.exports =  function(router){
    router.post('/signup',validator.signup,(req,res) => {
        bcrypt.hash(req.body.password,10).then(function(hash) {
            
            console.log(hash)
            
            const user = new User({
                _id: new mongoose.Types.ObjectId(),
                name: req.body.name,
                email: req.body.email,
                password: hash
            });
            user.save().then(()=>{
                let userWithToken = user.CreateToken();
                res.json(userWithToken)
            }).catch((err)=>{
                console.log(err)
                res.json({
                    Status: 'false',
                    Reason: "Email taken"
                });
            })
        });
        
        
      });
      
      router.post('/login',validator.login,(req,res) =>{
        User.findOne({
            email : req.body.email
        },'_id email name password', (err,obj)=>{
            if(err){
                res.json({
                    Status : "false",
                    Reason :  "Connectivity Error"             
                });
            }
            else if(obj){
                console.log(req.body.password)
                console.log(obj.password)
                bcrypt.compare(req.body.password, obj.password,function(err,result){
                    if(result == true){
                        let userToken = obj.CreateToken()
                        console.log(userToken)
                        res.json(userToken)
                    }
                    if(result == false){
                        res.json({
                            Status : "false",
                            Reason :  "Wrong Pass"             
                        });

                        if(err){
                            console.log(err)
                            res.json({
                                Status : "false",
                                Reason :  "Server"             
                            });
                        }
                    }
                    console.log(result)
                })
            }
            else{
                res.send({
                    Status : "false",
                    Reason :  "No Such User"             
                });
            }
        })
      });
      
}