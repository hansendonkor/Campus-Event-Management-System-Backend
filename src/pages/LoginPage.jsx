import { useContext, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { UserContext } from "../UserContext";
import "react-toastify/dist/ReactToastify.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const { setUser } = useContext(UserContext);

  // Fetch remembered email and password from localStorage on component mount
  useEffect(() => {
    const storedEmail = localStorage.getItem("rememberedEmail");
    const storedPassword = localStorage.getItem("rememberedPassword");
    if (storedEmail) {
      setEmail(storedEmail);
      setPassword(storedPassword);
    }
  }, []);

  async function loginUser(ev) {
    ev.preventDefault();

    try {
      const { data } = await axios.post("/login", { email, password });

      // Set user in context and show success notification
      setUser(data);
      toast.success("Login successful!");

      // Handle "Remember Me" functionality
      if (rememberMe) {
        localStorage.setItem("rememberedEmail", email);
        localStorage.setItem("rememberedPassword", password);
      } else {
        localStorage.removeItem("rememberedEmail");
        localStorage.removeItem("rememberedPassword");
      }

      setRedirect(true);
    } catch (e) {
      // Handle specific error messages from backend
      if (e.response && e.response.data.error) {
        toast.error(e.response.data.error); // Show backend error message
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    }
  }

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex w-full h-full lg:ml-24 px-10 py-10 justify-between place-items-center mt-20">
      <div className="bg-white w-full sm:w-full md:w-1/2 lg:w-1/3 px-7 py-7 rounded-xl justify-center align-middle">
        <form className="flex flex-col w-auto items-center" onSubmit={loginUser}>
          <h1 className="px-3 font-extrabold mb-5 text-primarydark text-2xl">Sign In</h1>

          {/* Email Input */}
          <div className="input">
            <input
              type="email"
              placeholder="Email"
              className="input-et"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
          </div>

          {/* Password Input */}
          <div className="input relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="input-et"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            />
            <button
              type="button"
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex w-full h-full mt-4 justify-between px-1">
            <div className="flex gap-2">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe((prev) => !prev)}
              />
              Remember Me
            </div>
            <div>
              <Link to="/forgotpassword">Forgot Password?</Link>
            </div>
          </div>

          {/* Submit Button */}
          <div className="w-full py-4">
            <button type="submit" className="primary w-full">
              Sign in
            </button>
          </div>

          {/* Links to Register or Login */}
          <div className="container2">
            <div className="w-full h-full p-1">
              <Link to="/register">
                <button className="text-white cursor-pointer rounded w-full h-full bg-primary font-bold">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>

      {/* Right Section with Graphics */}
      <div className="hidden lg:flex flex-col right-box">
        <div className="flex flex-col -ml-96 gap-3">
          <div className="text-3xl font-black">Welcome to</div>
          <div>
            <img src="../src/assets/logo.png" alt="" className="w-48" />
          </div>
        </div>
        <div className="-ml-48 w-80 mt-12">
          <img src="../src/assets/signinpic.svg" alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
}
