import Col from "react-bootstrap/Col";
import  Container  from "react-bootstrap/Container";
import  Row  from "react-bootstrap/Row";
import SignUpForm from "./SignUpForm";

export default function Signup () {
    return (
        <Container>
            <Row>
                <Col className="mx-4 p-4 rounded-4 login-container">
                    <SignUpForm />
                </Col>
            </Row>
        </Container>
    )
}