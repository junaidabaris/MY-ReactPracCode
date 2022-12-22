import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useCreateContactMutation } from '../studentApi';

function ContactForm() {
  const [setList] = useCreateContactMutation()
  const getEmail = useRef()
  const getName = useRef()

  const getData = () => {
    const getVal = { id: Math.random(), email: getEmail.current.value, name: getName.current.value }
    setList(getVal)
    getEmail.current.value = ""
    getName.current.value = ""
    alert("Create Succsessfully")
  }
  return (
    <Form style={{ width: "600px", margin: "20px auto" }}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control ref={getEmail} type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control ref={getName} type="text" placeholder="Name" />
      </Form.Group>

      <Button variant="primary" onClick={getData} type="button">
        Submit
      </Button>
    </Form>
  );
}

export default ContactForm;