import express from "express"
import cors from "cors"
import "./db/index.js"
import router from "./router/index.js"
import session from "express-session"
import {SESSION_KEY } from "./config/index.js"
const app=express()
app.use(cors())
//处理express 获取 req.body 
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(session({secret:SESSION_KEY}))
//路由中间件
router(app)

app.listen(3000,()=>{
   console.log("启动了");
})