import {verifyToken } from "../../utlis/token.js"
export const VERIFY_TOKEN=(req,res,next)=>{
    const token =req.headers["authorization"]?.split(" ")
    if(token) {
       const decoded = verifyToken(token[1])
      decoded? next() : res.json({code:401,message:"token 过期了"}) 
    }else{
        res.json({code:401,message:"您没有权限访问"})
    }
    
}