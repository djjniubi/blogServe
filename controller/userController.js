import UserModel from "../model/userModel.js"
import {setPassword} from "../utlis/encrypt.js"
import { setToken } from "../utlis/token.js"
const userController={
    addUse:async (username,password,identity=1)=>{
       const data=await UserModel.find({username:username})
       if(data.length>0){
        return "账号已存在"
       }
        const newpwd = setPassword(password)
        UserModel.create({
          username,
          password:newpwd,
          identity
      })
        return "添加成功"
     },
     login:async (username,password)=>{
        const newpwd = setPassword(password)
        const token = setToken({username,password})
        const data=await UserModel.find({username:username})
         if(newpwd==data[0].password){
            return token
         }
         return "用户名或密码错误"
     }
}

export default userController