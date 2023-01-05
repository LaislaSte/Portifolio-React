import React from 'react';
import { Link } from 'react-router-dom';
// import me from '../assets/thatsme.jpg';
import me from '../assets/thatsme.png';
import Button from './Button';

const MainSection = () => {

    // Function will execute on click of button
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('Front-End Laisla Stephanie.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Front-End Laisla Stephanie.pdf';
                alink.click();
            })
        })
    }

    return (
        <div className='flex flex-wrap h-screen max-sm:flex-col max-md:h-[90vh] max-md:mt-[10vh] bg-background'>

            <div className="container w-1/2 max-sm:w-screen max-sm:h-1/2 flex flex-col items-start justify-center px-10 gap-2  ">

                <h2 className='
                font-semibold font-montserrat dark:text-slate-200 text-[30px] '>Laisla Stephanie</h2>

                <h1 className='font-bold font-poppins text-5xl text-cyan-400'>FullStack Developer</h1>

                <div className="flex gap-5  w-full items-center flex-wrap mt-6">
                    <h3 className='lg:text-3xl md:text-2x1 max-sm:text-2x1 dark:text-slate-200 font-montserrat font-light' > Download CV </h3>

                    <Button
                        text='Currículo'
                        onclick={onButtonClick}
                        classname='w-2/5'
                    />
                </div>

                <div className="border-b-2 border-spacing-5 border-violet w-1/2 max-md:w-full mt-6 flex justify-center pb-1">
                    <a href='https://www.linkedin.com/in/laisla-stephanie/'>
                        <p className="font-montserrat italic font-thin dark:text-slate-200 hover:text-cyan-400 cursor-pointer ">LinkedIn</p>
                    </a>
                </div>

            </div>


            <div className="container w-1/2 max-sm:w-screen max-sm:h-1/2 flex items-center max-sm:items-start justify-center align-middle p-5" >

                <img src={me} alt="Laisla avatar" className=' max-sm:w-1/2 md:w-4/5' />

                {/* <img src={me} alt="Laisla avatar" className='h-72 w-72 rounded-full object-cover max-sm:h-40 max-sm:w-40 z-10 hover:animate-spin relative left-24 top-8 max-[1110px]:w-52 max-[1110px]:h-52 ' />
                <div className="bg-gradient-to-b from-yellow via-pink to-violet h-72 w-72 max-sm:h-40 max-sm:w-40 backdrop-blur-sm rounded-full opacity-60 absolute max-[1110px]:w-52 max-[1110px]:h-52"></div>
                <div className="bg-gradient-to-b from-yellow via-pink to-violet h-72 w-72 max-sm:h-40 max-sm:w-40 backdrop-blur-sm rounded-full opacity-60 relative bottom-8 right-24 max-[1110px]:w-52 max-[1110px]:h-52 ma"></div> */}

            </div>

        </div>
    )
}

export default MainSection