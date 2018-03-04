var express=require('express');
var user=require('../model/usermst');
var router=express.Router();

router.get('/:id?',function(req,res,next)
{
    if(req.params.id)
    {
        user.getUserById(req.params.id,function(err,rows){
            if(err)
            {
                res.json(err);
            }
            else{
                res.json(rows);
            }
        })
    }
    else{
        user.getAlluser(function(err,rows){
            if(err)
            {
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
});
router.post('/',function(req,res,next){

    user.adduser(req.body,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(req.body);
        }
    });
});
router.put('/:id',function(req,res,next){
    user.UpdateUser(req.params.id,req.body,function(err,rows){
    if(err)
    {
        res.json(err);
    }
    else{
        res.json(rows);
    }
});
});
router.delete('/:id',function(req,res,next)
{
    user.deleteUser(req.params.id,function(err,count){
        
       if(err)
         {
         res.json(err);
         }
         else
         {
         res.json(count);
         }
        
       });
 });
 /*router.post('/',function(req,res,next){

    user.changepass(req.body,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(req.body);
        }
    });
});*/




module.exports=router;