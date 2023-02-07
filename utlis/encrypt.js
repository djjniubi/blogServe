//导入加密模块
let crypto
try {
  crypto=await import("crypto")
} catch (error) {
  console.log('crypto support is disabled!');
}

export const setPassword=(pwd)=>{
    const password= `${pwd}破解啊!`;
    const md5 = crypto.createHash('md5');
    md5.update(password)
    const newpwd=md5.digest('hex');
    console.log("加密密码",newpwd);
    // const decode=crypto.createDecipheriv('md5',newpwd,Buffer.from(newpwd.iv,"hex"))
    // console.log("解密密码",decode);

}
