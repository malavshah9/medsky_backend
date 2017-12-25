var express = require('express');
var router = express.Router();
var user=require('../model/usermst');

router.post('/',function(req,res,next){

        user.login(req.body,function(err,rows){

            if(err){
                res.json(err);
            }
            else{
              
                    console.log("success");
                res.json(req.body);
            }
            
        });
});
router.get('/',function(req,res,next){

    user.getalluser(function(err,rows){
        res.json(rows);
    });

});
module.exports=router;