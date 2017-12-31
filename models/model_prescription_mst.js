var db=require('../dbconnection');
var prescription={
    get_prescription_by_uid:function(uid,callback){
        return db.query("select DISTINCT p.fk_doc_email_id, d.doc_name from prescription_mst p,doctor_mst d where p.fk_usr_email_id=? and p.fk_doc_email_id=d.pk_doc_email_id ORDER BY p.pres_date DESC",[uid],callback);
    },
    get_prescription_by_uid_and_did:function(uid,did,callback){
       return db.query(" select  pres_date,pk_pres_id from prescription_mst where fk_usr_email_id=? and fk_doc_email_id=? ORDER BY pres_date DESC",[uid,did],callback);
    },
    getpresc_byid:function(id,callback){
        return db.query("select p.*,d.doc_name from prescription_mst p,doctor_mst d where pk_pres_id=? and p.fk_doc_email_id=d.pk_doc_email_id",[id],callback);
    },
    get_all_prescription:function(callback){
        return db.query("select * from prescription_mst",callback);
    },
    insert_prescription:function(Presc,callback){
        return db.query("insert into prescription_mst values(?,?,?,?,?,?,?,?,?,?)",[Presc.id,Presc.uid,Presc.did,Presc.mids,Presc.mor,Presc.noon,Presc.night,Presc.instr,Presc.day,Presc.date],callback);
    },
    update_priscription:function(id,Presc,callback){
        return db.query("update prescription_mst set col_medids=?,pres_morning=?,pres_noon=?,pres_night=?,pres_instr=?,pres_day=?,pres_date=? where fk_usr_email_id=? ",[Presc.mids,Presc.mor,Presc.noon,Presc.night,Presc.instr,Presc.day,Presc.date,id],callback);
    }
};
module.exports=prescription;