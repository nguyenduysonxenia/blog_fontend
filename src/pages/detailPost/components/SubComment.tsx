import React from 'react';
import PropTypes from 'prop-types';
import './Comment.scss'
function SubComment(props: any) {
  return (
    <div className="media mt-4">
      {' '}
      <a className="pr-3" href="#">
        <img
          className="rounded-circle"
          alt="Bootstrap Media Another Preview"
          src="https://i.imgur.com/xELPaag.jpg"
        />
      </a>
      <div className="media-body">
        <div className="row">
          <div className="col-12 d-flex">
            <h5 className="comment_author_name">Simona Disa</h5> <span className="comment_time">2-2-2020</span>
          </div>
        </div>
        <span className="content_comment"> letters, as opposed to using 'Content here, content here', making it
        look like readable English.</span>
      </div>
    </div>
  );
}

SubComment.propTypes = {};

export default SubComment;
