var db=require('../dbconnection');
var doctors={
    
    get_all_doctors:function(callback)
    {
        return db.query("select * from doctor_mst",callback);
    },
    get_doctors_did:function(did,callback){
        return db.query("select * from doctor_mst d,doc_degree g,doc_specialist s where d.pk_doc_email_id=? and d.fk_spec_id=s.pk_spec_id and d.fk_deg_id=g.pk_deg_id",[did],callback);
    }
};
module.exports=doctors;