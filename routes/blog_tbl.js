var express=require('express');
var router=express.Router();
var blog=require('../model/blog');

router.get('/:id?',function(req,res,next){

    if(req.params.id){
        blog.getBlogById(req.params.id,function(err,rows){
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

    blog.addBlog(req.body,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.put('/:id',function(req,res,next){
blog.updateBlog(req.params.id,req.body,function(err,rows){
 
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
 

router.delete('/:id',function(req,res,next){
    
        blog.deleteBlog(req.params.id,function(err,rows){
    
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    });

module.exports=router;