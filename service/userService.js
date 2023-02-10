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
        const {username,password}=req.body;
        const data = await userController.login(username,password)
        res.status(200).json(data)
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
        await userController.userUpdate(id,username,password)
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
      }
}

export default userService