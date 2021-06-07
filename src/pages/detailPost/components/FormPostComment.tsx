import React from 'react'
import PropTypes from 'prop-types'
import './FormPostComment.scss'
function FormPostComment(props: any) {
  return (
    <form id="form_post_Comment">
      <input className='input_post_Comment' placeholder="comment..."></input>
      <button className='btn_submit_comment' type="submit"><i className="fas fa-paper-plane"></i></button>
    </form>
  )
}

FormPostComment.propTypes = {

}

export default FormPostComment

