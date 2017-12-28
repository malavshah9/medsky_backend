var express = require('express');
var router = express.Router();
var user=require('../model/usermst');



/*router.post('/',function(req,res,next){

        user.user_login(req.body,function(err,rows){

            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
});*/


router.post('/',function(req,res,next){

        user.login(req.body,function(err,rows){

            if(err){
                res.json(err);
            }
            else{
              
                res.json(rows);
                   /* if(count==[])
                    {
                        alert("wrong");
                    }
                    else
                    {console.log(req.body);
                    res.json(req.body);
                    }*/
            }
            
        });
});
router.get('/',function(req,res,next){

    user.getAlluser(function(err,rows){
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