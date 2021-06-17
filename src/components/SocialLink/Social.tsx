import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import './Social.scss'
function Social(props: any) {
  return (
    <div className="social_link">
        <h6>Social Links</h6>
        <div className="list_icon_socical">
          <a  target='_blank' href="https://www.facebook.com/">
            <div className="wrap_icon_social">
              <i className="fab fa-facebook"></i>
            </div>
          </a>
          <a target='_blank' href="https://www.instagram.com/">
            <div className="wrap_icon_social">
              <i className="fab fa-instagram instagram_icon"></i>
            </div>
          </a>
          <a target='_blank' href="https://twitter.com/?lang=vi">
            <div className="wrap_icon_social">
              <i className="fab fa-twitter"></i>
            </div>
          </a>
          <a target='_blank' href="https://www.youtube.com/">
            <div className="wrap_icon_social youtube_icon">
              <i className="fab fa-youtube"></i>
            </div>
          </a>
          <a target='_blank' href="https://web.telegram.org/">
            <div className="wrap_icon_social">
              <i className="fab fa-telegram-plane"></i>
            </div>
          </a>
        </div>
      </div>
  )
}

Social.propTypes = {

}

export default Social

