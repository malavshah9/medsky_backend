var db=require('../dbconnection');
var medicines={
    
    get_all_medicines:function(callback)
    {
        return db.query("select * from medicine_mst",callback);
    },
    get_medicines_id:function(did,callback){
        return db.query("select * from medicine_mst m,medicine_type t where m.pk_med_id=? and m.med_type=t.pk_med_id",[did],callback);
    }
};
module.exports=medicines;