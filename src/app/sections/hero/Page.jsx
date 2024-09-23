'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import Header from "../../component/headers/Page";
import Image1 from "../../assets/CCTV-banner.jpg";
import Image2 from "../../assets/image2.avif";
import Image3 from "../../assets/Call-Center-career.jpg";
import Image4 from "../../assets/Conference Room_s.jpg";

const Page = () => {
   const images = [Image1, Image2, Image3, Image4]; // Array of images
   const [currentImage, setCurrentImage] = useState(0); // Track current image index
   const [isTransitioning, setIsTransitioning] = useState(false); // Track if in transition
   const [showNextImage, setShowNextImage] = useState(false); // Track when to show next image

   useEffect(() => {
      const interval = setInterval(() => {
         setIsTransitioning(true); // Start transition

         setTimeout(() => {
            setShowNextImage(true); // Start showing the next image
         }, 500); // Halfway through the transition duration

         setTimeout(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length); // Update current image after transition
            setIsTransitioning(false); // End transition
            setShowNextImage(false); // Hide next image after transition
         }, 1000); // Total duration matches transition duration
      }, 5000); // Time between image changes

      return () => clearInterval(interval); // Cleanup interval on unmount
   }, [images.length]);

   return (
      <div className="h-screen relative overflow-hidden z-20">
         <div className="z-10 relative">
            <Header />
         </div>
         <div className="absolute h-screen w-full top-0 -z-10 overflow-hidden">
            <div
               className={`h-full w-full absolute transition-transform duration-1000 ease-in-out ${isTransitioning ? '-translate-x-full' : 'translate-x-0'
                  }`}
               style={{
                  backgroundImage: `url(${images[currentImage].src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
               }}
            ></div>

            <div className="h-full w-full bg-black/80 absolute top-0 flex items-center pl-10">
               <p className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white z-20">
                  We aim to meet
                  <br />
                  demanding customer needs
               </p>
            </div>
         </div>
      </div>
   );
};

export default Page;
