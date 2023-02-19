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
      const { _id, username, identity,avatar } = data[0];
      return {
        code: 200,
        userinfo:{
            _id,
           username,
           identity,
           avatar
        },
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
      const { _id, username, identity,avatar } = data[0];
      return {
        _id,
        username,
        identity,
        avatar
      };
    } else {
      return ""
    }
  },
  userUpdate:async(id,username,password,filename)=>{
    const newFilename=filename?`/public/upload/${filename}`:""
     if(!password&&username){
      await UserModel.updateOne({_id:id},{username,avatar:newFilename})
    }else if(password&&username){
      const newpwd = setPassword(password);
       await UserModel.updateOne({_id:id},{username,password:newpwd,avatar})
    }
  },
  userDelete:async (id)=>{
    await UserModel.deleteOne({_id:id})
    return "删除成功"
    
  },
  userList: (pageNum=1,pageSize=10)=>{
    // console.log("userList",pageNum,pageSize);
   
    return new Promise ((resolve, reject)=>{
      UserModel.countDocuments((err,count)=>{
        if(err) {
          reject({code:500,msg:"列表获取失败"})
          return
        }
        UserModel.find({},["username","identity","avatar"]).skip(pageSize * (pageNum-1)).limit(pageSize).sort("-createdAt").then(data=>{ resolve({code:200,data,total:count,pageNum:pageNum,pageSize:pageSize,msg:"获取列表成功"})
        }).catch(err=>{
          reject({code:500,msg:"列表获取失败"})
        })
       })
      })
      
        
         
  }
};

export default userController;
