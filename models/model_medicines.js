var db=require('../dbconnection');
var medicines={
    
    get_all_medicines:function(callback)
    {
        return db.query("select * from medicine_mst",callback);
    },
    get_medicines_id:function(did,callback){
        return db.query("select * from medicine_mst m,medicine_type t where m.pk_med_id=? and m.med_type=t.pk_med_id",[did],callback);
    },
    get_medicinename:function(mid,callback){
    
        return db.query("select m.med_name,t.med_type from medicine_mst m,medicine_type t where m.pk_med_id=? and m.med_type=t.pk_med_id",[mid],callback);
    },
    get_medicinenames:function(item,callback)
    {
        /*var marr=[];
        for(i=0;i<item.length;i++)
        {
               marr[i]=item[i];
        }*/
        var str=item;
        var arr=[];
        arr=str.split(',');
 return db.query("select med_name from medicine_mst where pk_med_id IN (?)",[arr],callback);
    }
};
module.exports=medicines;