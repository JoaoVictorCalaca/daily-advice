'use client'
import Advice from "@/components/Advice/Advice";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import { FaLightbulb } from 'react-icons/fa'
import Abuot from "@/components/About/Abuot";
import Link from "next/link";

export default function Home() {

  const [advice, setAdvice] = useState()
  const [btnText, setBtnText] = useState('Generate an advice...')

  const adviceApiBaseUril = 'https://api.adviceslip.com/'

  const adviceClient = axios.create({
    baseURL: adviceApiBaseUril,
    timeout: 5000
  })

  const getAdvice = async () => {
    const uri = 'advice'
    const response = await adviceClient.get(uri)
    return response.data.slip.advice
  }

  const loadAdvice = async () => {
    try {
      const adviceInEnglish = await getAdvice()
      setAdvice(adviceInEnglish)
      setBtnText('Regenerate advice...')
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center scroll-smooth">
      <header className="p-2 bg-slate-200 w-full h-14 flex justify-center items-center gap-10 fixed z-10 rounded-b-lg shadow-lg">
        <Link href="#home" className="text-blue-950 font-bold">Home</Link>
        <Link href="#about" className="text-blue-950 font-bold">About</Link>
      </header>

      <div id="home" className="flex flex-col items-center justify-between gap-12 mt-3 h-auto pt-14">
        <Image draggable='false'  src='/daily-advice-logo.gif' alt="logo" width={100} height={100}/>
        <Advice text={advice}/>
        <button className="p-4 bg-teal-50 flex gap-2 items-center text-lg hover:px-12 hover:bg-blue-950 hover:text-teal-50 ease-in-out duration-500 text-blue-950 font-bold rounded-xl animate-bounce" onClick={loadAdvice}> <FaLightbulb/> {btnText}</button>
      </div>

      <div id="about" className="mt-52">
        <Abuot/>
      </div>
    </main>
  );
}
