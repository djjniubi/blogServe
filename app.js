import express from "express"
import userRouters from "./router/index.js"
import "./db/index.js"
import {setPassword} from "./utlis/encrypt.js"
setPassword("asdf123")
const app=express()
app.use(express.urlencoded({extended:false}))
app.use(express.json())
//接口中间件
app.use("/api",userRouters)
app.listen(3000,()=>{
   console.log("启动了");
})