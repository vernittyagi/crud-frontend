import { useEffect, useState } from "react";
import { fetchClient } from "../api/fetchClient";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await fetchClient("/user/profile")
        setUser(res.user)
      } catch (err) {
        setError(err.message)
      }
      finally {
        setLoading(false)
      }
    }
    fetchProfile()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        Loading profile...
      </div>
    );
  }
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Profile
          </h1>
          <p className="text-gray-500 mt-1">
            Manage your account information
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center gap-4 mb-6">
            {/* Avatar */}
            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-xl">
              {user.email?.charAt(0).toUpperCase()}
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-700">
                Account Details
              </h2>
              <p className="text-sm text-gray-500">
                Basic information associated with your account
              </p>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-500 mb-1">
                Email
              </label>
              <div className="text-gray-800 font-medium">
                {user.email}
              </div>
            </div>

            {/* Placeholder for future fields */}
            <div className="pt-4 border-t text-sm text-gray-400">
              More profile fields can be added here.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
