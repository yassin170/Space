import React from 'react';
import "./Home.css";
import Navbar from './Navbar';
import { Link } from 'react-router-dom';



export default function Home() {

    return (
        <div className="bgHome h-screen w-screen flex flex-col justify-between">
            <Navbar />
            <div className="h-[70%] w-full flex items-center justify-center">
                <div className="h-[100%] w-[50%] flex justify-end items-center">
                    <div className='h-[90%] w-[65%] text-white flex justify-center flex-col'>
                        <p className='text-[1.5em]'>So, you want to travel to</p>
                        <div className='flex flex-col gap-4'>
                            <h1 className='text-[10em] ps-1'>Space</h1>
                            <p className='text-[0.8em]'>
                                Let's face it; if you want to go to space, you might as well <br />
                                genuinely go to outer space and not hover kind of on the <br /> 
                                edge of it. Well sit back, and relax because we'll give you a <br />
                                truly out of this world experience!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="h-[100%] w-[50%] flex justify-center items-center">
                    <div className="h-[200px] w-[200px] text-black text-2xl bg-white rounded-full flex justify-center items-center">
                    EXPLORE
                    </div>
                </div>
            </div>
        </div>
    );
}
