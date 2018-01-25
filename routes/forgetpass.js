var express = require('express');
var router = express.Router();
var user=require('../model/usermst');

router.get('/:id?',function(req,res,next){

    user.getpass(req.params.id,function(err,rows){
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