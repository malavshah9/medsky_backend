var db=require('../dbconnection');
var reminder={
   
    get_reminder_by_uid:function(uid,callback){
       return db.query(" select  * from reminder_tbl where fk_usr_email_id=?",[uid],callback);
    },
    
    getremindbyid:function(id,callback){
        return db.query("select * from reminder_tbl where pk_rem_id=?",[id],callback);
    },

    
    insert_reminder:function(Remind,callback){

        
        return db.query("insert into reminder_tbl values(?,?,?,?,?,?)",[Remind.pk_rem_id,Remind.fk_usr_email_id,Remind.rem_title,Remind.rem_desc,Remind.start_date,Remind.end_date],callback);
    },
    
};
module.exports=reminder;