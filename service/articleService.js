import articleController from "../controller/articleController.js"
const articleService={
    //新增文章
    addArticle:async (req,res)=>{
      const data= await articleController.addArticle(req.body)
       res.send(data)
    },
    //修改文章
    articleUpdate:async (req,res)=>{
        const data =await articleController.articleUpdate(req.body)
        res.send(data)
    },
    //删除文章
    articleDelete:async (req,res)=>{
        const {id}=req.params
        const data= await articleController.articleDelete(id)
        res.send(data)
    },
    //文章列表
    articleList:async(req,res)=>{
      const {pageNum,pageSize}=req.body
      const data=await articleController.articleList(pageNum,pageSize)
      res.send(data)
    },
    //文章详情
    particulars:async (req,res)=>{
        const {id}=req.params
        const data= await articleController.particulars(id)
        res.send(data)
    },
    //添加文章分类
    addCategories:async (req,res)=>{
        const data = await articleController.addCategories(req.body)
        res.send(data)
    },
    //修改文章分类
    categoriesUpdate:async (req,res)=>{
        const data =await articleController.categoriesUpdate(req.body)
        res.send(data)
    },
    //删除文章分类
    categoriesDelete:async (req,res)=>{
        const {id}=req.params
        const data= await articleController.categoriesDelete(id)
        res.send(data)
    },
    //文章分类列表
    categoriesList:async (req,res)=>{
        const {pageNum,pageSize}=req.body
        const data= await articleController.categoriesList(pageNum,pageSize)
        res.send(data)
    }
}

export default articleService