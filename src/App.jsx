import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './auth/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import ProtectedRoute from './auth/ProtectedRoute.jsx'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard'
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
      </Routes>
    </BrowserRouter>
  )
}
export default App
