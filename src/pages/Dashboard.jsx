import { React, useEffect, useState } from 'react'
import { fetchClient } from '../api/fetchClient'

const Dashboard = () => {
    const [msg, setMsg] = useState('')
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetchClient('/user/profile')
                setMsg(res.message)
            }
            catch (err) {
                setMsg(err.message)
            }
            finally{
                setLoading(false)
            }
        }
        fetchData()
    }
        , [])

    return (
        <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Dashboard
          </h1>
          <p className="text-gray-500 mt-1">
            Welcome back! Here’s your account overview.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Authentication Status
          </h2>

          {loading ? (
            <p className="text-gray-400">Loading secure data...</p>
          ) : (
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
              <p className="text-gray-600">{msg}</p>
            </div>
          )}
        </div>
      </div>
    </div>
    )
}

export default Dashboard
