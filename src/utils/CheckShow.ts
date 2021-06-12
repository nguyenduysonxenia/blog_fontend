export const checkShowHeader = (path: any) =>{
  if(path === '/signin' || path ==='/signup'){
    return false;
  }
  return true;
}