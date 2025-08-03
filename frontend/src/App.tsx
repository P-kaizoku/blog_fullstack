import Blogs from "./components/Blogs";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="flex flex-col items-center bg-red-50 min-h-screen">
      <Navbar />
      <Hero />
      <Blogs />
    </main>
  );
};

export default App;
