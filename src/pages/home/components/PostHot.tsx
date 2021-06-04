import React from 'react'
import PropTypes from 'prop-types'
import './PostHot.scss'
function PostHot(props:any) {
  return (
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="card_item_post">
          <img className="card_item_post_image" src="images/hinh3.jpg" alt=""/>
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
        </div>
      </div>
  )
}

PostHot.propTypes = {

}

export default PostHot

