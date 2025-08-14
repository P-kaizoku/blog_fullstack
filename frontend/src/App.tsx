import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import WriteBlogs from "./pages/BlogEdior";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import EditBlog from "./pages/EditBlog";

const App = () => {
  return (
    <main className="flex flex-col items-center bg-[#f5f5f5] min-h-screen cursor-default">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="/write" element={<WriteBlogs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/blogs/edit/:id" element={<EditBlog />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
