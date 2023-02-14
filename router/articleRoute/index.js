import express from "express"
import articleService from "../../service/articleService.js"
//验证token 是否过期
import {VERIFY_TOKEN} from "../../middleware/verify-middleware/index.js"
const articleRoute=express.Router()

//新增文章
articleRoute.post("/article/add",VERIFY_TOKEN,articleService.addArticle);
//修改文章
articleRoute.put("/article/update",VERIFY_TOKEN,articleService.articleUpdate);
//删除文章
articleRoute.delete("/article/delete/:id",VERIFY_TOKEN,articleService.articleDelete);
//文章列表
articleRoute.get("/article/list",articleService.articleList);
//文章详情
articleRoute.get("/article/particulars/:id",VERIFY_TOKEN,articleService.particulars);

//新增文章分类
articleRoute.post("/categories/add",articleService.addCategories);
//修改文章分类
articleRoute.put("/categories/update",articleService.categoriesUpdate);
//删除文章分类
articleRoute.delete("/categories/delete/:id",articleService.categoriesDelete);
export default articleRoute