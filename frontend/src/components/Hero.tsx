import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleTldrIt = () => {
    const isLoggedIn = !!localStorage.getItem("token");
    if (isLoggedIn) {
      navigate("/write");
    } else {
      navigate("/signup");
    }
  };

  return (
    <div className="min-h-h-[calc(100vh-64px)] w-full flex flex-col items-center ">
      <section className="mt-50 text-center">
        <h1 className="text-[200px] font-family-satoshi leading-[200px]">
          tldr;
        </h1>
        <p className="text-neutral-500 tracking-wide text-lg">
          Tell summaries, not stories.
        </p>
        <div className="flex gap-2 items-center justify-center mt-4">
          <button className="primary_btn" onClick={handleTldrIt}>
            tldr it
          </button>
          <button className="secondary_btn" onClick={() => navigate("/blogs")}>
            Explore
          </button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
