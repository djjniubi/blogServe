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
            // console.error("error",error);
            return {
                code:400,
                msg:`修改失败`
            }
        }
    },
    //删除链接
    linkDel:async(id)=>{
        try {
            const data =await IvingWellMode.deleteOne({_id:id})
            return ({
                code:200,
                msg:"删除成功"
            })
          } catch (error) {
            return ({
                code:404,
                msg:"删除失败"
            })
          }
    },
    //链接列表
    linkList:async(queryData,user)=>{
        const {pageNum=1,pageSize=10,id,linkName,linkAddress,linkImage,linkIntroduce,linkType} = queryData
        const arr=["_id","linkName","linkAddress","linkImage","linkIntroduce","linkType"]
        const queryObj={promulgatorName:user,linkName:{$exists:true},linkType:{$exists:true}}
        try {
          const count=await IvingWellMode.find(queryObj).countDocuments()
          const data =await IvingWellMode.find(queryObj,arr).skip(Number(pageSize) * (Number(pageNum)-1)).limit(pageSize).sort("-createdAt2")
          return {
              code:200,
              data,
              msg:"获取文章成功",
              total:count,
              pageNum,
              pageSize
          }
        } catch (error) {
          return {
              code:404,
              msg:"获取文章列表失败"
          }
        }
    },
    //链接详情
    linkInfo:async(id)=>{
        try {
            const data=await IvingWellMode.findOne({_id:id})
            return {
                code:200,
                data:data
               }
        } catch (error) {
            return {
                code:400,
                msg:"获取详情失败!"
               }
        }
       
    }
}

export default linkController