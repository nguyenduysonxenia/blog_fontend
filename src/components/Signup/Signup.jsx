import './Signup.scss';
import { Form, Button, Col, Image, Container } from 'react-bootstrap';
import logo from '../../assets/images/logo.jpg';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
      passwordConfirm: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required().email('Invalid format email'),
      username: Yup.string()
        .required('Required')
        .min(3, 'Minium 3 characters')
        .max(15, 'Maximum 15 characters'),
      password: Yup.string().required('Required').min(6, 'Minium 6 characters'),
      passwordConfirm: Yup.string()
        .required()
        .oneOf([Yup.ref('password')], "Password's not match"),
    }),
    handleSubmit: ()=>{

    },
  });
  return (
    <>
      <Container className="form-container">
        <Form className="form" onSubmit={}>
          <Col xs={6} md={4}>
            <Image src={logo} roundedCircle className="image-logo" />
          </Col>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="label">Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="Enter email"
            />
            {formik.errors.email && formik.touched.email && (
              <Form.Text className="text-muted">
                {formik.errors.email}
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label className="label">Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              placeholder="Enter Username"
            />

            {formik.errors.username && formik.touched.username && (
              <Form.Text className="text-muted" variant="success">
                {formik.errors.username}
              </Form.Text>
            )}
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label className="label">Password</Form.Label>
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
          <Form.Group controlId="formBasicPassword">
            <Form.Label className="label">Password Confirmation</Form.Label>
            <Form.Control
              type="password"
              name="passwordConfirm"
              value={formik.values.passwordConfirm}
              onChange={formik.handleChange}
              placeholder="Password Confirmation"
            />

            {formik.errors.passwordConfirm &&
              formik.touched.passwordConfirm && (
                <Form.Text className="text-muted">
                  {formik.errors.passwordConfirm}
                </Form.Text>
              )}
          </Form.Group>

          <Button variant="primary" type="submit" className="button">
            Signup
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Signup;
