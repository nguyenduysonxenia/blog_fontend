import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { useFormik } from 'formik';
import  ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function FormPost(props: any) {
  const [content,setContent] = useState('');
  const [image,setImage] = useState(null);
  const formik = useFormik({
    initialValues: {
      title: '',
    },
    onSubmit: (values,{resetForm}) => {
       props.handleSubmit({...values,content,image})
       resetForm()
       setContent('');
       setImage(null);
    },
  });
  const handleContent = (value: any)=>{
    setContent(value)
  }
  const handleFile = (e:any)=>{
    let file = e.target.files[0];
    setImage(file)
  }
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12 ">
          <div className="wrap_email_post">
          <img className="img-rounded img_preview_post" width={'200'} height={'250'} src= {image ? URL.createObjectURL(image) : ''}
           onChange={formik.handleChange}/>
          </div>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12 mt-3">
          <div className="form-group">
            <label className="label_form_add_post" htmlFor="content_post">Display name</label>
            <input id="content_post" className="form-control"
             name="title"
             value={formik.values.title}
             onChange={formik.handleChange}
              type="text" />
          </div>
          <div className="form-group">
            <label className="label_form_add_post" htmlFor="location">Choose file</label>
            <input className="form-control" type="file"
            name="image"
            onChange={handleFile}
             />
          </div>
        </div>
      </div>
      <div className="form_content_post">
         <ReactQuill
         value={content}
         onChange={handleContent}
         />
      </div>
      <div className="row">
        <button className="btn-submit-send_post" type="submit">Save</button>
      </div>
    </form>

    )

}

FormPost.propTypes = {
  handleSubmit : PropTypes.func
}

export default FormPost

