import {linkTypeModel} from "../model/categoriesModel.js"
import IvingWellMode from "../model/livingWell.js"

const linkController={
    //新增链接
    addLink:async(queryData)=>{
        const {linkName,linkAddress,linkImage,linkIntroduce,linkType}=queryData
        try {
            IvingWellMode.create(queryData)
            return {
                code:200,
                msg:"新增链接成功！"
            }
        } catch (error) {
            return {
                code:400,
                msg:"新增链接失败！"
            }
        }
    },
    //修改链接
    linkUpdate:async(queryData)=>{
        console.log("修改链接",queryData);
        const {id,linkName,linkAddress,linkImage,linkIntroduce,linkType}=queryData
        try {
            const data =await IvingWellMode.updateOne({_id:id},{linkName,linkAddress,linkImage,linkIntroduce,linkType})
            return {
                code:200,
                msg:`修改成功${data["modifiedCount"]}条数据`
            }
        } catch (error) {
            console.error("error",error);
            return {
                code:400,
                msg:`修改失败`
            }
        }
    },
    //删除链接
    linkDel:async()=>{

    },
    //链接列表
    linkList:async()=>{

    },
    //链接详情
    linkInfo:async()=>{

    }
}

export default linkController