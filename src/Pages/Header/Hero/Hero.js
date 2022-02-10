import React, { useEffect, useState } from "react";
import "./Hero.css";

const Hero = () => {
  const [image, setImage] = useState("images/hero/1.jpg");
  const images = [
    "images/hero/1.jpg",
    "images/hero/2.jpg",
    "images/hero/3.jpg",
  ];
  useEffect(() => {
    let imageIndex = 0;
    setInterval(() => {
      if (imageIndex >= images.length) {
        imageIndex = 0;
      }
      const imageUrl = images[imageIndex];
      setImage(imageUrl);
      imageIndex++;
    }, 3000);
  }, []);
  return (
    <div
      id="home"
      className="background pt-5"
      style={{ backgroundImage: `url("${image}")` }}
    >
      <div className="text-center">
        <h1 className="display-2 text-center text-white title">
          Your Health Is Our Priority
        </h1>
        <button className="text-center btn btn-outline-danger rounded-pill text-white fs-3">
          Emergency
        </button>
      </div>
    </div>
  );
};

export default Hero;
