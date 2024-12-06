import React from "react";
import bannerImg from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse  justify-between items-center ">
      <div className="md:w-1/2 w-full flex items-center md:justify-end p-12">
        <img src={bannerImg} alt=""></img>
      </div>
      <div className="md:w-1/2 w-full px-4">
        <h1 className="md:text-5xl text-2xl font-medium mb-7">
          New Realses this week
        </h1>
        <p className="mb-10">
          It's time to update your reading list with some of the
          latest and greatest releases in the literary world. From
          heart-pumping thrillers to captivating memoirs, this week's
          new releases offer something for everyone
        </p>
        <button className="btn-primary">Subscribe</button>
      </div>
    </div>
  );
};

export default Banner;
