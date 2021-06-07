import asxiosClient from './AxiosClient'
interface Post{
  title: string,
  content:string,
  image:string,
}



const postApi = {
  getListPosts: () =>{
      const url: string = '/posts'
      return asxiosClient.get(url,{})
  },
  getPostsNew: ()=>{
    const url: string = '/posts/new'
    return asxiosClient.get(url,{})
  },
  getPostsHot: ()=>{
    const url: string = '/posts/hot'
    return asxiosClient.get(url,{})
  },
  getListSearch: (queryString: string)=>{
    const url:string = `/posts/search?key=${queryString}`
    return asxiosClient.get(url)
  }
}
export default postApi;
