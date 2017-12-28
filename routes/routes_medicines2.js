var express=require('express');
var router=express.Router();
var medicines=require('../models/model_medicines');
router.get('/:id',function(req,res,next){
medicines.get_medicinename(req.params.id,function(err,rows){
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