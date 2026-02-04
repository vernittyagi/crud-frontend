import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './auth/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import ProtectedRoute from './auth/ProtectedRoute.jsx'
import Register from './auth/Register.jsx'
import Home from './pages/Home.jsx'
import NavBar from './components/NavBar.jsx'
import Profile from './pages/Profile.jsx'


function App() {

  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path='/' element={< Home/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile'
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
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
