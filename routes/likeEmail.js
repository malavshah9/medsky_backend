var express=require('express');
var router=express.Router();
var likes=require('../model/blog');
router.get('/:id/:email',function(req,res,next){
likes.getLikeEmail(req.params.id,req.params.email,function(err,rows){
    if(err)
    {
        res.json(err);
    }
    else
    {
        res.json(rows);
    }
    });
});
module.exports=router;