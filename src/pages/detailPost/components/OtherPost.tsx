import React from 'react';
import PropTypes from 'prop-types';
import './OtherPost.scss'
function OtherPost(props: any) {
  return (
    <div className="post-info-other">
      <div className="post-info-other-comment">
        <i className="far fa-comment"></i>
        <span> 5 Comments</span>
      </div>
      <div className="post-info-other-view">
        <i className="far fa-eye"></i>
        <span>3.5k View</span>
      </div>
    </div>
  );
}

OtherPost.propTypes = {};

export default OtherPost;
