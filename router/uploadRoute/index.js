import express from "express"
import {unlink} from "node:fs"
import upload from "../../utlis/upload.js"
const uploadRoute=express.Router()

uploadRoute.post("/upload",upload,async(req,res)=>{
    // console.log("uploadRoute",req.file);
    const {encoding,mimetype,destination,filename,size}=req.file
    const fileTypeList=["jpg","jpeg","gif","png"]
    const ingURL=`${destination}/${filename}`
    if(size>150000){
        unlink(ingURL,(err)=>{
            if(err){
                throw err
            }
        })
        return res.status(500).send({msg:"上传文件太大"})
    }else if(fileTypeList.indexOf(mimetype.split("/")[1])===-1){
        unlink(ingURL,(err)=>{
            if(err){
                throw err
            }
        })
        return res.status(500).send({msg:"上传的格式不正确"})
    }else{
        res.send({
            code:200,
            ingUrl:`${destination.substring(1)}/${filename}`,
            msg:"上传成功"
         })
    }
    
})


export default uploadRoute