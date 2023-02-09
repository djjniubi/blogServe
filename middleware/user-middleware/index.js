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