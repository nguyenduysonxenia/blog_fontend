import React from 'react';
import PropTypes from 'prop-types';
import SocialLink from '../../components/SocialLink/Social';
import ListPostNew from '../../components/ListPostNew/ListPostnew';
import Footer from '../../components/Footer/Footer';
import Post from './components/Post';
import OtherPost from './components/OtherPost';
import ListComment from './components/ListComment';
function index(props: any) {
  return (
    <div>
      <React.Fragment>
        <div className="container">
          <div className="row mt-4">
            <div className="col-lg-8 col-md-12 col-sm-12">
              <div className="row">
                <div className="col-lg-12">
                  <Post />
                </div>
                <div className="col-lg-12">
                  <OtherPost/>
                </div>
              </div>
              <div className="row">
                <ListComment/>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row">
                <div className="col-lg-12">
                  <SocialLink />
                </div>
                <ListPostNew />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    </div>
  );
}

index.propTypes = {};

export default index;
