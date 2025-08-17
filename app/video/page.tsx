import React from "react";
import Image from "next/image";

const VideoPage = () => {
  return (
    <section>
      <div className="flex items-center justify-center mt-10">
        <h1 data-aos="flip-left" className="text-3xl font-bold text-gray-700">
          I LOVE YOU LOVE 😘
        </h1>
      </div>

      <div className="carousel w-full mt-9">
        <div id="item1" className="carousel-item w-full justify-center">
          <Image
            src="/images/pic1.png"
            alt="Picture 1"
            width={600}
            height={400}
            className="h-96 object-contain mx-auto"
          />
        </div>
        <div id="item2" className="carousel-item w-full justify-center">
          <Image
            src="/images/pic2.png"
            alt="Picture 2"
            width={600}
            height={400}
            className="h-96 object-contain mx-auto"
          />
        </div>
        <div id="item3" className="carousel-item w-full justify-center">
          <Image
            src="/images/pic3.jpg"
            alt="Picture 3"
            width={600}
            height={400}
            className="h-96 object-contain mx-auto"
          />
        </div>
        <div id="item4" className="carousel-item w-full justify-center">
          <Image
            src="/images/pic4.jpg"
            alt="Picture 4"
            width={600}
            height={400}
            className="h-96 object-contain mx-auto"
          />
        </div>
      </div>

      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </section>
  );
};

export default VideoPage;
