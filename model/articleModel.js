import mongoose from "mongoose";
//后台文章模型
/**
 * @modeField {String}  title  标题(必填)
 * @modeField {String}  content  内容(必填)
 * @modeField {String}  creatorName  创建者(必填)
 * @modeField {String}  creationTime  创建时间(必填)
 * @modeField {String}   modificationTime  修改时间    
 * @modeField {String||number}   postType    文章类型  0 资讯  1  后端  2 前端               
 */ 
const articleType={
    title:{type:String,required:true},  
    content:{type:String,required:true}, 
    creatorName:{type:String,required:true},
    creationTime:{type:String,required:true},
    modificationTime:{type:String,default:""},
    postType:{type:String||Number,default:0}
}
const schema =mongoose.Schema
const ArticleMode=mongoose.model("article",new schema(articleType))

export default ArticleMode
