import React from 'react'
import PropTypes from 'prop-types'
import './Search.scss'
function Search(props: any) {
  return (
      <div className="col-lg-12">
        <div className="search_post">
          <input name="keysearch" type="text" placeholder="Search"/>
          <button> Search</button>
        </div>
      </div>
  )
}

Search.propTypes = {

}

export default Search

