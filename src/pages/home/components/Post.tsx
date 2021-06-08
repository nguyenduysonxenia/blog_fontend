import React from 'react'
import PropTypes from 'prop-types'
import './Post.scss'
import {RootState}  from '../../../app/store'
import {Link} from 'react-router-dom'
import Moment from 'react-moment';
import {useSelector} from 'react-redux'

interface Post{
  _id: string
  title: string,
  content: string,
  image: string,
  createdAt: Date
  views:[]
}

function Post(props: any) {
  const state: any = useSelector((state: RootState)=>state.HomePage.listPost)
  let posts = state.results
  if(posts){
    var result = posts.map((post: Post, index: number)=>{
      return (
        <div key={index} className="col-lg-6 col-md-6 col-sm-12">
        <div className="card_item_post">
          <img className="card_item_post_image" src="/images/hinh3.jpg" alt=""/>
          <div className="card_item_post-content">
            <h5><Link to={`/posts/${post._id}`}>{post.title}</Link> </h5>
            <div className="card_item_post-info">
              <time className="card_item_post-author" >
                <Moment format="D MMM YYYY" withTitle>
                    {post.createdAt}
                </Moment>
              </time>
              <span className="card_item_post-view">
                <i className="fas fa-eye"></i>
                <span className="card_item_post_view_number ">{post.views}</span>
                <span className="card_item_post_view_label">Views</span>
              </span>
            </div>
          </div>
          <div className="card_item_post-content-body">
            <p className="post-content-body_text">{post.content}</p>
            <p className="post-content-body_btn"><Link to={`/posts/${post._id}`}>Read more</Link> <i className="fas fa-long-arrow-alt-right"></i></p>
          </div>
        </div>
      </div>
      );
    })
  }
  return (
    <>
      {result}
    </>
  )
}

Post.propTypes = {
  data: PropTypes.object
}

export default Post

