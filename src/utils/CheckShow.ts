import { matchPath } from "react-router";
const router = ['/','/posts/new','/posts/:postId','/posts/:postId/edit','/posts','/profile','/editPassword','/admin/users','/admin']
export const checkShowHeader = (path: any) =>{
  // if(path === '/signin' || path ==='/signup'){
  //   return false;
  // }
  // return true;
  for(let i =0;i<router.length;i++){
    let match: any = matchPath(path, {
      path: router[i],
      exact: true,
      strict: false
    });
    if(match){
      return true;
    }
  }
  return false;
}