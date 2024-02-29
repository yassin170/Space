import React from 'react'
import { Link } from 'react-router-dom'



export default function Home() {
    return (
        <div className='flex flex-col gap-2 items-center'>
            <div>
                <h1 className='text-red-700 text-[3em] font-bold'>This is the Home</h1>
            </div>
            <div className='flex gap-5 text-[2em] text-green-700'>
                <Link to={'/about'}>About</Link>
                <Link to={'/contact'}>Contact</Link>
            </div>
        </div>
    )
}
