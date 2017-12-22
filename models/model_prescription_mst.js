var db=require('../dbconnection');
var prescription={
    get_prescription_by_uid:function(uid,callback){
        return db.query("select * from prescription_mst where fk_usr_email_id=?",[uid],callback);
    },
    get_prescription_by_uid_and_did:function(uid,did,callback){
        return db.query("select * from prescription_mst where fk_usr_email_id=? and fk_doc_email_id=?",[uid,did],callback);
    },
    get_all_prescription:function(callback)
    {
        return db.query("select * from prescription_mst",callback);
    },
    insert_prescription:function(Presc,callback)
    {
        
        return db.query("insert into prescription_mst values(?,?,?,?,?,?,?,?,?,?)",[Presc.id,Presc.uid,Presc.did,Presc.mids,Presc.mor,Presc.noon,Presc.night,Presc.instr,Presc.day,Presc.date],callback);
    },
    update_priscription:function(id,Presc,callback)
    {
        console.log(id);
        console.log("update prescription_mst set col_medids=?,pres_morning=?,pres_noon=?,pres_night=?,pres_instr=?,pres_day=?,pres_date=? where fk_usr_email_id=? ",[Presc.mids,Presc.mor,Presc.noon,Presc.night,Presc.instr,Presc.day,Presc.date,id],callback);
        return db.query("update prescription_mst set col_medids=?,pres_morning=?,pres_noon=?,pres_night=?,pres_instr=?,pres_day=?,pres_date=? where fk_usr_email_id=? ",[Presc.mids,Presc.mor,Presc.noon,Presc.night,Presc.instr,Presc.day,Presc.date,id],callback);
    }
};
module.exports=prescription;