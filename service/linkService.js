
import linkController from "../controller/linkController.js"
const linkService={
    //新增链接
    addLink:async(req,res)=>{
       const data= await linkController.addLink(req.body)
       res.send(data)
    },
    //修改链接
    linkUpdate:async(req,res)=>{
        const data= await linkController.linkUpdate(req.body)
        res.send(data)
    },
    //删除链接
    linkDel:async(req,res)=>{

    },
    //链接列表
    linkList:async(req,res)=>{

    },
    //链接详情
    linkInfo:async(req,res)=>{

    }
}

export default linkService