"use client"
import React, {  useState } from 'react'
import {z} from "zod"
import { zodResolver } from '@hookform/resolvers/zod';
import {useForm, SubmitHandler} from "react-hook-form"
import {motion} from 'framer-motion' 
import {FormDataSchema} from '@/lib/schema'
import toast from 'react-hot-toast';



type Inputs = z.infer<typeof FormDataSchema>

  

const ContactForm = () => {
    const steps = [
        {name:"Brands",
         fields:['fullName', 'email', 'phoneNumber', 'website', 'message']
       },
        {name:"Influencers",
         fields:['fullName', 'email', 'phoneNumber', 'city','socialPlatform', 'link', 'followers', 'message']
    },
        
    ];

    const [prevStep, setPrevStep] = useState(0)
    const [currentStep, setcurrentStep] = useState(0)
    const delta = currentStep - prevStep


    const next = async ()=>{
        // const fields = steps[currentStep].fields
        // const result = await trigger(fields as FieldName[], {shouldFocus:true})


        // if(!result) return;

        if(currentStep < steps.length - 1){
            if(currentStep === steps.length - 2){
               await handleSubmit(processForm)()
            }
           setPrevStep(currentStep) 
           setcurrentStep((step)=> step + 1)
        }
    }


    const prev = ()=>{
        if(currentStep > 0){
            setPrevStep(currentStep)
            setcurrentStep((step)=>step - 1)
        }
    }

    const {
        register,
        handleSubmit,
        watch,
        reset,
        trigger,
        formState:{errors}
    } = useForm<Inputs>({
        resolver:zodResolver(FormDataSchema)
    })

    const processForm:SubmitHandler<Inputs> = async(data) =>{
        console.log(data)
            try {
                const response = await fetch("/api/send", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(data),
                });
          
                if (response.ok) {
                  reset()
                  toast.success(`Hi ${data.fullName}, your message has been sent successfully!`);
                } else {
                  toast.error("An error occurred while sending the email.");
                }
              } catch (error) {
                console.error("Error sending email:", error);
                toast.error("An error occurred while sending the email.");
              }
        
    }

    type FieldName = keyof Inputs


    
    
    

  return (
    <>
        {/* steps */}
      <nav aria-label='Progress' className='flex flex-row'>
        <ol role='list' className='space-y-0 flex gap-6 xl:gap-2 w-full justify-between items-center text-center py-4 xl:py-6 mx-auto xl:w-[30vw] text-gray-600 md:space-x-8 md:space-y-0'>
          {steps.map((step, index) => (
            <li key={step.name} className='flex-1'>
              {currentStep > index ? (
                <div className='group flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4 cursor-pointer' onClick={prev}>
                  
                  <span className='text-start uppercase text-sm xl:text-xl font-bold'>{step.name}</span>
                </div>
              ) : currentStep === index ? (
                <div
                  className='flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4 cursor-pointer'
                  aria-current='step'
                  onClick={next}  
                   >
                  
                  <span className='text-start uppercase text-sm xl:text-xl font-bold'>{step.name}</span>
                </div>
              ) : (
                <div className='group flex w-full flex-col border-l-4 border-gray-200 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4 cursor-pointer' onClick={next}>
                  
                  <span className='text-start uppercase text-sm xl:text-xl font-bold'>{step.name}</span>
                </div>
              )}
            </li>
          ))}
        </ol>
      </nav>
    <div className="flex flex-col justify-center items-center mx-auto w-full px-2 " >
        {currentStep === 0 && (

        <motion.div
            initial={{x: delta >= 0 ? '50%': '-50%', opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:0.3, ease:'easeInOut'}}
        >

        <form
            className="w-full h-auto lg:w-[500px] space-y-6 mt-4 mx-auto flex flex-col bg-slate-200 border border-gray-100 shadow-2xl p-4 xl:p-8 rounded-lg justify-center text-black text-start "
            onSubmit={handleSubmit(processForm)}
            >
                <div className="flex flex-col">
                <label htmlFor="name">Full Name</label>
                <input
                  className="py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all outline-none"
                  type="text"
                  {...register('fullName')}
                  autoComplete='given-name'
                  id="fullName"
                  placeholder="Enter Your Full Name"
                />
                {errors.fullName?.message && (
                    <p className='mt-2 text-sm text-red-600'>
                        {errors.fullName.message}
                    </p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <input
                  className="py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all outline-none"
                  type="email"
                  {...register('email')}
                  autoComplete='email'
                  id="email"
                  placeholder="Enter Your Email"
                />
                {errors.email?.message && (
                    <p className='text-red-600 text-sm mt-2'>
                        {errors.email.message}
                    </p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="number">Phone Number</label>
                <input
                  className="py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all outline-none"
                  type="number"
                  {...register('phoneNumber')}
                  autoComplete='number'
                  id="phoneNumber"
                  placeholder="Enter Your Phone Number"
                />
                {errors.phoneNumber?.message && (
                    <p className='text-red-600 text-sm mt-2'>
                        {errors.phoneNumber.message}
                    </p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="url">Website</label>
                <input
                  className="py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all outline-none"
                  type="url"
                  {...register('website')}
                  autoComplete='url'
                  id="website"
                  placeholder="Enter Your Website URL"
                />
                {errors.website?.message && (
                    <p className='text-red-600 text-sm mt-2'>
                        {errors.website.message}
                    </p>
                )}
              </div>
             
              <div className="flex flex-col">
                <label htmlFor="message">Message</label>
                <textarea
                  className="py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all outline-none"
                  id="message"
                  {...register('message')}
                  autoComplete='message'
                  cols={30}
                  rows={3}
                  placeholder="Enter Your Message"
                />
              </div>
              <div className="flex flex-row justify-center">
                <button type="submit" className="w-40 h-14 bg-[#0077B6] text-white text-lg font-semibold hover:bg-[#7209B7] rounded-full" >
                    Submit
                </button>
              </div>
        </form>
        </motion.div>
        )}

        {currentStep === 1 && (
          <motion.div
          initial={{x: delta >= 0 ? '-50%': '50%', opacity:0}}
          animate={{x:0, opacity:1}}
          transition={{duration:0.3, ease:'easeInOut'}}
          >

            <form
            className="w-full h-auto lg:w-[500px] space-y-6 mt-4 mx-auto bg-slate-200 border border-gray-100 shadow-2xl p-4 xl:p-8 rounded-lg justify-center items-center text-black text-start"
            onSubmit={handleSubmit(processForm)} 
            
          >
              <div className="flex flex-col">
              <label htmlFor="name">Full Name</label>
              <input
                  className="py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all outline-none"
                  type="text"
                  {...register('fullName')}
                  autoComplete='given-name'
                  id="fullName"
                  placeholder="Enter Your Full Name"
                />
                {errors.fullName?.message && (
                    <p className='mt-2 text-sm text-red-600'>
                        {errors.fullName.message}
                    </p>
                )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                  className="py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all outline-none"
                  type="email"
                  {...register('email')}
                  autoComplete='email'
                  id="email"
                  placeholder="Enter Your Email"
                />
                {errors.email?.message && (
                    <p className='text-red-600 text-sm mt-2'>
                        {errors.email.message}
                    </p>
                )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="number">Phone Number</label>
              <input
                  className="py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all outline-none"
                  type="number"
                  {...register('phoneNumber')}
                  autoComplete='number'
                  id="phoneNumber"
                  placeholder="Enter Your Phone Number"
                />
                {errors.phoneNumber?.message && (
                    <p className='text-red-600 text-sm mt-2'>
                        {errors.phoneNumber.message}
                    </p>
                )}
            </div>

            <div className="flex flex-col">
                <label htmlFor="city">City</label>
                <input
                  className="py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all outline-none"
                  type="text"
                  {...register('city')}
                  autoComplete='city'
                  id="city"
                  placeholder="Enter Your City Name"
                />
                {errors.city?.message && (
                    <p className='text-red-600 text-sm mt-2'>
                        {errors.city.message}
                    </p>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="social">Social Platform</label>
                <input
                  className="py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all outline-none"
                  type="text"
                  {...register('socialPlatform')}
                  autoComplete='social-platform'
                  id="socialPlatform"
                  placeholder="Enter Your Social Platform"
                />
                {errors.socialPlatform?.message && (
                    <p className='text-red-600 text-sm mt-2'>
                        {errors.socialPlatform.message}
                    </p>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="url">Link</label>
                <input
                  className="py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all outline-none"
                  type="url"
                  {...register('link')}
                  autoComplete='link'
                  id="link"
                  placeholder="Enter Your Social Platform link"
                />
                {errors.link?.message && (
                    <p className='text-red-600 text-sm mt-2'>
                        {errors.link.message}
                    </p>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="number">Number of followers</label>
                <input
                  className="py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all outline-none"
                  type="number"
                  {...register('followers')}
                  autoComplete='number'
                  id="followers"
                  placeholder="Enter Your Number of Followers"
                />
                {errors.followers?.message && (
                    <p className='text-red-600 text-sm mt-2'>
                        {errors.followers.message}
                    </p>
                )}
              </div>

              
           
            <div className="flex flex-col">
              <label htmlFor="message">Message</label>
              <textarea
                  className="py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all outline-none"
                  id="message"
                  {...register('message')}
                  autoComplete='message'
                  cols={30}
                  rows={3}
                  placeholder="Enter Your Message"
                />
            </div>
            <div className="flex flex-row justify-center">
              <button type="submit" className="w-40 h-14 bg-[#0077B6] text-white text-lg font-semibold hover:bg-[#7209B7] rounded-full" >
                  Submit
              </button>
            </div>
          </form>
          </motion.div>
        )}

        {/* navigation */}
        
        <div className='mt-10 flex flex-col gap-10 mx-auto pt-5'>
            <div className='flex justify-between gap-12'>

{/* prev */}
        <button type='button' onClick={prev} disabled={currentStep === 0} className='rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50'>
        <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.75 19.5L8.25 12l7.5-7.5'
              />
            </svg>

        </button>

{/* next */}
        <button  type='button'
            onClick={next}
            disabled={currentStep === steps.length - 1}
            className='rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50'
          >
           <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M8.25 4.5l7.5 7.5-7.5 7.5'
              />
            </svg>
        </button>
            </div>

        </div>

    </div>
    </>
  )
}

export default ContactForm