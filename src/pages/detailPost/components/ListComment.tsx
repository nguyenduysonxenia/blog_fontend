import React from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'
import FormPostComment from './FormPostComment'
function ListComment(props: any) {
  return (
    <div className="col-md-12">
      <div className="row">
        <div className="col-md-12">
            <Comment/>
            <Comment/>
            <FormPostComment/>
        </div>
      </div>
    </div>
  )
}

ListComment.propTypes = {

}

export default ListComment

