import React from 'react';
import { myHardSkills } from '../components/Skills';
import Navbar from '../components/menu/Navbar';
import Menu from '../components/menu/Menu';
import Container from '../components/Container';
import Footer from './Footer';

import me from '../assets/naturalMe.jpg'

const HomeContainer = ({ children }) => {
    return (
        <>
            <div className='
        bg-background-light text-dark-blue
        dark:bg-background-dark dark:text-background-light  
        w-full h-full p-7 
        flex gap-5'>
                <Menu />

                <div className='flex-1'>
                    {children}
                </div>
            </div>

            <Footer />
        </>
    )
}

export default HomeContainer