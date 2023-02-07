import userController from "../controller/userController.js"
import UserModel from "../model/userModel.js"

const userService = {
    //处理新增后台用户接口
      addUser: async(req,res)=>{
        console.log(req.body);
        const {username,password,identity}=req.body;
        UserModel.create({
          username,
          password,
          identity:identity||0
      })
        const data = await userController.addUse()
        res.send(`${data}`)
      }
}

export default userService