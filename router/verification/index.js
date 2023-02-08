import express from "express"
import svgCaptcha from "svg-captcha"

const codeRouters=express.Router()
//获取验证码svg
codeRouters.get('/captcha',  (req, res)=> {
    var captcha = svgCaptcha.create({
      size:4,
      ignoreChars: '0o1i',
      noise: 2,
      color: true,
      background: '#cc9966'
   });
    req.session.captcha=captcha.text.toLowerCase()
    console.log("captcha",req.session);
    res.type('svg');
    res.status(200).send(captcha.data);
});
 codeRouters.get("/auth",(req,res)=>{
    console.log("auth",req.query);
    console.log("captcha2222",req.session);
    if(req.session.captcha==req.query.code){
        console.log("55");
    }
    res.send("11")
 })
export default codeRouters