import { useState } from "react"
import Login from "./Login"
import Signup from "./SignUp.jsx"
import { Button } from "react-bootstrap"

export default function Home() {
    const[isMember, setIsMember] = useState(true)
    return (
        <>{
            (isMember)
            ? <Login />
            : <Signup />
        }

        <Button onClick={ () => setIsMember(!isMember)}>Switch Form</Button>
        </>
    )
}