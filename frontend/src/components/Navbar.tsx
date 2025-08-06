import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(
    () => !!localStorage.getItem("token")
  );
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    navigate("/");
  };
  return (
    <nav className="bg-red-50 w-full flex justify-between p-4 border-black border-b-1 sticky top-0 z-50">
      <div>
        <h1
          onClick={() => {
            navigate("/");
          }}
          className="text-3xl font-bold tracking-widest cursor-pointer"
        >
          tldr;
        </h1>
      </div>
      <ul className="flex space-x-4">
        {loggedIn ? (
          <>
            <li>
              <button onClick={handleLogout} className="primary_btn">
                Log out
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/write")}
                className="primary_btn"
              >
                New Post
              </button>
            </li>
            <li>
              <button className="primary_btn">My Profile</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <button
                onClick={() => navigate("/login")}
                className="primary_btn"
              >
                Login
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/signup")}
                className="primary_btn"
              >
                Sign Up
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
