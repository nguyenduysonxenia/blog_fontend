import React,{useState} from 'react'
import PropTypes from 'prop-types'
import './Post.scss'
import {useDispatch} from 'react-redux'
import {newPost} from './AddPostSlice'
import postApi from '../../api/PostAPI'
import FormPost from '../../components/FormPost/FormPost'
import Toast from '../../utils/Toast'
import Loading from '../../components/Loading/Loading'
function Index(props : any) {
  const [loading,setLoading] = useState(false);
  const handleSubmit = async (body: any)=>{
     setLoading(true)
     let formData = new FormData();
     formData.append('title',body.title)
     formData.append('content',body.content)
     formData.append('image',body.image)
     console.log(formData)
      try {
        let response = await postApi.createPost(formData)
        if(response){
          setLoading(false)
          Toast('Post successfully')
        }
      } catch (error) {
        console.log(error)
      }
  }
  return (
    <>
    {loading && <Loading/>}
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
           <h1 className="title_add_post">addPost</h1>
        </div>
      </div>
        <FormPost handleSubmit={handleSubmit}  />
    </div>
    </>
  )
}

Index.propTypes = {

}

export default Index

