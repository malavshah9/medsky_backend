var express=require('express');
var router=express.Router();
var blog=require('../model/blog');

router.get('/:id?',function(req,res,next){

    if(req.params.id){
        blog.getBlogLikes(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
    else{
    blog.getAllBlog(function(err,rows){

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
 

router.delete('/:id/:email',function(req,res,next){
    
        blog.deleteLike(req.params.id,req.params.email,function(err,rows){
    
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    });

module.exports=router;