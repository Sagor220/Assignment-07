const HeroSection = () => {
  return (
    <div className="max-w-275 mx-auto">
      <section className="bg-base-200 py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1f2937] mb-4">
            Friends to keep close in your life
          </h1>
          <p className="text-base text-base-content/60 mb-8 max-w-md mx-auto">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
          <button className="btn bg-[#244d3f] text-white hover:bg-[#1a3a2e] border-none px-8">
            + Add a Friend
          </button>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
