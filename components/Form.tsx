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
        
            <Image 
             src="/banner1.png"
             alt="formImg"
             width={900}
             height={900}
             className="object-contain"
            />
          
        <div className="lg:max-container padding-container flex w-full flex-col lg:w-full justify-center text-center items-center mx-auto px-4 xl:px-0">
          <h2 className="font-bold text-5xl text-red-400 py-2">Contact Us</h2>
          <p className='font-montserrat text-slate-600 text-lg font-medium leading-10 py-2 sm:max-w-xl mx-auto'>
            Now that you know us and our work, it is possible that you might be looking forward to discuss your business and services or digital requirements with us to get the appropriate solutions for your brand. Kindly feel free to take an appointment with us, our executives would be happy to guide you and build a latest digital platform for your brand.
          </p>
         
        <div className="xl:mb-20 mb-12 flex flex-col items-center justify-center w-[70%] xl:w-full mx-auto px-4 mt-2 ">
          <ContactForm />
        </div>
       
        </div>
        {/* </div> */}
    </div>
  );
};

export default Form;
