import mongoose from "mongoose";
/**
 * @modeField {String}  linkName  链接名称(必填)
 * @modeField {String}  linkAddress  链接地址(必填)
 * @modeField {String}  linkImage  链接图片(非必填)
 * @modeField {String}  linkIntroduce  链接说明(必填)   
 * @modeField {String||number}   linkType    链接类型  0 前端框架  1  前端构建工具  2 小程序框架 3 UI组件库 4 可视化工具库 5 前端规范               
 */
const livingWellType={
    linkName:{type:String,required:true},
    linkAddress:{type:String,required:true},
    linkImage:{type:String,default:""},
    linkIntroduce:{type:String,required:true},
    linkType:{type:String||Number,default:0}
}
const schema =mongoose.Schema
const IvingWellMode=mongoose.model("living_well",new schema(livingWellType))

export default IvingWellMode