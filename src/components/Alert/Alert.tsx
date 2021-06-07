import React,{useState} from 'react'
import PropTypes from 'prop-types'
import {Modal,Button} from 'react-bootstrap'
Alert.propTypes = {
  message: PropTypes.string,
  isShow: PropTypes.bool,
}

function Alert(props: any) {
  let isShow = props.isShow;
  const [show, setShow] = useState(isShow);
  const handleClose = () => setShow(false);
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Thông báo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.message}
        </Modal.Body>
      </Modal>
    </>
  )
}


export default Alert

