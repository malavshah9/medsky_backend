var db=require('../dbconnection');
var user={
    getAlluser:function(callback){
        return db.query('select * from user_mst',callback);
    },
    getUserById:function(eid,callback){
        return db.query('select * from user_mst where pk_usr_email_id=?',[eid],callback);
        
    },
    /*AddUser:function(usr,callback){
        //var data= db.query('insert into user_mst values(?,?,?,?,?,?,?,?,?,?)',[null,usr.pk_usr_email_id,usr.usr_name,usr.usr_mno,usr.usr_pass,usr.usr_gen,usr.usr_pro_pic,usr.usr_verify,usr.usr_token,usr.usr_type],callback);
       var data= db.query("insert into user_mst values(?,?,?,?,?,?,?,?,?,?)",[usr.usr_sr_no,usr.pk_usr_email_id,usr.usr_name,usr.usr_mno,usr.usr_pass,usr.usr_gen,usr.usr_pro_pic,usr.usr_verify,usr.usr_token,usr.usr_type],callback);
       console.log(data);
      // console.log('usr.usr_name');
        //return db.query('insert into task values(?,?,?)',[t.Id,t.Title,t.Status],callback);
        //return db.query('insert into user_mst values(?,?,?,?,?,?,?,?,?,?)',[null,u.pk_usr_email_id,u.usr_name,u.usr_mno,u.usr_pass,null,null,null,null,null],callback)
        //console.log('usr_sr_no,usr_name');
    },*/
    signup:function(usr,callback)
    {
        var res= db.query('insert into user_mst values(?,?,?,?,?,?,?,?,?,?)',[usr.usr_sr_no,usr.pk_usr_email_id,usr.usr_name,usr.usr_mno,usr.usr_pass,usr.usr_gen,usr.usr_pro_pic,usr.usr_verify,usr.usr_token,usr.usr_type],callback);
       
    },
    UpdateUser:function(id,usr,callback){
        return db.query('update user_mst set usr_name=?,usr_mno=?,usr_pass=? where pk_usr_email_id=?',[usr.usr_name,usr.usr_mno,usr.usr_pass,id],callback);
        //return db.query('update task set Title=?,Status=? where Id=?',[t.Title,t.Status,t.Id],callback);
    },
    deleteUser:function(id,callback)
    {
        return db.query('delete from user_mst where pk_usr_email_id=?',[id],callback);
    },
   /* changepass:function(usr,callback)
    {
        var msg='';
        var result=db.query('select * from user_mst where pk_usr_email_id=? ans usr_pass=?',[usr.pk_usr_email_id,usr.usr_pass],callback);
        if(result!='')
        {
            msg=done;
            return msg;
        }
        else
        {
            msg="invalid";
            return msg;
        }
    },*/
    login:function(usr,callback)
    {
    return db.query('select * from user_mst where pk_usr_email_id=? and usr_pass=?',[usr.pk_usr_email_id,usr.usr_pass],callback);
    },
  
}
module.exports=user;