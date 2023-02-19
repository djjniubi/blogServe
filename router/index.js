import userRouters from "./userRoute/index.js"
import codeRouters from "./verification/index.js"
import uploadRoute from "./uploadRoute/index.js"
import articleRoute from "./articleRoute/index.js"
const route=(app)=>{
    /**
     * 注册路由
     */
    app.use("/api",userRouters,articleRoute,codeRouters);   // 处理用户路由
    app.use("/",uploadRoute);      //上传文件
    // app.use("/code",codeRouters);  //获取验证码
} 
export default  route