import userController from "../controller/userController.js"


const userService = {
    //处理新增后台用户接口
      addUser: async(req,res)=>{
        const {username,password,identity}=req.body;
       
        const data = await userController.addUse(username,password,identity)
        res.send(`${data}`)
      },
      //用户登录
      login:async(req,res)=>{
        console.log("登录",req.session,res.cookie);
        const {username,password}=req.body;
        const data = await userController.login(username,password)
        if(data["code"]==200){
          req.session.username=data["userinfo"]["username"]
          res.status(200).json(data)
        }else{
          res.status(400).json(data)
        }
      },
      //获取用户信息
      userInfo:async(req,res)=>{
        const {id} =req.query
        const data = await userController.userInfo(id)
          res.json({
            code:200,
            data:data
           })
      },
      //修改用户
      userUpdate:async(req,res)=>{
        const {id,username,password} =req.body
        const {filename=""} =req.file
        await userController.userUpdate(id,username,password,filename)
        res.send("更新成功")
      },

      //删除用户
      userDelete:async (req,res)=>{
        const {id} =req.params
        const data= await userController.userDelete(id)
        res.json({
          code:200,
          data:data
        })
      },

      //获取用户列表
      userList:async (req,res)=>{
        const {pageNum,pageSize} =req.body
        const data= await userController.userList(pageNum,pageSize)
        res.json(data)
      }
}

export default userService