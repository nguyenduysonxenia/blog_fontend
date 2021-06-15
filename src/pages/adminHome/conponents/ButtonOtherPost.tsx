import React from 'react';
import PropTypes from 'prop-types';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';
function ButtonRemove(props: any) {
  const handleDeletePost = (e: any)=>{
    confirmAlert({
      title: 'Alert',
      message: 'Do you want to continue?.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            props.handleDeleteProps(props.id)
          }
        },
        {
          label: 'No',
          onClick: () => {}
        }
      ]
    });
  }
  return (
    <button onClick={handleDeletePost} type="button" className={`btn btn-${props.deleted ? 'success' : 'danger'}`}>
      {props.deleted ? <i className="fas fa-wrench"></i> : <i className="far fa-trash-alt"></i>}
    </button>
  );
}

ButtonRemove.propTypes = {
  id: PropTypes.string,
  deleted: PropTypes.bool,
  handleDeleteProps: PropTypes.func
};

export default ButtonRemove;
