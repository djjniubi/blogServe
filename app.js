import express from "express"
import cors from "cors"
import "./db/index.js"
import router from "./router/index.js"
import session from "express-session"
import {SESSION_KEY } from "./config/index.js"
import svgCaptcha from "svg-captcha"
const app=express()

app.use(cors({
   credentials: true,
}))
//处理express 获取 req.body 
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(session({secret:SESSION_KEY,saveUninitialized:false,name:"djjBlogs",cookie:{maxAge:1000*60*60,secure: false}}))
//路由中间件
router(app)

app.listen(3000,()=>{
   console.log("启动了");
})