import userRouters from "./userRoute/index.js"
import codeRouters from "./verification/index.js"

const route=(app)=>{
    /**
     * 注册路由
     */
    app.use("/api",userRouters);   // 处理用户路由
    app.use("/code",codeRouters)  //获取验证码
   
}
export default  route