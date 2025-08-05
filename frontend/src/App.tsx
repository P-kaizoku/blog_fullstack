import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import WriteBlogs from "./pages/BlogEdior";

const App = () => {
  return (
    <main className="flex flex-col items-center bg-red-50 min-h-screen">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="/write" element={<WriteBlogs />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
