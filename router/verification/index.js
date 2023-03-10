import express from "express"
import svgCaptcha from "svg-captcha"

const codeRouters=express.Router()
//获取验证码svg
codeRouters.get('/captcha',  (req, res)=> {
    // console.log("header 获取验证码svg",req.headers);
    var captcha = svgCaptcha.create({
      size:4,
      ignoreChars: '0o1i',
      noise: 2,
      color: true,
      background: '#cc9966'
   });
    req.session.captcha=captcha.text.toLowerCase()
    captcha.text=captcha.text.toLowerCase()
    captcha.code=200
    console.log("captcha",req.session);
    res.type('svg');
    res.status(200).send(captcha);
});
//验证码
 codeRouters.get("/auth/:id",(req,res)=>{
    if(req.session["captcha"]==req.params["id"]){
        res.send({code:200,type:true,msg:"验证成功"})
    }else{
        res.send({code:500,type:false,msg:"验证失败"})
    }
    
 })
export default codeRouters