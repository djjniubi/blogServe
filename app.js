import express from "express"
import cors from "cors"
import "./db/index.js"
import router from "./router/index.js"
import session from "express-session"
import {SESSION_KEY } from "./config/index.js"
import path from "node:path"
const cookiesConfigs = {
   sameSite: 'None', 
   secure: false
}
const app=express()
app.use(cors({
   origin:"http://127.0.0.1:3000",
   // allowedHeaders:'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
   
   credentials: true,
   optionsSuccessStatus:200,
}))
app.use("/public",express.static("./public"))
//处理express 获取 req.body 
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use(session({name:"djjBlogs",secret:SESSION_KEY,saveUninitialized:false,resave: false,cookie:cookiesConfigs}))

//路由中间件
router(app)


app.listen(3000,()=>{
   console.log("启动了");
})