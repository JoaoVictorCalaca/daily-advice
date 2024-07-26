import React, { useEffect, useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import { FaCopy, FaCheck } from 'react-icons/fa';
import Modal from 'react-modal';

function Advice({text}) {

  const [modalOpen, setModalOpen] = useState(false)

  const customStyles = {
    content: {
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const springs = useSpring({
    from: { x: -1500, transform: 'rotate(180deg)' },
    to: { x: 0, transform: 'rotate(0deg)' },
  });

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Text copied to clipboard');
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };
  
  if (text != null) {
    return (
      <animated.div style={{...springs}} className='w-10/12 h-auto ease-in-out rounded-xl bg-white shadow-xl py-8 px-14 flex justify-center duration-1000'>
          <p className='text-blue-950 font-bold text-lg font-sans select-none'> <span className='text-black font-serif text-xl italic'>&ldquo;</span> {text} <span className='text-black font-serif text-xl italic'>&ldquo;</span> </p>
          <button onClick={ ()=> { copyToClipboard(); openModal() } } className='absolute right-2 top-2 rounded-xl shadow-2xl border-slate-300 border-2 p-2'> <FaCopy color='rgb(23 37 84)' size={18}/> </button>

          <Modal isOpen={modalOpen} onRequestClose={closeModal} style={customStyles} className='w-1/3 h-auto absolute top-1/2 left-1/2 bg-teal-600 p-4 rounded-lg flex flex-col gap-5 items-center justify-center' contentLabel="Successfully copied">
            <p className='text-slate-50 font-bold w-3/4 text-center'>Successfully copied to your keyboard!</p>
            <button className='px-10 py-3 bg-slate-50 rounded-lg text-blue-950 font-bold flex gap-2 items-center' onClick={closeModal}> <FaCheck color='rgb(23 37 84)' size={18}/> Close</button>
          </Modal>
      </animated.div>
    )
  }

  return (
    <div>
      <h1 className='text-2xl text-white font-bold duration-100 ease-in-out'>Hello, welcome to Daily Advice! 👋</h1>
      <p className='text-lg text-slate-100 duration-100 ease-in-out'>Click the button below to generate a funny random tip</p>
    </div>
  )
}

export default Advice