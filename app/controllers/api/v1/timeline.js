const Timeline = require('../../../models/timeline')
const validator = require('../../../lib/validators/timeline')
const mongoose =  require('mongoose')

const Auth = require('../../../lib/auth')


module.exports = function(router){
    router.get('/view/:page?/:limit?',validator.view , (req,res)=>{

        const posts = new Timeline({
            userid : req.userData._id
        });

        // console.log(req.params.page)

        // if(req.params.page && !req.params.limit && req.params.page.length>23){
        //         // console.log("req.params.page.length")
        //         // console.log(req.params.page.length)
        //         posts.findpost(req.params.page,(err,obj)=>{
        //             if(obj){
        //             res.send(obj)
        //             }else
        //             res.send(err)
        //         })
        // }else{
        
            if(!req.params.limit){
                req.params.limit = 5;
                // console.log('from reqparam!', req.params.limit)
            }
            if(!req.params.page){
                req.params.page = 0;
            }
            req.params.limit = parseInt(req.params.limit);
            req.params.page = parseInt(req.params.page)

            posts.findposts(req.params.page,req.params.limit,(err,obj)=>{
                if(err){
                    res.status(200).send('false');
                }else{
                    // console.log("back in Timeline controller:",obj)
                    res.send(obj)
                    // setInterval(()=>{
                        
                    // },5000)
                }
            })
        // }
    })
    
    
    router.post('/add', validator.add, (req,res)=>{
        let post = new Timeline({
         _id: new mongoose.Types.ObjectId(),
         post: req.body.post,
         title: req.body.title,
         userid: req.userData._id
        })
        post.save().then((data)=>{
            console.log(data)
            console.log('here');
            res.send(data)
        },err=>{ 
            console.log(err)
         res.json({
             Status: 'false',
             Reason: 'err contecting db'
         });
        })
        //.catch()
     });
    router.delete('/delete/:postid?', validator.delete, (req,res)=>{
        Timeline.delete({ _id : req.params.postid , userid : req.userData._id },(err, doc)=>{
            if(err || !doc){
                res.send(200, 'false');
            }
            else{
                res.send(doc)
            }
        })
    });
    router.get('/restore/:postid?', validator.delete, (req,res)=>{
        Timeline.restore({ _id : req.params.postid , userid : req.userData._id },(err, doc)=>{
            if(err || !doc){
                res.send(200, 'false');
            }
            else{
                res.send(doc)
            }
        })
    });
    router.put('/edit/:postid?',(req,res)=>{
        Timeline.findOneAndUpdate({ _id : req.params.postid , userid : req.userData._id },
            {post: req.body.post,title: req.body.title},(err, doc)=>{
            if(err || !doc){
                console.log(req.body.id)
                console.log(req.userData._id)
                console.log(req.body.post)
                res.send(200, 'false');
            }
            else{
                res.send(doc)
            }
        })
    })
    
    router.get('/verifyUser',(req,res)=>{
        res.json({
            Status: 'true'
        })
    })
}