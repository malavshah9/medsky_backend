var db=require('../dbconnection');
var like={

    getAllLike:function(callback){

        return db.query("select * from likes_tbl",callback);
    },
    getLikeById:function(id,callback){

        return db.query("select * from likes_tbl where like_id=?",[id],callback);
    },
    deleteLike:function(id,callback){
        return db.query("delete from likes_tbl where like_id=?",[id],callback);
    },
    
    addLike:function(lk,callback){
        return db.query("insert into likes_tbl values(?,?,?)",[lk.like_id,lk.fk_blog_id,lk.fk_usr_id],callback);
    }
    
};

module.exports=like;