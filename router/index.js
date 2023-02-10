import userRouters from "./userRoute/index.js"
import codeRouters from "./verification/index.js"
import uploadRoute from "./uploadRoute/index.js"
const route=(app)=>{
    /**
     * 注册路由
     */
    app.use("/api",userRouters);   // 处理用户路由
    app.use("/code",codeRouters);  //获取验证码
    app.use("/",uploadRoute);      //上传文件
} 
export default  route