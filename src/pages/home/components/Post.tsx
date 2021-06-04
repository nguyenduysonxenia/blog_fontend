import React from 'react'
import PropTypes from 'prop-types'
import './Post.scss'
function Post(props: any) {
  return (
    <div className="col-lg-6 col-md-6 col-sm-12">
      <div className="card_item_post">
        <img className="card_item_post_image" src="/images/hinh3.jpg" alt=""/>
        <div className="card_item_post-content">
          <h5><a href="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores</a> </h5>
          <div className="card_item_post-info">
            <time className="card_item_post-author" >
              April 28, 2019
            </time>
            <span className="card_item_post-view">
              <i className="fas fa-eye"></i>
              <span className="card_item_post_view_number ">2.6k</span>
              <span className="card_item_post_view_label">Views</span>
            </span>
          </div>
        </div>
        <div className="card_item_post-content-body">
          <p className="post-content-body_text">Help shouted touching causing posts is such specified incite adapt audio had. Exceptional can’t stop…</p>
          <p className="post-content-body_btn"><a href="">Read more</a> <i className="fas fa-long-arrow-alt-right"></i></p>
        </div>
      </div>
    </div>
  )
}

Post.propTypes = {

}

export default Post

