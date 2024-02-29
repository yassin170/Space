import React from 'react';
import Logo from "../assets/shared/logo.svg";
import { Link } from 'react-router-dom';



export default function Navbar() {
    return (
        <div className='h-[22%] w-full flex items-center justify-between'>
            <div className='h-[100%] w-[10%] flex justify-center items-center'>
                <img src={Logo} alt="logo-nav" />
            </div>
            <div className='flex items-center gap-9'>
                <div className='h-[1.5px] w-[22em] bg-white'></div>
                <div className='h-[100px] w-[60em] flex items-center justify-center gap-20 bg-gray-200 bg-opacity-5 backdrop-blur-sm text-white'>
                    <div>
                        <Link to={"/"}>00 HOME</Link>
                    </div>
                    <div>
                        <Link to={"/destination"}>01 DESTINATION</Link>
                    </div>
                    <div>
                        <Link to={"/crew"}>02 CREW</Link>
                    </div>
                    <div>
                        <Link to={"/technology"}>03 TECHNOLOGY</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
