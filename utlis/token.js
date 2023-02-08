import jwt from "jsonwebtoken"
import {TOKEN_KEY,TOKEN_TIME} from "../config/index.js"
export const setToken =(data)=>{
  const token=jwt.sign({data:data},TOKEN_KEY,{expiresIn:TOKEN_TIME})
  return token
}

