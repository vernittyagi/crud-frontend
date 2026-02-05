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
        <nav className="flex gap-5 text-2xl text-white font-bold p-2 bg-[#343434]">
            {/* <Link to="/" className="hover:cursor-pointer">Home</Link> */}
            {isAuthenticated ? (
                <>
                    <Link to="/dashboard" className="hover:cursor-pointer">Dashboard</Link>
                    <Link to="/profile" className="hover:cursor-pointer">Profile</Link>
                    <button className="hover:cursor-pointer" onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <>
                    <Link to="/login" className="hover:cursor-pointer">Login</Link>
                    <Link to="/register" className="hover:cursor-pointer">Register</Link>
                </>
            )
            }
        </nav>
    )
}

export default NavBar
