import { React, useEffect, useState } from 'react'
import { fetchClient } from '../api/fetchClient'

const Dashboard = () => {
    const [msg, setMsg] = useState('')
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetchClient('/user/profile')
                setMsg(res.message)
            }
            catch (err) {
                setMsg(err.message)
            }
        }
        fetchData()
    }
        , [])

    return (
        <div>
            <h1>Welcome to Dashboard !!!</h1>
            <h3>{msg}</h3>
        </div>
    )
}

export default Dashboard
