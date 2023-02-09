import UserModel from "../model/userModel.js";
import { setPassword } from "../utlis/encrypt.js";
import { setToken, verifyToken } from "../utlis/token.js";
const userController = {
  addUse: async (username, password, identity = 1) => {
    const data = await UserModel.find({ username: username });
    if (data.length > 0) {
      return "账号已存在";
    }
    const newpwd = setPassword(password);
    UserModel.create({
      username,
      password: newpwd,
      identity,
    });
    return "添加成功";
  },
  login: async (username, password) => {
    const newpwd = setPassword(password);
    const token = setToken();
    const data = await UserModel.find({ username: username });
    if (newpwd == data[0]?.password) {
      const { _id, username, identity } = data[0];
      return {
        code: 200,
        _id,
        username,
        identity,
        token: token,
      };
    }
    return {
      code: 404,
      message: "用户名或密码错误",
    };
  },
  userInfo: async (userID) => {
    const data = await UserModel.find({ _id: userID });
    if (data.length > 0) {
      const { _id, username, identity } = data[0];
      return {
        _id,
        username,
        identity,
      };
    } else {
      return ""
    }
  },
  userUpdate:async(id,username,password)=>{
     if(!password&&username){
      await UserModel.updateOne({_id:id},{username})
    }else if(password&&username){
      const newpwd = setPassword(password);
       await UserModel.updateOne({_id:id},{username,password:newpwd})
    }

    
  }
};

export default userController;
