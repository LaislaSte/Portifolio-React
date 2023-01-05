import React from 'react'

const Services = () => {
    return (
        <div className=' mt-14'>
            <div className="h-3 w-full animate-bg-color "></div>

            <h1 className='font-poppins font-semibold dark:text-slate-200 text-5xl pt-10 pl-10' >Áreas de Atuação</h1>

            <div className='flex flex-wrap justify-start  max-sm:flex-col gap-10 px-10 my-10'>

                <div className="bg-[url('https://cdn.pixabay.com/photo/2018/05/04/20/01/website-3374825_960_720.jpg')] bg-cover h-52 w-1/3 hover:-translate-y-1 hover:scale-110 hover:shadow-2xl hover:shadow-indigo-600/40 delay-75 duration-100 ease-in-out bg-opacity-40  rounded-xl flex items-center justify-center">
                    <div className="hover:bg-slate-400/80 w-full h-full rounded-xl ">

                        <h2 className="dark:text-slate-200 font-montserrat font-extrabold bg-slate-800/80 bg-gradient-to-r from-orange-500/60 to-violet/60 p-5 rounded-t-xl flex justify-center hover:items-center hover:h-full hover:rounded-xl hover:text-lg delay-150 duration-200 ease-out">Desenvolvedor Front End Web</h2>

                    </div>

                </div>

                <div className="bg-[url('https://cdn.pixabay.com/photo/2015/05/29/10/33/ux-789162_960_720.jpg')] bg-cover h-52 w-1/3 hover:-translate-y-1 hover:scale-110 hover:shadow-2xl hover:shadow-indigo-600/40 delay-75 duration-100 ease-in-out bg-opacity-40  rounded-xl flex items-center justify-center">
                    <div className="hover:bg-slate-400/80 w-full h-full rounded-xl ">

                        <h2 className="dark:text-slate-200 font-montserrat font-extrabold bg-slate-800/80 bg-gradient-to-r from-orange-500/60 to-violet/60 p-5 rounded-t-xl flex justify-center hover:items-center hover:h-full hover:rounded-xl hover:text-lg delay-150 duration-200 ease-out">Desenvolvedor Front End Mobile</h2>

                    </div>

                </div>

                <div className="bg-[url('https://cdn.pixabay.com/photo/2018/05/04/20/01/website-3374825_960_720.jpg')] bg-cover h-52 w-1/3 hover:-translate-y-1 hover:scale-110 hover:shadow-2xl hover:shadow-indigo-600/40 delay-75 duration-100 ease-in-out bg-opacity-40  rounded-xl flex items-center justify-center">
                    <div className="hover:bg-slate-400/80 w-full h-full rounded-xl ">

                        <h2 className="dark:text-slate-200 font-montserrat font-extrabold bg-slate-800/80 bg-gradient-to-r from-violet/60 to-orange-500/60 p-5 rounded-t-xl flex justify-center hover:items-center hover:h-full hover:rounded-xl hover:text-lg delay-150 duration-200 ease-out">Desenvolvedor Back End Web</h2>

                    </div>

                </div>
                <div className="bg-[url('https://cdn.pixabay.com/photo/2015/05/29/10/33/ux-789162_960_720.jpg')] bg-cover h-52 w-1/3 hover:-translate-y-1 hover:scale-110 hover:shadow-2xl hover:shadow-indigo-600/40 delay-75 duration-100 ease-in-out bg-opacity-40  rounded-xl flex items-center justify-center">
                    <div className="hover:bg-slate-400/80 w-full h-full rounded-xl ">

                        <h2 className="dark:text-slate-200 font-montserrat font-extrabold bg-slate-800/80 bg-gradient-to-r from-violet/60 to-orange-500/60 p-5 rounded-t-xl flex justify-center hover:items-center hover:h-full hover:rounded-xl hover:text-lg delay-150 duration-200 ease-out">Desenvolvedor Back End Mobile</h2>

                    </div>

                </div>

            </div>

            <div className="h-3 w-full animate-bg-color "></div>
        </div>
    )
}

export default Services