var express=require('express');
var router=express.Router();
var medicines=require('../models/model_medicines');
router.get('/:id?',function(req,res,next){
if(req.params.id)
{
    medicines.get_medicines_id(req.params.id,function(err,rows){

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
            medicines.get_all_medicines(function(err,rows){
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