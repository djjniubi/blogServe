import express from "express"
import userService from "../../service/userService.js"
 const userRouters=express.Router()

 //注册新增用户api
 userRouters.post("/user/add",userService.addUser)
 //登录
 userRouters.post("/user/login",userService.login)
 export default userRouters