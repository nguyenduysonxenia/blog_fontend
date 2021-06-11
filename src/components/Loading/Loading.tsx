import React from 'react'
import PropTypes from 'prop-types'
import './Loading.scss'
function Loading(props: any) {
  return (
    <div className="overlay">
      <div className="arc"></div>
    </div>
  )
}

Loading.propTypes = {

}

export default Loading

