import express, { json } from "express"
import "./db/index.js"
import router from "./router/index.js"
import session from "express-session"
import {SESSION_KEY } from "./config/index.js"
import path from "node:path"
const cookiesConfigs = {
   
   secure: false
}
const app=express()

app.use("/public",express.static("./public"))
//处理express 获取 req.body 
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use(session({name:"djjBlogs",secret:SESSION_KEY,saveUninitialized:false,resave: false,cookie:cookiesConfigs}))

//路由中间件
router(app)

//错误中间件
app.use((error,req,res,next)=>{
  const err =JSON.parse(error.message)
  res.status(err["code"]).send(err)
})

app.listen(3000,()=>{
   console.log("启动了");
})