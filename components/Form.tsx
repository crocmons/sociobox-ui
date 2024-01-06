"use client"
import React, { FormEvent, useState, ChangeEventHandler } from "react";
import Image from "next/image";
import ContactForm from "./ContactForm";
// import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input'

// interface ContactFormData {
//   name: string;
//   email: string;
//   message: string;
//   number: string;
// }

const Form: React.FC = () => {
 
  
  return (
    <div className="my-4 xl:my-8 mx-auto flex md:flex-row flex-1 gap-4 flex-nowrap flex-col justify-between px-4" id="contact">
        
        <div className="lg:max-container padding-container flex w-full flex-col lg:w-full justify-center text-center items-center mx-auto px-4 xl:px-0">
          <h2 className="font-bold text-5xl text-[#FF1791] py-2">Contact Us</h2>
          <p className='font-montserrat text-[#3C1642] text-lg font-normal leading-10 py-2 sm:max-w-xl mx-auto'>
          Stop scrolling, start scaling. Elevate your brand with personalised influencer solutions from The Socio Box.

          </p>
         
       
        <div className="xl:mb-20 mb-12 flex flex-col items-center justify-center w-[70%] xl:w-full mx-auto px-4 mt-2 ">
          <ContactForm />
        </div>
        </div>

            <Image 
             src="/banner1.png"
             alt="formImg"
             width={900}
             height={900}
             className="flex justify-center items-center object-contain "
            />
          
        {/* </div> */}
    </div>
  );
};

export default Form;
