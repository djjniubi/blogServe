import express from "express"
import linkService from "../../service/linkService.js"
const linkRoute=express.Router()

//新增链接资源
linkRoute.post("/link/add",linkService.addLink);
//修改链接资源
linkRoute.put("/link/update",linkService.linkUpdate);
//删除链接资源
linkRoute.delete("/link/delete/:id",linkService.linkDel);
//链接资源列表
linkRoute.get("/link/list",linkService.linkList);
//链接资源列表
linkRoute.get("/link/info",linkService.linkInfo);
export default linkRoute