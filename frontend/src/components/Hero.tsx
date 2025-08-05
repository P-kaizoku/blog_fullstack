import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-h-[calc(100vh-64px)] w-full flex flex-col items-center ">
      <section className="mt-50 text-center">
        <h1 className="text-9xl font-semibold tracking-wide mb-2">tldr;</h1>
        <p className="text-neutral-500">Tell summaries, not stories.</p>
        <div className="flex gap-2 items-center justify-center mt-4">
          <button className="primary_btn" onClick={() => navigate("/write")}>
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
