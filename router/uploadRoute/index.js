import express from "express"
import upload from "../../utlis/upload.js"
const uploadRoute=express.Router()

uploadRoute.post("/upload",upload,async(req,res)=>{
    // console.log("uploadRoute",req);
     res.send("上传成功")
})


export default uploadRoute