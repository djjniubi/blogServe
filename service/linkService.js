
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
          const {id}= req.params
          const data =await linkController.linkDel(id)
          res.send(data)
    },
    //链接列表
    linkList:async(req,res)=>{
        const user =req.session["username"]
      const data=await linkController.linkList(req.query,user)
      res.send(data)
    },
    //链接详情
    linkInfo:async(req,res)=>{
        const {id}= req.params
        const data =await linkController.linkInfo(id)
          res.send(data)
    }
}

export default linkService