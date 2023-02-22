import ArticleMode from "../model/articleModel.js"
import categoriesModel from "../model/categoriesModel.js"
const  articleController={
    //处理新增文章
    addArticle:async(queryDate)=>{
        const {title,content,promulgatorName,creationTime,modificationTime,postType,state}=queryDate
        ArticleMode.create({
            title,
            content,
            promulgatorName,
            creationTime,
            modificationTime,
            postType,
            state
        })
        return {
            code:200,
            msg:"新增文章成功"
        }
    },
    //处理修改文章
    articleUpdate:async (queryDate)=>{
        const {id,title,content,creatorName,creationTime,modificationTime,postType}=queryDate
         try {
            const data=await ArticleMode.updateOne({_id:id},{title,
                content,
                creatorName,
                creationTime,
                modificationTime,
                postType})
                return {
                    code:200,
                    msg:`修改成功${data["modifiedCount"]}条数据`
                }
         } catch (error) {
            return {
                code:500,
                msg:`修改失败`
            }
         }
       
       
            
    },
    //处理删除文章
    articleDelete:async(Id)=>{
          try {
            const data =await ArticleMode.deleteOne({_id:Id})
            console.log("data",data);
            return ({
                code:200,
                msg:"删除成功"
            })
          } catch (error) {
            return ({
                code:500,
                msg:"删除失败"
            })
          }
    },
    //处理文章列表
    articleList:async(pageNum=1,pageSize=10)=>{
      try {
        const count=await ArticleMode.countDocuments()
        const data =await ArticleMode.find().skip(pageSize * (pageNum-1)).limit(pageSize).sort("-createdAt2")
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
            code:500,
            msg:"获取文章列表失败"
        }
      }
    },
     //处理文章详情
    particulars:async(Id)=>{
       const data=await ArticleMode.findOne({_id:Id})
       return {
        code:200,
        data:data
       }
    },
     //处理添加文章分类
    addCategories:async(queryDate)=>{
        const {categoriesName,categoriesCode=""} =queryDate
        try {
            let lastCode = await categoriesModel.find().sort({categoriesCode: -1}).limit(1)
            if(Array.isArray(lastPost)&&lastPost.length>0){
                lastCode = lastCode[0]
                const las=new categoriesModel({
                    categoriesName:categoriesName,
                    categoriesCode:Number(lastCode["categoriesCode"])+1 
                })
                const data=await  categoriesModel.create(las)
                return {
                  code:200,
                  msg:`新增文章分类成功`
              }
            }
            if(Array.isArray(lastPost) && lastPost.length === 0) {
                las.categoriesCode = 0;
            }
         
        } catch (error) {
            return {
                code:500,
                msg:`新增文章分类失败`
            }
        }
    },
     //处理修改文章分类
    categoriesUpdate:async (queryDate)=>{
        const {id,categoriesName} =queryDate
        try {
            const data=await categoriesModel.updateOne({_id:id},{categoriesName})
                return {
                    code:200,
                    msg:`修改成功${data["modifiedCount"]}条数据`
                }
        } catch (error) {
            return {
                code:500,
                msg:`修改失败`
            }
        }
    },
    //处理删除文章分类
    categoriesDelete:async(Id)=>{
        try {
            const data =await categoriesModel.deleteOne({_id:Id})
            console.log("data",data);
            return ({
                code:200,
                msg:"删除成功"
            })
          } catch (error) {
            return ({
                code:500,
                msg:"删除失败"
            })
          }
    }
}

export default articleController