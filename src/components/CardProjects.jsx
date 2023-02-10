import React from 'react'
import Button from './Button'

const CardProjects = (props) => {
    return (
        <>

            <div key={props.index} className="flex bg-slate-800 items-center justify-center gap-10 p-10 max-md:flex-col">

                <div className={`w-64 ${props.color} dark:text-slate-200 bg-slate-700 rounded-lg flex-2 h-max`}>
                    <h1 className='text-lg font-poppins font-medium pt-5 px-5'> {props.title} </h1>
                    <p className='font-montserrat mb-3 px-5'> {props.subtitle} </p>

                    {props.link && (
                        <a href={props.link} className='hover:text-pink' ><p className='font-montserrat px-5 mb-3'>Link</p></a>
                    )}

                    {props.repository && (
                        <a href={props.repository} className='hover:text-violet'><p className='font-montserrat mb-3 px-5'>Repositório</p></a>
                    )}

                    <Button
                        text='Detalhes'
                        onclick={props.fun}
                    />

                </div>

                <div className="flex-1 bg-slate-500 flex items-center justify-center p-5 gap-5">
                    <div className=" w-4/6 h-60 flex items-center justify-center">
                        <img src={props.media} alt="" className='h-full object-contain' />
                    </div>

                    <p className="font-montserrat font-extralight dark:text-slate-200 w-2/6">

                    </p>
                </div>

            </div>

            {/* <div className='my-container'>
                {items
                    ? (
                        <div className="my-container">

                            <div className="
                        rounded-xl border-[1px] border-b-[5px] border-violet shadow-slate-800 w-1/2 max-md:w-4/5 flex flex-col items-center justify-center bg-slate-900 shadow-xl opacity-100">

                                <div className="text-justify rounded-t-xl mb-2">
                                    <h1 className='uppercase font-semibold text-xl text-cyan-400 border-b-[1px] p-5 font-poppins border-blue-light' > {item.title} </h1>
                                    <p className="font-light text-sm dark:text-slate-200 border-b- p-5 font-montserrat" >
                                        {item.description}
                                    </p>
                                </div>

                                <div className="flex items-center justify-center pb-3">
                                    <Button
                                        text='Fechar'
                                        onclick={showItems}
                                    />
                                </div>
                            </div>
                        </div>

                    )
                    : null
                }

            </div> */}
        </>
    )
}

export default CardProjects