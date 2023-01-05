import React, { useState } from 'react';
import Button from './Button';

const Cards = (props) => {

    const [items, setItems] = useState(false);
    const showItems = () => setItems(!items);

    return (
        <div key={props.index}
            className={`rounded-xl border-[1px] border-b-[5px] border-violet shadow-slate-800 shadow-md w-96 ${props.color}`}>

            <div className="text-justify rounded-t-xl mb-2">

                <h1 className='uppercase font-semibold text-xl text-cyan-400 p-5 pb-0 font-poppins text-left ' > {props.name} </h1>

                <h2 className='dark:text-slate-200 font-medium text-lg border-b-[1px] pl-5 py-3 font-poppins border-violet ' >{props.entity} </h2>


            </div>
            <div className="flex items-center justify-center py-3">
                <Button
                    text='Detalhes'
                    onclick={showItems}
                />
            </div>

            {items
                ? (
                    <div className="my-container">

                        <div className="
                        rounded-xl border-[1px] border-b-[5px] border-violet shadow-slate-800 w-1/2 max-md:w-4/5 flex flex-col items-center justify-center bg-slate-900 shadow-xl opacity-100">

                            <div className="text-justify rounded-t-xl mb-2">

                                <h1 className='uppercase font-semibold text-xl text-cyan-400 border-b-[1px] p-5 font-poppins border-blue-light' > {props.name} </h1>

                                <h2 className='dark:text-slate-200 font-medium text-lg border-b-[1px] pl-5 py-3 font-poppins border-blue-light' >{props.entity} </h2>

                                <h3 className='dark:text-slate-200 font-normal text- border-b-[1px] pl-5 py-3 font-montserrat border-blue-light'>
                                    <p> {props.status} </p>
                                    {props.dateStart} a {props.dateEnd} ({props.hours})
                                </h3>

                                <p className="font-light text-sm dark:text-slate-200 border-b- p-5 font-montserrat" >
                                    {props.description}
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
        </div>
    )
}

export default Cards