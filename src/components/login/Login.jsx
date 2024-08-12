import React from 'react'
import { Form } from 'react-bootstrap'
import "./Login.scss"

const Login = () => {
    return (
        <div className='login container-fluid d-flex align-items-center justify-content-center '>
            <div className='form d-flex flex-column gap-2'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group>

                <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                <Form.Control
                    type="password"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                    />
                    </Form.Group>
               
              <button className='button'>Sign In</button>
            </div>
           

        </div>
    )
}

export default Login