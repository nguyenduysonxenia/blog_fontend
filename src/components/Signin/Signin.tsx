import './Signin.scss';
import { Form, Button, Col, Image, Container } from 'react-bootstrap';
import logo from '../../assets/images/logo.jpg';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import userApi from '../../api/UserAPI'
import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import Alert from '../Alert/Alert'
import {useDispatch} from 'react-redux'
import {setCurrentUser} from '../../pages/user/UserSlice'
const Signin = () => {
  const dispatch = useDispatch();
  const [isShow,setIsShow] = useState(false);
  const [error,setEroor] = useState('');
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required().email('Invalid format email')
        .min(3, 'Minium 3 characters'),
      password: Yup.string().required('Required').min(6, 'Minium 6 characters'),
    }),
    onSubmit: (values) => {
      setIsShow(false);
      const signin = async ()=>{
        try{
            let result = await userApi.login(values)
            if(result){
              localStorage.setItem('accessToken',JSON.stringify(result))
              let response = await userApi.getCurrentUser()
              const action  = setCurrentUser(response);
              dispatch(action);
              history.goBack()
            }
        }
        catch(err: any){
          setIsShow(true);
            setEroor(err.response.data)
        }
      }
      signin();
    },
  });
  return (
    <>
      <Container className="form-container">
        <Form className="form" onSubmit={formik.handleSubmit} >
          <Col xs={6} md={4}>
            <Image src={logo} roundedCircle className="image-logo" />
          </Col>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="Enter Username"
            />
            {formik.errors.email && formik.touched.email && (
              <Form.Text className="text-muted text-danger">
                {formik.errors.email}
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder="Password"
            />
            {formik.errors.password && formik.touched.password && (
              <Form.Text className="text-muted">
                {formik.errors.password}
              </Form.Text>
            )}
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Button variant="primary" type="submit" className="button">
            Signin
          </Button>
        </Form>
        {isShow ? <Alert isShow={isShow} message={error}  /> : ''}
      </Container>
    </>
  );
};
export default Signin;
