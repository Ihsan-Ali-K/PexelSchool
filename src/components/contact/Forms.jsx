import React from 'react'
import Form from 'react-bootstrap/Form';

const Forms = () => {
  return (
    <Form>
      <div className='d-flex'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="last name" />
      </Form.Group>
      </div>
     
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Your Message</Form.Label>
        <Form.Control as="textarea" rows={6} />
      </Form.Group>
    </Form>
  )
}

export default Forms