import React from 'react'
import { useState } from 'react';
import { fetchClient } from '../api/fetchClient';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login} = useAuth();
    const navigate = useNavigate();

    const handlesubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await fetchClient('/auth/login', {
                method: "POST",
                body: JSON.stringify({ email, password }),
            });
            if (!res.token) {
                throw new Error(res.message || 'Invalid login');
            }
            login(res.token)
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
            <p>Don't have an account?</p>
            <button type="button" onClick={() => navigate('/register')}>Register</button>
        </form>
    )
}

export default Login
