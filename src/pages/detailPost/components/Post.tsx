import React from 'react'
import PropTypes from 'prop-types'
import './Post.scss'
function Post(props: any) {
  return (
    <div className="post_deltail">
      <div className="post_deltail-wrap">
        <img className="post_deltail-wrap-image" src="/images/hinh3.jpg"/>
      </div>
      <div className="post_deltail-content">
        <h2 className="post_deltail-content-tile">
        How to Stop Feeling Jealous of Other People’s Success
        </h2>
        <div className="post_deltail-content-author">
            <span className="post_deltail-content-author-name">
              By <a href="#">Duy Son</a>
            </span>
            <span className="post_deltail-content-author-date">
              May 21, 2019
            </span>
            <span className="post_deltail-content-author-minute">
              4 mins read
            </span>
        </div>
        <div className="post_deltail-content-text">
          woody equal ask saw sir weeks aware decay. Entrance prospect removing we packages strictly is no smallest he. For hopes may chief get day rooms. Oh no turned behind polite piqued enough at. Forbade few through inquiry blushes you. Cousin no itself eldest it in dinner latter missed.
        </div>
      </div>
    </div>
  )
}

Post.propTypes = {

}

export default Post

