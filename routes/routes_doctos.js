var express=require('express');
var router=express.Router();
var doctors=require('../models/model_doctors');
router.get('/:id?',function(req,res,next){
if(req.params.id)
{
    doctors.get_doctors_did(req.params.id,function(err,rows){

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
            doctors.get_all_doctors(function(err,rows){
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
module.exports=router;