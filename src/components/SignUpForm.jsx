import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { useState } from "react"
import { FormControl } from "react-bootstrap";

export default function SignUpForm () {
    const [firstName, setFirstName] = useState();
    const[lastName, setLastName] = useState();
    const[email, setEmail] = useState();
    const[password, setPassword] = useState();
    const handleForm = e => {
        const newValue = e.target.value.trim();
        console.log(e.target, newValue)
    }

    return (
        <>
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <FormControl
                type="text"
                placeholder="Enter your first name"
                onChange={ handleForm }/>
            </Form.Group>

            <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <FormControl
            type="text"
            placeholder="Enter your last name"
            onChange= { handleForm }
            />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control 
                type="email"
                placeholder= "Enter Email"
                onChange={ handleForm }/>
                <Form.Text>We'll never share your email with anyone else.</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                type="email"
                placeholder="Enter Email"
                onChange={ handleForm }/>

            </Form.Group>
            <Form.Group>
                <Button variant="success"
                size="lg"
                type="submit"> Submit</Button>
            </Form.Group>
        </Form>
        </>
    )
}