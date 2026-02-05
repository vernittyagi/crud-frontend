import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext.jsx";

const NavBar = () => {
    const navigate = useNavigate();
    const {isAuthenticated, logout} = useAuth();

    const handleLogout = () => {
        logout()
        navigate('/login')
    }
    return (
        <nav>
            <Link to="/">Home</Link>
            {isAuthenticated ? (
                <>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/profile">Profile</Link>
                    <button onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </>
            )
            }
        </nav>
    )
}

export default NavBar
