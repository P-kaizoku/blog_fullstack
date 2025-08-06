import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import WriteBlogs from "./pages/BlogEdior";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <main className="flex flex-col items-center bg-red-50 min-h-screen cursor-default">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="/write" element={<WriteBlogs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
