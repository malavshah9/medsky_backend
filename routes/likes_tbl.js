var express=require('express');
var router=express.Router();
var blog=require('../model/like');

router.get('/:id?',function(req,res,next){

    if(req.params.id){
        blog.getLikeById(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
    else{
    blog.getAllLike(function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
}
});

router.post('/',function(req,res,next){

    blog.addLike(req.body,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


 

router.delete('/:id',function(req,res,next){
    
        blog.deleteLike(req.params.id,function(err,rows){
    
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    });

module.exports=router;