var db=require('../dbconnection');
var blog={

    getAllBlog:function(callback){

        return db.query("select * from blog_tbl",callback);
    },
    getBlogById:function(id,callback){

        return db.query("select * from blog_tbl where blog_id=?",[id],callback);
    },
    deleteBlog:function(id,callback){
        return db.query("delete from blog_tbl where blog_id=?",[id],callback);
    },
    updateBlog:function(id,bg,callback){
        return db.query("update blog_tbl set blog_title=?,blog_desc=?,blog_date=? where blog_id=?",[bg.blog_title,bg.blog_desc,bg.blog_date,id],callback);
    },
    addBlog:function(bg,callback){
        return db.query("insert into blog_tbl values(?,?,?,?,?,?)",[bg.blog_id,bg.blog_title,bg.blog_desc,bg.fk_doc_email_id,bg.blog_date,bg.fk_spec_id],callback);
    }
};

module.exports=blog;