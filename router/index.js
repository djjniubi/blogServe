import express from "express"
import userService from "../service/userService.js"
 const userRouters=express.Router()

 //新增用户api
 userRouters.post("/user/add",userService.addUser)

 export default userRouters