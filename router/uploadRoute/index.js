import express from "express"
import upload from "../../middleware/upload-middleware/index.js"
const uploadRoute=express.Router()

uploadRoute.post("/upload",upload,async(req,res)=>{
    console.log("uploadRoute",req);
     res.send("上传成功")
})


export default uploadRoute