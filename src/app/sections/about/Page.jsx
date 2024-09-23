"use client"
import React from 'react'
import { motion } from "framer-motion";

import image1 from "../../assets/Call-Center-career.jpg"
import Image from 'next/image';
const Page = () => {
   const rightSideVariants = {
      hidden: { opacity: 0, x: 100 },
      visible: { opacity: 1, x: 0 },
   };
   return (
      <div className='flex flex-col p-10 '>
         <div className='flex flex-col w-full pb-10'>
            <h1>About <span className='text-blue'>Elegant Serve</span></h1>
            <p className='h-1 bg-white w-20 text-center -mt-2'></p>
         </div>
         <div className='flex flex-col md:flex-row w-full gap-16 flex-wrap md:flex-nowrap space-y-5'>
            <div className='flex flex-col gap-5 text-lg text-textColor text-justify w-full items-center justify-center'>
               <p>Elegant Serve Technologies LLC is a systems integration company based in the UAE. We provides a range of Customized IT solutions and systems enabling our customers to achieve excellence and sustainable competitive edge.  </p>
               <p>
                  Elegant Serve Team has extensive experience and expertise in managing projects from design to implementation and customer support. Elegant Serve Technologies is an outcome driven organization, with a passion for results – in terms of values we assist our Clients attain In their quest for excellence.
               </p>
               <p>
                  We are also continually expanding the range of services and products listed in our portfolio to offer wider choices to our clients.VisionWe pride ourselves on the vision, skills, expertise and professionalism of our company. We aim to meet demanding customer needs!MissionTo consistently create value for our customers by providing solutions which enable them to achieve excellence and sustainable competitive edge
               </p>

            </div>
            <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: false }}
               transition={{ duration: 0.7 }}
               variants={rightSideVariants}
               className='flex flex-grow-1 justify-center items-center h-96 md:w-96 flex-grow overflow-hidden'>
               <Image className='rounded-lg h-full w-full object-cover overflow-hidden' src={image1} alt='elegantServe' />
            </motion.div>
         </div>
      </div>
   )
}

export default Page;