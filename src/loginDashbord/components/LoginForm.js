import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFetchStudentsQuery, useLoginStatusMutation } from '../studentApi';

function LoginForm() {
  const userRef = useRef()
  const passRef = useRef()

  const { data } = useFetchStudentsQuery()
  const [loginStatus] = useLoginStatusMutation()

  const navigatepath = useNavigate()

  const postDetail = () => {
    if (userRef.current.value === data.name && passRef.current.value === data.password) {
      loginStatus({ ...data, isLogin: true })
      navigatepath('/dashbord')
    }else{
      alert("User Not exist")
    }
  }

  return (
    <Form style={{ width: "600px", margin: "20px auto" }}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User-Name</Form.Label>
        <Form.Control type="text" ref={userRef} placeholder="UserName" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" ref={passRef} placeholder="Password" />
      </Form.Group>

      <Button variant="success"  onClick={postDetail} type="button">
        Login
      </Button>
    </Form>
  );
}

export default LoginForm