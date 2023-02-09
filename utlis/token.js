import jwt from "jsonwebtoken"
import {TOKEN_DATA,TOKEN_KEY,TOKEN_TIME} from "../config/index.js"
export const setToken =()=>{
  const token=jwt.sign({data:TOKEN_DATA},TOKEN_KEY,{expiresIn:TOKEN_TIME})
  return token
}

export const verifyToken=(data)=>{
  let res;
  try {
    const decoded=jwt.verify(data,TOKEN_KEY)
    res = true
  } catch (error) {
    res = false
  }
 
  return res
}
