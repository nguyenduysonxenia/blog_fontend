import React from 'react';
import PropTypes from 'prop-types';
import './ListPostNew.scss';
function ListPostnew(props: any) {
  return (
    <div className="col-lg-12">
      <div className="baner_content-listpost baner_content-listpost_recent ">
        <h4>New Post</h4>
        <div className="post_item_child">
          <img src="/images/hinh3.jpg" alt="" width="80" height="80" />
          <div className="post_item_child-content">
            <h5 className="recent_post_title">
              {' '}
              <a href="">Few Facts About Streaming and Music Creation</a>{' '}
            </h5>
            <time className="detail_post-author recent_post_time">
              April 28, 2019
            </time>
          </div>
        </div>
      </div>
    </div>
  );
}

ListPostnew.propTypes = {};

export default ListPostnew;
