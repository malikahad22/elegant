import React from 'react'
import Logo from "../../assets/logo.png";
import Image from 'next/image';
import Link from 'next/link';
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";

import Image1 from "../../assets/footer.avif"
const Page = () => {

   const headingStyle = `
   text-blue text-2xl uppercase font-medium tracking-[7px] font-gowun`

   const footerContent = {
      "Services": [
         {
            name: "Design",
            path: "/"
         },
         {
            name: "Project Delivery",
            path: "/"
         }, {
            name: "IT Services",
            path: "/"
         }, {
            name: "Structure Cabling",
            path: "/"
         },
      ],

      "Company": [
         {
            name: "Projects",
            path: "/"
         }, {
            name: "Partners",
            path: "/"
         },
         {
            name: "About Us",
            path: "/"
         },
         {
            name: "Contact Us",
            path: "/"
         }
      ],
   }

   const email = 'randomemail@example.com';
   const phoneNumber = '+1234567890';


   return (
      <div className={`relative flex-grow bg-url([${Image1}]) flex-grow`}>
         <div className={`bg-foreground absolute w-full top-0 p-5 md:p-20 overflow-auto flex-1`}>
            <div className="flex justify-between w-full flex-wrap space-y-5 border-b-[0.5px] pb-10">
               <div>
                  <Image src={Logo} alt="elegant serve" />
               </div>
               {
                  Object.entries(footerContent).map(([key, value], index) => (
                     <div key={index}>
                        <h3 className={headingStyle}>{key}</h3>
                        <div className="flex flex-col text-white mt-5 gap-3">
                           {
                              value.map((val, index) => (
                                 <Link className="tracking-widest font-extralight hover:text-blue duration-500 hover:scale-110" href="/" key={index}>{val.name}</Link>
                              ))
                           }
                        </div>
                     </div>
                  ))
               }
               <div>
                  <h3 className={headingStyle}>Contact</h3>
                  <div className="flex flex-col text-white mt-5 gap-3">
                     <Link href={`mailto:${email}`} className="flex items-center text-white hover:text-blue duration-500">
                        <CiMail />
                        <span className="ml-2">{email}</span>
                     </Link>

                     <Link href={`tel:${phoneNumber}`} className="flex items-center text-white hover:text-blue duration-500">
                        <FaPhoneAlt />
                        <span className="ml-2">{phoneNumber}</span>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div >

   )
}

export default Page;