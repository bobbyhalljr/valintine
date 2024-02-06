'use client'
import React, { useEffect } from 'react'
import Link from 'next/link';
import Confetti from 'react-confetti'
import {useWindowSize} from 'react-use';
// import bobbyVideo from './bobbyVideo.mp4'

export default function Component(){
    
    const { width, height } = useWindowSize()

    return (
        <section
      key="1"
      className="w-screen h-full min-h-screen px-4 py-8 md:my-0 md:px-0 flex flex-col items-center justify-center bg-[#ffebf0] bg-opacity-50"
    >

        <Confetti
            width={width}
            height={height}
        />
        <div className="text-center space-y-6">
            <h1 className="text-5xl font-bold text-[#ff4d4d]">I knew you would say yes 😏</h1>
            <h1 className="text-3xl max-w-xl pb-6 font-bold text-gray-500">Thank you for being my Valentine Date!! ... and my wife! <span className='text-red-400 text-3xl'>♥️ ♥️ ♥️ </span></h1>
            
            <div className='flex flex-col bg-red-500/30 rounded-2xl p-2 pb-12 items-center'>
                <h1 className="text-3xl pt-12 font-bold text-[#ff4d4d] max-w-xl">I love you with all my heart mi amor!</h1>
                <div className='pt-8'>
                    <video className='rounded-xl w-full h-64' controls controlsList="nofullscreen" autoPlay loop muted>
                    <source src='./bobbyVideo.mp4' type="video/mp4"></source>
                    </video>
                </div>
                <h1 className="text-base pb-6 pt-12 font-bold text-gray-500 max-w-xl">I know my hair looks crazy lol</h1>

                <Link className='text-red-700 hover:text-red-700/80 hover:bg-red-700/20 p-2 rounded-xl font-bold underline' href='/'>Go back to the previous page and try to click the "no" button</Link>
            </div>
        </div>

    </section>
    )
}