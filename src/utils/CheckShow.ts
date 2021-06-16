export const checkShowHeader = (path: any) =>{
  if(path === '/signin' || path ==='/signup' || path ==='/forgot'){
    return false;
  }
  return true;
}