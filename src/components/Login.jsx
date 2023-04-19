import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import LoginForm from "./Form"

export default function Login () {
    return (
    
        <Container>
            <Row>
                <Col className="mx-4 p-4 rounded-4 login-container">
                <h1>Login</h1>
                <LoginForm />
                </Col>
            </Row>
        </Container>
    )
}