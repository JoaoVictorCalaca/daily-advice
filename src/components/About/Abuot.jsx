import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa'

function Abuot() {
  return (
    <>
        <div className='flex flex-col justify-around gap-4 p-4'>
            <h1 className='text-6xl text-white font-bold duration-100 ease-in-out'>About</h1>

            <p className='text-lg text-slate-50'>This project was made for study purposes, using  
            <Link className='font-bold  italic' href='https://nextjs.org' target='_blank'> Next.js</Link>,  
            <Link className='font-bold italic' href='https://tailwindcss.com' target='_blank'> Tailwind CSS</Link>, 
            <Link className='font-bold  italic' href='https://api.adviceslip.com/' target='_blank'> Advice Slip api </Link> and 
            <Link className='font-bold  italic' href='https://www.react-spring.dev' target='_blank'> React Spring</Link>.</p>
            
            <div className='flex flex-col gap-4 bg-slate-50 p-4 rounded-xl shadow-xl'>
              <p className='text-lg w-full text-slate-700'>You can find more projects like this in my Github!</p>
              <Link className='relative p-4 w-1/2 self-center flex gap-8 items-center text-lg hover:w-3/4 bg-blue-950 hover:bg-teal-700 text-teal-50 ease-in-out duration-500 font-bold rounded-xl' target='_blank' href='https://github.com/JoaoVictorCalaca'> <FaGithub/> My Github
              
              <span className="absolute right-2 top-2 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-100"></span>
              </span>

              </Link>
            </div>

            <p className='text-lg w-1/2 text-slate-50'>Developed by: <Link className='font-bold text-white' href="https://www.instagram.com/jv_calaca?igsh=MWN3MnBnYWlpMGhweg==" target='_blank'>@jv_calaca</Link></p>
        </div>
    </>
  )
}

//<a href="https://www.freepik.com/free-vector/think-outside-box-concept-illustration_38321960.htm#fromView=search&page=1&position=3&uuid=21210c07-438c-4262-a4c3-a7a641f321e8">Image by storyset on Freepik</a>

export default Abuot