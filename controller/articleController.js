import ArticleMode from "../model/articleModel.js"
const  articleController={
    addArticle:async(queryDate)=>{
        const {title,content,creatorName,creationTime,modificationTime,postType}=queryDate
        ArticleMode.create({
            title,
            content,
            creatorName,
            creationTime,
            modificationTime,
            postType
        })
        return {
            code:200,
            msg:"新增文章成功"
        }
    },
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
    particulars:async(Id)=>{
       const data=await ArticleMode.findOne({_id:Id})
       return {
        code:200,
        data:data
       }
    }
}

export default articleController