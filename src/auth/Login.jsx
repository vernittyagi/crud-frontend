import React from 'react'
import { useState, useEffect } from 'react';
import { fetchClient } from '../api/fetchClient';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login } = useAuth();
    const text = "Sign in to your account";
    const [displayText, setDisplayText] = useState("");


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

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setDisplayText(text.slice(0, index + 1));
            index++;
            if (index === text.length) {
                clearInterval(interval)
            }
        }, 50);

        return () => clearInterval(interval)
    }, [])


    return (
        <div className='min-h-screen flex justify-center items-center gap-[10vw] bg-gray-100'>
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                {displayText}
                <span className='animate-pulse'>|</span>
            </h2>
            <form
                className='w-full max-w-sm bg-white p-8 rounded-lg shadow-md space-y-5'
                onSubmit={handlesubmit}>
                <input className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-offset-0'
                    type="email"
                    name='email'
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)} />

                <input className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-offset-0'
                    type="password"
                    name='password'
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)} />

                <button
                    className='w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 hover:cursor-pointer'
                    type="submit">Login</button>
                <div className='h-px bg-gray-300 mt-5'></div>
                <div className='flex-col mt-3 text-center'>
                    <p>Don't have an account?</p>
                    <button className='w-1/2 mt-3 bg-green-600 text-white font-bold py-2 rounded hover:bg-green-700 hover:cursor-pointer'
                        type="button"
                        onClick={() => navigate('/register')}>Register</button>
                </div>
            </form>
        </div>
    )
}

export default Login
