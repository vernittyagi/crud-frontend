import { use } from "react"
import { Link, useNavigate } from "react-router-dom"

const NavBar = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token")

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate('/login')
    }
    return (
        <nav>
            <Link to="/">Home</Link>
            {token ? (
                <>
                    <Link to="/dashboard">Dashboard</Link>
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
