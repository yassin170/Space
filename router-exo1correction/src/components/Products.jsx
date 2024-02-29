import React from 'react';
import { Link } from 'react-router-dom';
import data from '../json/data.json';

export default function Products() {
  return (
    <div className='h-screen w-screen bg-green-100 p-5 flex flex-col justify-center items-center gap-1 text-xl'>
        {
            data.map((element, key) => {
                return (
                    <Link 
                        key={key}
                        to={`/details/${key}`}
                        className='cursor-pointer hover:underline hover:font-semibold' 
                    >
                        {element.nom}
                    </Link>
                ) 
            })
        }
    </div>
  )
}
