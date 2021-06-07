import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch,useSelector} from 'react-redux'
import './OtherPost.scss'
import {useHistory} from 'react-router-dom'
import {toggleComment,toggleLike,setCountView,setCountLike} from '../DetailPpstSlice'
import postApi from '../../../api/PostAPI';
function OtherPost(props: any) {
  const history  = useHistory();
  let currentUser = useSelector((state: any)=> state.CurrentUser);
  const isLike = useSelector((state: any)=> state.DetailPostPage.islike);
  const Post = useSelector((state: any)=> state.DetailPostPage.Post);
  const countViews = useSelector((state: any)=> state.DetailPostPage.countViews);
  const countLikes = useSelector((state: any)=> state.DetailPostPage.countLikes);
  const disPatch = useDispatch();
  const HandleComment = ()=>{
    const action  = toggleComment('');
    disPatch(action)
  }
  const handleLike = async ()=>{
    const token = localStorage.getItem('accessToken');
    if(!token){
      return history.replace('/signin')
    }
    const response: any  = await postApi.like(Post._id)
    .catch((error) =>{
      console.log(error.response)
    })
    console.log(response);
    let isExist = response.likes.findIndex((u:string)=>u.toString() == currentUser.id.toString())
    let islike = isExist != -1 ? true : false
    const action = toggleLike(islike);
    const actionView = setCountView(response.views);
    const actioncountLike = setCountLike(response.likes.length);
    disPatch(action);
    disPatch(actionView);
    disPatch(actioncountLike);
  }
  return (
    Post ?
    <div  className="post-info-other">
      <div onClick={HandleComment} className="post-info-other-comment">
        <i className="far fa-comment"></i>
        <span> {Post.comments.length} </span>
      </div>
      <div className="post-info-other-view">
        <i className="far fa-eye"></i>
        <span>{countViews}</span>
      </div>
      <div onClick={handleLike} className={`post-info-other-like ${isLike ? 'active_like' : ''}`}>
      <i className="far fa-thumbs-up"></i>
        <span>{countLikes}</span>
      </div>
    </div>
    :
    null
  );
}

OtherPost.propTypes = {};

export default OtherPost;
