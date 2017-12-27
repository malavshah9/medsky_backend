var express=require('express');
var router=express.Router();
var prescription=require('../models/model_prescription_mst');
router.get('/:id/:did?',function(req,res,next){
   if(req.params.did)
   {
    prescription. get_prescription_by_uid_and_did(req.params.id,req.params.did,function(err,rows){

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
    prescription.getpresc_byid(req.params.id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }


    });
}
});
module.exports=router;