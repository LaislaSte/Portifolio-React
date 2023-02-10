import React, { useState } from 'react';
import naturalMe from '../../assets/naturalMe.jpg'

const Navbar = (props) => {
    return (
        <div
            className='my-container  
            bg-white text-dark-blue shadow-shadow-dark
            dark:bg-background-dark-800 dark:text-light-pink dark:shadow-shadow-light
            items-center gap-3 px-3
            w-full
            '>
            <div className='h-12 w-12 rounded-full'>
                <img src={naturalMe} alt="minha cara" className='object-cover h-12 w-12 rounded-full' />
            </div>
            <h1 className='title-desktop'> {props.page} </h1>
        </div>

    )
}

export default Navbar