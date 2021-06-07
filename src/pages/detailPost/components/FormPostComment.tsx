import React from 'react'
import PropTypes from 'prop-types'
import './FormPostComment.scss';
import { useFormik } from 'formik';
import {useDispatch,useSelector} from 'react-redux'
import {postComment,postSubComment} from '../DetailPpstSlice'
import postApi from '../../../api/PostAPI'
import { useHistory } from 'react-router-dom';
import {io} from 'socket.io-client'
const SOCKET_URL_SERVER: any = process.env.SOCKET_URL_SERVER
const socket = io(SOCKET_URL_SERVER,
  {transports: ['websocket', 'polling', 'flashsocket']}
)
function FormPostComment(props: any) {
  const history = useHistory();
  const currentUser = useSelector((state: any)=> state.CurrentUser);
  const distPatch = useDispatch();
  const {postId,parentComment} = props;
  console.log(postId,parentComment);
  const addComment = async (data: any)=>{
    const response: any = await postApi.postComment(postId,data)
    .catch((error)=>{
      console.log(error);
    })
    let body = {...response,authorInfo:{
      name: currentUser.username,
      avatar: currentUser.avatar
    },subComments:[]}
    if(response.parentComment){
      const action = postSubComment(body)
      distPatch(action)
    }
    else{
      const action = postComment(body)
    distPatch(action)
    }
    socket.emit('send-comment',body)

  }
  const formik = useFormik({
    initialValues: {
      content: '',
    },
    onSubmit: (values,{ resetForm }) => {
      if(currentUser.username){
        addComment({parentComment,...values});
        resetForm()
      }
      else{
        history.replace('/signin')
      }
    },
  });
  return (
    <form id="form_post_Comment" onSubmit={formik.handleSubmit} >
      <input className='input_post_Comment'
       placeholder="comment..."
       type="text"
       name="content"
       value={formik.values.content}
       onChange={formik.handleChange}
       />
      <button className='btn_submit_comment' type="submit"><i className="fas fa-paper-plane"></i></button>
    </form>
  )
}

FormPostComment.propTypes = {
  postId: PropTypes.string,
  parentComment: PropTypes.any
}

export default FormPostComment

