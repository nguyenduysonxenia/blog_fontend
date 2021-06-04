import React from 'react'
import PropTypes from 'prop-types'
import './Social.scss'
function Social(props: any) {
  return (
    <div className="social_link">
        <h6>Social Links</h6>
        <div className="list_icon_socical">
          <div className="wrap_icon_social">
            <i className="fab fa-facebook"></i>
          </div>
          <div className="wrap_icon_social">
            <i className="fab fa-instagram"></i>
          </div>
          <div className="wrap_icon_social">
            <i className="fab fa-twitter"></i>
          </div>
          <div className="wrap_icon_social">
            <i className="fab fa-youtube"></i>
          </div>
          <div className="wrap_icon_social">
            <i className="fab fa-telegram-plane"></i>
          </div>
        </div>
      </div>
  )
}

Social.propTypes = {

}

export default Social

