var express=require('express');
var router=express.Router();
var prescription=require('../models/model_prescription_mst');
router.get('/:id?',function(req,res,next){
if(req.params.id)
{
    prescription.get_prescription_by_uid(req.params.id,function(err,rows){

            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(rows);
            }

    });
}
else
{
            prescription.get_all_prescription(function(err,rows){
                if(err)
                {
                    res.json(err);
                }
                else
                {
                    res.json(rows);
                }
            });
        }      
});
router.post('/',function(req,res,next){
    prescription.insert_prescription(req.body,function(err,count){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(req.body);
        }
    });
});
router.put('/:id',function(req,res,next){
    prescription.update_priscription(req.params.id,req.body,function(err,rows){
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