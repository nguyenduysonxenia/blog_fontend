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
  },
  getCurrentUser: ()=>{
    const url: string = '/users/getcurrentuser'
    return asxiosClient.get(url)
  },
  uploadProfile: (body: any)=>{
    const url: string = '/users/editProfile'
    return asxiosClient.patch(url,body)
  },
  uploadPassword: (body: any)=>{
    const url: string = '/users/editPassword'
    return asxiosClient.patch(url,body)
  },
  getListUser:(params: any)=>{
    const url: string = `/admin/users/getListUser?page=${params}`
    return asxiosClient.get(url)
  },
  toggleUser:(idUser: any)=>{
    const url: string = `/admin/users/${idUser}/destroy`
    return asxiosClient.patch(url)
  }
}
export default userApi;
