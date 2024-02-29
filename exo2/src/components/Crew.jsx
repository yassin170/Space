import React from 'react';
import Navbar from './Navbar';
import "./Crew.css"



export default function Crew() {
    return (
        <div className="bgCrew h-screen w-screen">
            <Navbar />
            <div className='h-[78%] w-[100%] flex text-white'>
                <div className='h-[100%] w-[50%]'>
                    <div className='h-[10%] flex items-center justify-center gap-5 text-[1.5em]'>
                        <p className='text-gray-600 font-semibold'>02</p>
                        <p>MEET YOUR CREW</p>
                    </div>
                    <div className='h-[90%] flex justify-center items-center'>

                    </div>
                </div>
                <div  className='h-[100%] w-[50%]'>

                </div>
            </div>
        </div>
    )
}
