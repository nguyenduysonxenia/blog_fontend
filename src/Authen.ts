

import  jwt from 'jsonwebtoken'
const screct:any = process.env.REACT_APP_SCRECT
export const checkLogin = ()=>{
  let authenToken: any = localStorage.getItem('authenToken')
  if(!authenToken)
     return false;
   try {
     let results: any = jwt.verify(authenToken, screct)
     if(results)
        return results.isLogin
   } catch (error) {
    return false;
   }
}

export const setToken = ()=>{
  const token = jwt.sign({ isLogin: true }, screct);
  localStorage.setItem('authenToken',token)
}
export const removeToken = ()=>{
  localStorage.removeItem('authenToken')
}
export const checkToken = ()=>{
  const token = localStorage.getItem('accessToken')
  if(token)
     return true;
  return false;
}