import React from 'react'
import PropTypes from 'prop-types'
import PostHot from './components/PostHot';
import Search from '../../components/Search/Search'
import Post from './components/Post'
import Pagination from '../../components/Pagination/Pagination'
import SocialLink from '../../components/SocialLink/Social'
import ListPostNew from '../../components/ListPostNew/ListPostnew'
import Footer from '../../components/Footer/Footer'
const index = (props: any) => {
  return (
      <React.Fragment>
        <div className="container">
        <div className="row">
            <div className="col-lg-12">
              <div className="title_body">
                <h4>Popular Posts</h4>
                <p>Don't miss to check out our most popular posts</p>
              </div>
            </div>
        </div>
        <div className="row">
            <PostHot/>
            <PostHot/>
            <PostHot/>
            <PostHot/>
        </div>
        <div className="row">
          <Search/>
        </div>
        <div className="row mt-4">
          <div className="col-lg-8 col-md-12 col-sm-12">
          <div className="row">
            <Post/>
            <Post/>
            <Post/>
            <Post/>
          </div>
          <div className="row">
            <div className="col-lg-12">
                <Pagination/>
            </div>
          </div>
        </div>
          <div className="col-lg-4">
          <div className="row">
            <div className="col-lg-12">
              <SocialLink/>
            </div>
            <ListPostNew/>
            </div>
        </div>
          </div>
      </div>
        <Footer/>
      </React.Fragment>
  )
}

index.propTypes = {

}

export default index
