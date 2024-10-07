/* eslint-disable */

import React, { useState, useRef } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { MdOutlineFileUpload } from "react-icons/md";
import { useSelector } from "react-redux";
import { FaRegHeart } from "react-icons/fa";

const ImageSlider = ({ category }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const filterResult = useSelector(
    (state: any) => state.filterResult.filterResults
  );

  // handle next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === category.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // handle previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? category.images.length - 1 : prevIndex - 1
    );
  };

  // handle dot click
  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  // Handle touch start
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  // Handle touch move
  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.touches[0].clientX;
    if (touchStartX - touchEndX > 50) {
      nextImage();
    }
    if (touchStartX - touchEndX < -50) {
      prevImage();
    }
    setTouchStartX(null);
  };

  return (
    <div
      ref={sliderRef}
      className='relative group w-full max-w-lg mx-auto overflow-hidden rounded-lg transition duration-75 cursor-pointer'
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      {/* Image Display */}
      <div>
        <div className='relative w-full min-h-72'>
          <img
            src={category?.images[currentIndex]}
            alt={`Slide ${category?.name}`}
            className={`absolute inset-0 w-[320px] h-[300px] rounded-2xl object-cover transition-opacity duration-500 ease-in-out`}
          />

          {/* Left Arrow */}
          <button
            className='absolute left-2 top-1/2 transform -translate-y-1/2 px-1.5 py-1.5 bg-gray-200 opacity-0 group-hover:opacity-100 hover:bg-white hover:shadow-md text-gray-800 hover:scale-105 transition duration-200 rounded-full'
            onClick={prevImage}
          >
            <IoIosArrowBack className='text-lg' />
          </button>

          {/* Right Arrow */}
          <button
            className='absolute right-4 top-1/2 transform -translate-y-1/2 px-1.5 py-1.5 bg-gray-200 opacity-0 group-hover:opacity-100 hover:bg-white hover:shadow-md text-gray-800 hover:scale-105 transition duration-200 rounded-full'
            onClick={nextImage}
          >
            <IoIosArrowForward className='text-lg' />
          </button>

          {/* Dots for tracking current image */}
          <div className='absolute bottom-3 left-1/2  transform -translate-x-1/2 flex space-x-2'>
            {category?.images?.map((_: any, index: number) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`w-[7px] h-[7px] rounded-full ${
                  index === currentIndex ? "bg-white" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
        <h2 className='text-base text-black font-semibold mt-4'>
          {category?.name}
        </h2>
        <p className='text-base text-gray-600'>Hosted by {category?.host}</p>
        <p className='text-base text-black font-normal -mt-[3px]'>
          ${category?.price?.rate} per guest
        </p>
      </div>

      {/* Upload / Favourite Icon */}
      {filterResult && filterResult.length <= 0 ? (
        <button className='absolute right-4 top-7 transform -translate-y-1/2 px-1.5 py-1.5 bg-gray-200 hover:bg-white hover:shadow-md text-gray-800 hover:scale-105 transition duration-200 rounded-full'>
          <MdOutlineFileUpload className='text-lg' />
        </button>
      ) : (
        <button className='absolute right-4 top-7 transform -translate-y-1/2 px-1.5 py-1.5  hover:scale-110 transition duration-200 rounded-full'>
          <FaRegHeart className='text-lg font-semibold text-rose-500' />
        </button>
      )}
    </div>
  );
};

export default ImageSlider;
