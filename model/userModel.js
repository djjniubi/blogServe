import mongoose from "mongoose";
//后台管理及用户表模型
const UserType={
    username:String,
    password:String,
    identity:Number,
    avatar:{
        type:String,
        default:""
    }
}
const schema = mongoose.Schema
const UserModel=mongoose.model("user",new schema(UserType))

export default UserModel