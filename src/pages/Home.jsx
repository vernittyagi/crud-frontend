import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
      const token = localStorage.getItem("token");
      if(token){
        navigate('/dashboard')
      }
      else{
        navigate('/login')
      }
    }, [])
    

  return <h2>Loading...</h2>;
}

export default Home
