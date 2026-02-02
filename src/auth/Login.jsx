import React from 'react'
import { useState } from 'react';
import { fetchClient } from '../api/fetchClient';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handlesubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await fetchClient('/auth/login', {
                method: "POST",
                body: JSON.stringify({ email, password }),
            });
            console.log("response from login api is - ", res);
            if (!res.token) {
                throw new Error(res.message || 'Invalid login');
            }
            localStorage.setItem('token', res.token);
            console.log('Stored token:', localStorage.getItem('token'));
            navigate('/dashboard')
        } catch (err) {
            alert(err.message)
        }
    }

    return (
        <form onSubmit={handlesubmit}>
            <h2>Login</h2>
            <input type="email" name='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
            <input type="password" name='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
    )
}

export default Login
