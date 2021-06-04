import React from 'react'
import PropTypes from 'prop-types'
import './PostChild.scss'
function PostChild(props: any) {
  return (
    <div className="post_item_child">
      <img src="/images/hinh3.jpg" alt="" width="80" height="80"/>
      <div className="post_item_child-content">
        <h5> <a href="">Few Facts About Streaming and Music Creation</a> </h5>
        <time className="detail_post-author" >
          April 28, 2019
        </time>
      </div>
    </div>
  )
}

PostChild.propTypes = {

}

export default PostChild

