import UserModel from "../../model/userModel.js"
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
     if(id){
        const data = await UserModel.find({_id:id})
         data.length==0? res.send("更新失败!"):next()
     }

}