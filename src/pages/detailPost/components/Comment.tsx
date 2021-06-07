import React from 'react';
import PropTypes from 'prop-types';
import './Comment.scss';
import SubComment from './SubComment'
import FormPostComment from './FormPostComment'
function Comment(props: any) {
  return (
    <div className="media mt-4">
      {' '}
      <img
        className="mr-3 rounded-circle"
        src="https://i.imgur.com/stD0Q19.jpg"
      />
      <div className="media-body">
        <div className="row">
          <div className="col-8 d-flex">
            <h5 className="comment_author_name">Duy Sơn</h5> <span className="comment_time">2-2-2020</span>
          </div>
        </div>
        <span className="content_comment">
          It is a long established fact that a reader will be distracted by the
          readable content of a page
        </span>
        <FormPostComment/>
        <SubComment/>
        <SubComment/>
      </div>
    </div>
  );
}

Comment.propTypes = {};

export default Comment;
