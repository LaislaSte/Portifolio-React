import React from 'react';
import Contact from '../components/Contact';
import Courses from '../components/Courses';
import Footer from '../components/Footer';
import MainSection from '../components/MainSection';
import Services from '../components/Services';
import Skills from '../components/Skills';
import WhoAmI from '../components/WhoAmI';
import Projects from '../components/Projects';

const Public = () => {
    return (
        <div className='dark:bg-background'>
            <MainSection />
            <WhoAmI />
            <Skills />
            <Services />
            <Projects />
            <Courses />
            <Contact />
            <Footer />
        </div>
    )
}

export default Public