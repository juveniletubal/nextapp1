export default function Home() {
  return (
    <section>
      <div className="hero h-[60vh] relative overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/videos/snowfall-in-forest.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Hero Content */}
        <div className="hero-content text-neutral-content text-center relative z-10">
          <div className="max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-5xl mx-auto px-4">
            <h1
              data-aos="fade-down"
              data-aos-duration="1000"
              className="mb-5 text-white text-3xl sm:text-4xl md:text-5xl font-bold"
            >
              VISION
            </h1>
            <p
              data-aos="fade-right"
              data-aos-duration="2000"
              className="mb-5 text-white sm:text-lg md:text-xl py-3 leading-relaxed"
            >
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi. Provident cupiditate voluptatem et in. Quaerat
              fugiat ut assumenda excepturi exercitationem quasi. In deleniti
              eaque aut repudiandae et a id nisi.
            </p>
            <button
              data-aos="fade-right"
              data-aos-duration="3000"
              className="btn btn-warning 
                          w-[90px] h-[28px] text-[10px]
                          sm:w-[100px] sm:h-[32px] sm:text-xs
                          lg:w-[120px] lg:h-[36px] lg:text-sm"
            >
              Read More
            </button>
          </div>
        </div>
      </div>

      <div className="hero lg:h-120">
        <div
          data-aos="fade-up"
          className="hero-content flex-col lg:flex-row lg:items-start lg:gap-50"
        >
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-3xl lg:text-5xl sm:text-3xl font-bold">
              Box Office News!
            </h1>
            <p className="py-6 max-w-md leading-relaxed sm:text-lg">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
}
