import React from 'react'
import PropTypes from 'prop-types'
import './NotFound.scss'
import {Link} from 'react-router-dom'
function NotFound(props: any) {
  return (
    <div className="container">
    <section className="page-not-found">
      <div className="row">
        <div className="col-lg-12 col-md-offset-1 m-auto">
          <div className="page-not-found-main">
            <h2><i className="fa fa-wrench"></i></h2>
            <p>Not found 404.</p>
          </div>
        </div>
        <div className="col-lg-12">
          <h4 className="heading-primary">You can click <Link to="/">go back to the homepage</Link></h4>
        </div>
      </div>
    </section>

  </div>
  )
}

NotFound.propTypes = {

}

export default NotFound

