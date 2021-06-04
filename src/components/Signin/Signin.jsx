import './Signin.scss';
import { Form, Button, Col, Image, Container } from 'react-bootstrap';
import logo from '../../assets/images/logo.jpg';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Signin = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required('Required')
        .min(3, 'Minium 3 characters')
        .max(15, 'Maximum 15 characters'),
      password: Yup.string().required('Required').min(6, 'Minium 6 characters'),
    }),
    handleSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <Container className="form-container">
        <Form className="form" >
          <Col xs={6} md={4}>
            <Image src={logo} roundedCircle className="image-logo" />
          </Col>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              placeholder="Enter Username"
            />
            {formik.errors.username && formik.touched.username && (
              <Form.Text className="text-muted text-danger">
                {formik.errors.username}
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
      </Container>
    </>
  );
};
export default Signin;
