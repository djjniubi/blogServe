import express from "express"
import userService from "../../service/userService.js"
//验证用户和密码是否为空
import {verifyAuth,verifyUserName,verifyPassword,verifyUserId,verifyUpdate,verifyDelete} from "../../middleware/user-middleware/index.js"
//验证token 是否过期
import {VERIFY_TOKEN} from "../../middleware/verify-middleware/index.js"
//上传头像
import upload from "../../utlis/upload.js"
 const userRouters=express.Router()
/**
 * 
 * @api {post} /api/user/add user
 * @apiName addUser
 * @apiGroup usergroup
 * @apiVersion  1.0.0
 * 
 * 
 * @apiParam  {String} username 用户名
 * @apiParam  {String} password 密码
 * @apiParam  {Number} identity 身份
 * 
 * @apiSuccess (200) {Number} name description
 * 
 * @apiParamExample  {application/json} Request-Example:
 * {
 *    username  : "王五",
 *     password : "123456",
 *     identity : 1  //默认是1  0是超级管理员 1是普通用户
 * }
 * 
 * 
 * @apiSuccessExample {type} Success-Response:
 * {
 *     ok : 1
 * }
 * 
 * 
 */
 //注册新增用户api
 userRouters.post("/user/add",userService.addUser);
 //登录
 userRouters.post("/user/login",verifyAuth,verifyUserName,verifyPassword,userService.login);
//获取用户信息
userRouters.get("/user/info",VERIFY_TOKEN,verifyUserId,userService.userInfo);
//修改用户信息
userRouters.put("/user/update",VERIFY_TOKEN,upload,verifyUpdate,userService.userUpdate);
//删除用户
userRouters.delete("/user/delete/:id",VERIFY_TOKEN,verifyDelete,userService.userDelete);
//获取用户列表
userRouters.get("/user/list",VERIFY_TOKEN,userService.userList)
 export default userRouters