import express from "express"
import userService from "../../service/userService.js"
//验证用户和密码是否为空
import {verifyUserName,verifyPassword,verifyUserId,verifyUpdate} from "../../middleware/user-middleware/index.js"
//验证token 是否过期
import {VERIFY_TOKEN} from "../../middleware/verify-middleware/index.js"
 const userRouters=express.Router()

 //注册新增用户api
 userRouters.post("/user/add",userService.addUser);
 //登录
 userRouters.post("/user/login",verifyUserName,verifyPassword,userService.login);
//获取用户信息
userRouters.get("/user/info",VERIFY_TOKEN,verifyUserId,userService.userInfo);
//修改用户信息
userRouters.put("/user/update",verifyUpdate,userService.userUpdate)
 export default userRouters