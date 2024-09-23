import React from 'react';
import Marquee from 'react-fast-marquee'; // Import the Marquee component
import Image from 'next/image'; // For handling images in Next.js

import Client1 from "../../assets/log-1.png";
import Client2 from "../../assets/log-2.png";
import Client3 from "../../assets/log-3.png";
import Client4 from "../../assets/log-4.png";
import Client5 from "../../assets/log-5.png";
import Client6 from "../../assets/log-6.png";
import Client7 from "../../assets/log-7.png";
import Client8 from "../../assets/log-8.png";
import Client9 from "../../assets/log-9.png";
import Client10 from "../../assets/log-10.png";
import Client11 from "../../assets/log-12.png";

const Page = () => {
   const clients = [Client1, Client2, Client3, Client4, Client5, Client6, Client7, Client8, Client9, Client10, Client11]; // List of client logos

   return (
      <div className="py-20 bg-background">
         <div className='flex flex-col w-full items-center'>
            <h1>Our Clients</h1>
            <p className='h-1 bg-white w-20 text-center -mt-2'></p>
         </div>
         <div className="relative mt-20">
            <Marquee speed={50} gradient={false}>
               {clients.map((client, index) => (
                  <div key={index} className="mx-6">
                     <Image src={client} alt={`Client ${index + 1}`} width={150} height={100} />
                  </div>
               ))}
            </Marquee>
         </div>
      </div>
   );
};

export default Page;
