"use client";
import React, { useEffect } from "react";
import "./scroll.scss";
const InfiniteScroll = () => {
  useEffect(() => {
    let photobanner: any = document.querySelector(".photobanner");
    let firstimg: any = document.querySelector(".first");
    let images: any = document.querySelectorAll(".img");
    let currentIndex = 0;
    let timeoutId;

    const activateImage = () => {
      if (images[currentIndex]) {
        images[currentIndex].classList.remove("active");
      }

      images[(currentIndex + 1) % images.length].classList.add("active");

      currentIndex = (currentIndex + 1) % images.length;

      timeoutId = setTimeout(activateImage, 5500);
    };

    // const imageMap = images.forEach((image, index) => {
    //   image.addEventListener("mouseover", () => {
    //     clearTimeout(timeoutId);
    //     currentIndex = index;
    //     images.forEach((img) => img.classList.remove("active"));
    //     image.classList.add("active");
    //   });
    // });

    photobanner.addEventListener("mouseover", () => {
      clearTimeout(timeoutId);
      firstimg.classList.replace("continue", "paused");
    });

    photobanner.addEventListener("mouseout", () => {
      firstimg.classList.replace("paused", "continue");
      activateImage();
    });
    activateImage();
  }, []);
  return (
    <div>
      <div id="container">
        <div className="photobanner">
          {[...Array(10)].map((item: any, index: any) => {
            return (
              <div
                key={index}
                className={`img ${index === 0 ? "first continue" : ""}`}
              >
                <p className="text-red">Card No . {index + 1}</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Vitae, adipisci.
                </p>
                <img
                  src={`https://via.placeholder.com/350x233/?text=image${
                    index + 1
                  }`}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InfiniteScroll;
