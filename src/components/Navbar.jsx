import React, { useState } from 'react';
import Button from './Button';

const Navbar = () => {
    const [items, setItems] = useState(false);
    const showItems = () => setItems(!items);

    return (
        <>
            <div className='flex dark:bg-slate-900 gap-3 justify-around items-center p-3 fixed w-screen z-40 h-[10vh] top-0'>
                <p className=' block sm:hidden font-semibold text-slate-200 cursor-pointer' onClick={showItems} >Mostrar Mais</p>

                <ul className="flex list-none gap-8 max-sm:hidden ">
                    {navItems.map((item, index) => {
                        return (
                            <li key={index} className={`font-medium text-slate-200 cursor-pointer underline flex justify-center items-center hover:decoration-slate-200 ${item.color} `}><a href={item.link}>{item.name}</a></li>

                        )
                    })}
                </ul>

            </div>

            {items
                ? (
                    <div className='z-50 h-screen w-full dark:bg-slate-900 fixed top-0 flex flex-col items-center justify-center gap-2 px-4 list-none'>
                        <Button
                            text='Fechar'
                            onclick={showItems}
                            classname='absolute top-0 right-0 m-2 dark:hover:text-slate-200'
                        />

                        {navItems.map((item, index) => {
                            return (
                                <p key={index} className={`font-semibold dark:text-slate-200 dark:hover:decoration-slate-200 cursor-pointer underline w-3/12 flex justify-center items-center py-5 ${item.color}`}>{item.name}</p>
                            )
                        })}
                    </div>
                )
                : null
            }
        </>
    )
}

export default Navbar

const navItems = [
    {
        name: 'Home',
        link: 'Home',
        color: 'decoration-red-600'
    },
    {
        name: 'Habilidades',
        link: 'Habilidades',
        color: 'decoration-orange-600'
    },
    {
        name: 'Sobre Mim',
        link: 'Sobre-Mim',
        color: 'decoration-amber-600'
    },
    {
        name: 'Realizações',
        link: 'Realizacoes',
        color: 'decoration-lime-600'
    },
    {
        name: 'Certificados',
        link: 'Certificados',
        color: 'decoration-cyan-600'
    },
    {
        name: 'Contato',
        link: 'Contato',
        color: 'decoration-violet'
    },

]