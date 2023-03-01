import UserModel from "../../model/userModel.js"
export const verifyAuth=(req,res,next)=>{
    const {captcha} = req.session
    req.body["code"]!==captcha?res.send({code:404,message:"验证码错误"}):next()
}
export const verifyUserName=(req,res,next)=>{
      const {username}=req.body
      username?  next() : res.json({code:404,message:"请输入用户名"})
}
export const verifyPassword=(req,res,next)=>{
     const {password}=req.body
     password?  next() : res.json({code:404,message:"请输入密码"})
}

export const verifyUserId=(req,res,next)=>{
    const {id}=req.query
    id? next() : res.json({code:200,message:""})
}

export const verifyUpdate=async(req,res,next)=>{
    const {id}=req.body
    console.log("verifyUpdate",req.body);
     if(id){
        const data = await UserModel.find({_id:id})
         data.length==0? res.send("更新失败!"):data[0].username=="admin"?res.send("超级管理员不能被修改"):next()
     }
}

export const verifyDelete=async (req,res,next)=>{
    const {id}=req.params
    if(id){
       const data = await UserModel.find({_id:id})
        data.length==0? res.send("删除失败!"):data[0].identity==0? res.send("不能删除超级管理员"):next()
    }
}