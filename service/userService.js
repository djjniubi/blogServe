import userController from "../controller/userController.js"


const userService = {
    //处理新增后台用户接口
      addUser: async(req,res)=>{
        const {username,password,identity}=req.body;
       
        const data = await userController.addUse(username,password,identity)
        res.send(`${data}`)
      },
      login:async(req,res)=>{
        const {username,password}=req.body;
        const data = await userController.login(username,password)
        res.status(200).send(`${data}`)
      }
}

export default userService