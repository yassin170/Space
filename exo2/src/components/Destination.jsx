import React from 'react';
import Navbar from './Navbar';
import data from '../json/data.json';
import { Link, useSearchParams } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import "./Destination.css";



export default function Destination() {
    const {id} = useParams();


    return (
        <div className="bgDestination h-screen w-screen">
            <Navbar />
            <div className='h-[78%] w-[100%] flex text-white'>
                <div className='h-[100%] w-[50%]'>
                    <div className='h-[10%] flex items-center justify-center gap-5 text-[1.5em]'>
                        <p className='text-gray-600 font-semibold'>01</p>
                        <p>PICK YOUR DESTINATION</p>
                    </div>
                    <div className='h-[90%] flex justify-center items-center'>
                        <div className='ms-20'>
                            <img className='size-[25em]' src={new URL(`../assets/destination/${data.destinations[id].images.png}`, import.meta.url).href} />
                        </div>
                    </div>
                </div>
                <div className='h-[100%] w-[50%] flex justify-center items-center'>
                    <div className='h-[100%] w-[65%] flex flex-col justify-center'>
                        <div className='flex gap-12 uppercase'>
                            {
                                data.destinations.map((element, key)=>{
                                    return(
                                        <Link to={`/destination/${key}`} key={key}>{element.name}</Link>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <p className='text-[8em]'>{data.destinations[id].name}</p>
                        </div>
                        <div>
                            <p className='text-[1.2em]'>{data.destinations[id].description}</p>
                        </div>
                        <div className='w-[100%] flex justify-center pt-10'>
                            <div className='h-[1px] w-[98%] bg-white'></div>
                        </div>
                        <div className='w-[100%] flex flex-col items-center pt-5'>
                            <p className='text-[1.3em]'>{data.destinations[id].distance}</p>
                            <p className='text-[1.4em]'>{data.destinations[id].travel}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
