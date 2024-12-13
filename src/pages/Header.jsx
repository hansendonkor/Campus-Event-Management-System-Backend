import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../UserContext";
import axios from "axios";
import { toast } from "react-toastify";

export default function Header() {
  const { user, setUser } = useContext(UserContext);

  // Check if user is an admin
  const isAdmin = user?.role === "admin";

  const handleLogout = async () => {
    try {
      await axios.post("/logout");
      setUser(null); // Clear user context
      toast.success("Logged out successfully!");
    } catch (error) {
      toast.error("Logout failed. Please try again.");
    }
  };

  return (
    <header className="bg-blue-700 text-white py-4 px-8 shadow-lg">
      <nav className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold hover:underline">
          Campus Events
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/events" className="hover:underline">
            Events
          </Link>
          <Link to="/calendar" className="hover:underline">
            Calendar
          </Link>
          {user ? (
            <>
              <Link to="/useraccount" className="hover:underline">
                My Account
              </Link>
              {isAdmin && (
                <Link to="/createEvent" className="hover:underline">
                  Create Event
                </Link>
              )}
              <button
                onClick={handleLogout}
                className="hover:underline bg-red-500 px-4 py-2 rounded text-white font-bold"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="hover:underline">
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}