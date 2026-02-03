import React, { useState } from "react"
import {fetchClient} from '../api/fetchClient'
import { useNavigate } from "react-router-dom"

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await fetchClient('/auth/register', {
                method: "POST",
                body: JSON.stringify({ name, email, password })
            });

            alert(res.message || "Registration successful !")
            //Redirecting to login 
            navigate("/login")
        } catch (err) {
            alert(err.message)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Register</h2>
                <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register
