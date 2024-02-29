import React from 'react';
import Navbar from './Navbar';
import Planets from './Planets';
import "./Destination.css";



export default function Destination() {
    return (
        <div className="bgDestination h-screen w-screen">
            <Navbar />
            <div className='flex h-[78%] w-[100%]'>
                <div className='h-[100%] w-[50%]'>

                </div>
                <Planets />
            </div>
        </div>
    )
}
