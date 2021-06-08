import asxiosClient from './AxiosClient'
interface User{
  username?: string,
  email:string,
  password:string,
  confirmPassword?:string
}

const userApi = {
  register: (user: User) =>{
      const url: string = '/users/signup'
      return asxiosClient.post(url,user)
  },
  login: (user: User)=>{
    const url: string = '/users/signin'
    return asxiosClient.post(url,user)
  }
}
export default userApi;
