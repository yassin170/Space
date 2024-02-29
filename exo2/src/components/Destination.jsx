import React from 'react';
import Navbar from './Navbar';
import Planets from './Planets';
import data from '../json/data.json';
import { Link, useSearchParams } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import "./Destination.css";



export default function Destination() {
    const {id} = useParams();


    return (
        <div className="bgDestination h-screen w-screen">
            <Navbar />
            <div className='h-[78%] w-[100%] flex'>
                <div className='h-[100%] w-[50%] bg-red-300 opacity-20'>
                    
                </div>
                <div className='h-[100%] w-[50%] bg-yellow-300 flex justify-center items-center text-white'>
                    <div className='h-[75%] w-[65%] bg-blue-400'>
                        <div className='flex gap-10 uppercase bg-black'>
                            {
                                data.destinations.map((element, key)=>{
                                    return(
                                        <Link to={`/destination/${key}`} key={key}>{element.name}</Link>
                                    )
                                })
                            }
                        </div>
                        <div>
                            {data.destinations[id].name}
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
