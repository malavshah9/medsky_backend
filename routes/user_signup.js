var express = require('express');
var router = express.Router();
var user=require('../model/usermst');

router.post('/',function(req,res,next){

    user.signup(req.body,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(req.body);
        }
    });
});

module.exports=router;