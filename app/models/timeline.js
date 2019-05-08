'use strict';

var mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');

var TimelineModel = function(){

    var TimelineSchema = new mongoose.Schema({
        _id: mongoose.Types.ObjectId,
        title: {type: String, required: [true, 'cant be blank']},
        post: {type: String, required: [true, 'cant be blank']},        
        userid: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
    }, {timestamps: true});

    TimelineSchema.plugin(mongoose_delete, { deletedAt : true});

    TimelineSchema.methods.findposts = function(pageNumber,nPerPage,cb) {
        console.log("pageNumber")
        console.log(pageNumber)
        return this.model('Timeline')
        .find({ userid: this.userid, deleted: false }, cb)
        .sort({createdAt: 'desc'})
        .skip(pageNumber > 0 ? ( ( pageNumber - 1 ) * nPerPage ) : 0)
        .limit(nPerPage)
        .populate('userid', 'name')
        .then(obj=>{
                    // console.log(obj)
                    return obj
                }).catch(err=>{
                    console.log(err)
                })
    };

    TimelineSchema.methods.findpost = function(x,cb){
        this.model('Timeline')
        .find({ userid: this.userid, _id : x }, cb)
        .then((obj)=>{
            // console.log(obj)
            return obj
        }).catch((err)=>{
            console.log("HERE IN ERROR",err)
            return err
        })
    }
    return mongoose.model("Timeline",TimelineSchema)
    

}



module.exports = new TimelineModel()