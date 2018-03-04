var express = require('express');
var router = express.Router();
var user=require('../model/usermst');

router.put('/',function(req,res,next){

    user.changepass(req.body,function(err,rows){

        if(err){
            res.json(err);
            console.log(res);
        }
        else{
            res.json(rows);
        
        }
        
    });
});
module.exports=router;
