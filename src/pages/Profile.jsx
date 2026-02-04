import { useEffect, useState } from "react";
import { fetchClient } from "../api/fetchClient";

const Profile = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchProfile() {
            try {
                const res = await fetchClient("/user/profile")
                setUser(res.user) 
            } catch (err) {
                setError(err.message)
            }
      }
      fetchProfile()
    }, [])

    if (error) return <p>{error}</p>;
    if (!user) return <p>Loading...</p>
    
  return (
    <div>
      <h2>User Profile</h2>
      <p>Email: {user.email}</p>
    </div>
  )
}

export default Profile
