import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { useState } from "react"
import { FormControl } from "react-bootstrap";

const firebaseConfig = {
    apiKey: "AIzaSyA4HV6HGgA6vwDiizw8YPT7e73HN-JirzU",
    authDomain: "timber-login-cs.firebaseapp.com",
    projectId: "timber-login-cs",
    storageBucket: "timber-login-cs.appspot.com",
    messagingSenderId: "500559364145",
    appId: "1:500559364145:web:f49b2a79f95d14d8069510"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default function SignUpForm () {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[user, setUser] = useState();

    const handleSignUp = async(e) => {
        e.preventDefault()
        const result = await createUserWithEmailAndPassword(auth, email, password)
        .catch(err => alert(err));
        console.log(result.user);
        setUser(result.user)
    }

    const signInWithGoogle = async() => {
        const provider = new GoogleAuthProvider()
        const result = await signInWithPopup(auth, provider)
            .catch(alert)
        setUser(result.user)
    }

    if (user) {
        return <h2>Welcome {user.email}</h2>
    }

    return (
        <>
        <Form onSubmit={handleSignUp}>
            <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control 
                type="email"
                placeholder= "Enter Email"
                value={email}
                onChange={ e => setEmail(e.target.value) }/>
                <Form.Text>We'll never share your email with anyone else.</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={ e => setPassword(e.target.value) }/>

            </Form.Group>
            <Form.Group>
                <Button variant="success"
                size="lg"
                type="submit"> Sign Up</Button>
            </Form.Group>
        </Form>
        <Button onClick = {signInWithGoogle} variant='dark' size="lg">Sign in with Google</Button>
        </>
    )
}