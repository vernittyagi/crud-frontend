import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './auth/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import ProtectedRoute from './auth/ProtectedRoute.jsx'
import Register from './auth/Register.jsx'
import Home from './pages/Home.jsx'
import NavBar from './components/NavBar.jsx'
import Profile from './pages/Profile.jsx'
import PublicRoute from './auth/PublicRoute.jsx'
import PublicLayout from './layouts/PublicLayout.jsx'
import PrivateLayout from './layouts/PrivateLayout.jsx'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <PublicLayout>
            < Home />
          </PublicLayout>
        } />
        <Route path='/login'
          element={
            <PublicRoute>
              <PublicLayout>
                <Login />
              </PublicLayout>
            </PublicRoute>
          } />
        <Route path='/register'
          element={
            <PublicRoute>
              <PublicLayout>
                <Register />
              </PublicLayout>
            </PublicRoute>
          } />
        <Route path='/profile'
          element={
            <ProtectedRoute>
              <PrivateLayout>
                <Profile />
              </PrivateLayout>
            </ProtectedRoute>
          } />
        <Route path='/dashboard'
          element={
            <ProtectedRoute>
              <PrivateLayout>
                <Dashboard />
              </PrivateLayout>
            </ProtectedRoute>
          } />
      </Routes>
    </BrowserRouter>
  )
}
export default App
