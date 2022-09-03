import React from "react";
import IgImg1 from "../public/img-1.jpg";
import IgImg2 from "../public/img-2.jpg";
import IgImg3 from "../public/img-3.jpg";
import IgImg4 from "../public/img-4.jpg";
import IgImg5 from "../public/img-5.jpg";
import IgImg6 from "../public/img-6.jpg";
import InstagramImg from "../components/InstagramImg";

const instagram = () => {
  return (
    <div className="max-w=[1240px] mx-auto text-center py-24">
      <p className="text-2xl font-bold cursor-pointer hover:animate-bounce ease-in duration-200">
        Follow me on Instagram
      </p>
      <p className="mt-5 font-bold hover:animate-bounce ease-in duration-200 cursor-pointer">
        @Capture
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
        <InstagramImg socialImg={IgImg1} />
        <InstagramImg socialImg={IgImg2} />
        <InstagramImg socialImg={IgImg3} />
        <InstagramImg socialImg={IgImg4} />
        <InstagramImg socialImg={IgImg5} />
        <InstagramImg socialImg={IgImg6} />
      </div>
    </div>
  );
};

export default instagram;
