'use client'
import React from "react";
import { motion } from "framer-motion";

// Icon components or images (replace with your SVG icons or images)
import { FaServer, FaDesktop, FaCogs, FaCamera, FaMusic, FaToolbox } from "react-icons/fa";

const services = [
   {
      id: 1,
      title: "INFORMATION TECHNOLOGY SOLUTION",
      description: "Unified Communication Solutions integrate voice, video, messaging, and collaboration technologies to streamline business operations. These include IP Telephony/PABX systems for efficient call management, end-user computers for productivity, video and voice collaboration tools, network security solutions, software services, and LAN, WAN, and wireless infrastructure for seamless connectivity across networks.",
      icon: <FaDesktop />,
      side: "left",
   },
   {
      id: 2,
      title: "INFRASTRUCTURE SOLUTION",
      description: "Physical network design and deployment involves the structured planning and installation of network components such as routers, switches, and cabling to ensure efficient, reliable, and scalable data transmission. Intelligent cabling systems like CAT6, CAT6A, and CAT7 offer high-speed data transfer with increased bandwidth and shielding, supporting advanced network performance. ",
      icon: <FaServer />,
      side: "right",
   },
   {
      id: 3,
      title: "AUDIO VISUAL SOLUTION",
      description: "Projection and presentation systems are used to display visual content for meetings, conferences, and educational settings, enhancing communication and engagement. Collaboration technologies enable seamless teamwork through shared platforms, enhancing productivity in group projects. Video/audio conference systems allow real-time remote communication, integrating voice and video for more interactive discussions.",
      icon: <FaCamera />,
      side: "left",
   },
   {
      id: 4,
      title: "ELV SOLUTION",
      description: "Projection and presentation systems are used to display visual content for meetings, conferences, and educational settings, enhancing communication and engagement. Collaboration technologies enable seamless teamwork through shared platforms, enhancing productivity in group projects. Video/audio conference systems allow real-time remote communication, integrating voice and video for more interactive discussions.",
      icon: <FaMusic />,
      side: "right",
   },
   {
      id: 5,
      title: "MAINTENANCE & SUPPORT SERVICES",
      description: "Projection and presentation systems are used to display visual content for meetings, conferences, and educational settings, enhancing communication and engagement. Collaboration technologies enable seamless teamwork through shared platforms, enhancing productivity in group projects. Video/audio conference systems allow real-time remote communication, integrating voice and video for more interactive discussions.",
      icon: <FaCogs />,
      side: "left",
   },
   {
      id: 6,
      title: "HARDWARE TRADING",
      description: "Projection and presentation systems are used to display visual content for meetings, conferences, and educational settings, enhancing communication and engagement. Collaboration technologies enable seamless teamwork through shared platforms, enhancing productivity in group projects. Video/audio conference systems allow real-time remote communication, integrating voice and video for more interactive discussions.",
      icon: <FaToolbox />,
      side: "right",
   },
];

const leftSideVariants = {
   hidden: { opacity: 0, x: -100 }, 
   visible: { opacity: 1, x: 0 },
};

const rightSideVariants = {
   hidden: { opacity: 0, x: 100 }, 
   visible: { opacity: 1, x: 0 },
};

const Page = () => {
   return (
      <div className="flex flex-col justify-center items-center bg-background py-20">
         <div className='flex flex-col w-full items-center'>
            <h1>Services</h1>
            <p className='h-1 bg-white w-20 text-center -mt-2'></p>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-8 text-white w-full max-w-screen-lg mt-10">
            {services.map((service, index) => (
               <motion.div
                  key={service.id}
                  className="flex flex-col  gap-4 border border-white p-6 shadow-[0_0_1px_#fff,inset_0_0_1px_#fff,0_0_3px_#fff,0_0_10px_#fff,0_0_5px_#fff] cursor-pointer  "
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  variants={service.side === "left" ? leftSideVariants : rightSideVariants} // Different animation for left and right side
               >
                  <div className="flex gap-5 text-4xl text-blue">
                     {service.icon}
                     <p className="text-sm md:text-lg font-bold uppercase text-white flex items-center">{service.title}</p>
                  </div>
                  <div>
                     <p>{service.description}</p>
                     <button className="text-blue font-semibold text-lg hover:underline underline-offset-2 duration-800">Read More</button>
                  </div>
               </motion.div>
            ))}
         </div>
      </div>
   );
};

export default Page;
