import React from 'react';
import Cards from './Cards';

const Courses = () => {

    /*
    .menu-item-category {
        overflow-x: auto;
        display: flex;
        align-items: center;
        width: 100%;
        height: 5vh;
        position: fixed;
        top: 10vh;
        background-color: var(--SECONDARY_900);
        font: var(--LIGHT_ITALIC);
        gap: 1px;
    }
    
    .menu-item-category .item-category {
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--SECONDARY_800);
        height: 100%;
        width: 100%;
        min-width: 7rem;
        transition: var(--transition);
    }
    
    .menu-item-category .item-category:hover {
        background: none;
    }*/
    return (
        <div className=' '>

            <h1 className='self-center my-6 font-bold text-5xl p-10 dark:text-slate-200 font-poppins' >Cursos e Certificados</h1>

            <div className="flex items-start justify-start px-10 w-full h-full gap-5 flex-wrap">
                {mycourses.map((item, index) => {
                    return (
                        <Cards
                            name={item.name}
                            status={item.status}
                            dateStart={item.dateStart}
                            dateEnd={item.dateEnd}
                            hours={item.hours}
                            entity={item.entity}
                            description={item.description}
                            color={item.color}
                            key={index}
                        />

                    )
                })}

            </div>

            <h1 className='self-center my-6 pt-10 font-bold text-5xl pl-10 dark:text-slate-200 font-poppins' >Credenciais Digitais</h1>

            <a href="https://www.credly.com/users/laislaste/badges">
                <h2 className="font-montserrat dark:text-slate-200 hover:text-violet max-md:text-sm  md:text-xl pl-10 font-light">https://www.credly.com/users/laislaste/badges</h2>
            </a>

            {/* <div className="fixed top-10 scroll-ml-2 flex gap-2">
                {mycourses.map((item, index) => {
                    return (
                        <div className="card dark:bg-slate-400 rounded-xl max-w-3xl hover:shadow-sm w-64" key={index}>
                            <h1 className='font-semibold text-xl h-24 bg-cyan-500 rounded-t-xl p-3 uppercase flex items-center justify-evenly'>{item.name}</h1>
                            <div className="p-3">
                                <p className='font-medium text-lg'> {item.entity} </p>
                                <p> {item.dateStart} a {item.dateEnd} - ({item.hours}) </p>
                                <p className='text-justify'> {item.description} </p>
                            </div>
                        </div>
                    )
                })}
            </div> */}

        </div>
    )
}

const mycourses = [
    {
        name: 'Workplace Learning do P-tech',
        status: 'Conclu??do',
        dateStart: 'FEV. DE 2020',
        dateEnd: 'DEZ. DE 2022',
        hours: '208h',
        entity: 'IBM',
        description: 'O programa do p-tech se destina a alunos da america l??tina, ele disponibiliza horas de mentoria, sess??es, palestras e cursos sobre diversos assuntos em volta do mercado de trabalho e do meio coorporativo, o programa serviu para aprimorar habilidades t??cnicas de programa????o, design, apresenta????o, IA, habilidades profissionais, IOT e por ai vai, tudo para construir uma base para o mundo tecnol??gico e auxiliar na escolha de carreira ou ??rea de atua????o. As horas servem como passe para o ensino superior de An??lise e Desenvolvimentos de Sistemas.',
        color: 'border-cyan-400'
    },
    {
        name: 'Desenvolvimento Avan??ado com Javascript ES6',
        status: 'Conclu??do',
        dateStart: 'JUN. DE 2022',
        dateEnd: 'JUN. DE 2022',
        hours: '05h',
        entity: 'Digital Innovation One',
        description: 'Arrow Functions; Enhanced Object Literals; conceitos Rest, Spread Operator e Destructuring em Node JS; Symbols, Interators e Generators; Callbacks e Promises; Fetch, Async/Await e EventEmitter; Testes TDD e BDD com Mocha, Chai e Sinon; Debugging.',
        color: 'border-cyan-500'
    },
    {
        name: 'Desenvolvimento Avan??ado em Java',
        status: 'Conclu??do',
        dateStart: 'MAI. DE 2022',
        dateEnd: 'MAI. DE 2022',
        hours: '08h',
        entity: 'Digital Innovation One',
        description: 'Paradigma Funcional no Java, Interfaces funcionais, Processamento Ass??ncrono e Paralelo, Por dentro da modulariza????o do Java, Novidades do Java 10, Novidades do Java 11.',
        color: 'border-cyan-300'
    },
    {
        name: 'JavaScript ES6 essencial',
        status: 'Conclu??do',
        dateStart: 'ABR. DE 2022',
        dateEnd: 'ABR. DE 2022',
        hours: '04h',
        entity: 'Digital Innovation One',
        description: 'Tipos, vari??veis, operadores, condicionais e repeti????o; Orienta????o a Objeto e Design Patterns; Manipula????o e intera????o de Arrays.',
        color: 'border-cyan-500'
    },
    {
        name: 'Design Gr??fico e Digital',
        status: 'Conclu??do',
        dateStart: 'MAR. DE 2018',
        dateEnd: 'NOV. DE 2018',
        hours: '100h',
        entity: 'Prepara Cursos Profissionalizantes',
        description: 'No curso desenvolvi habilidades de cria????o de designs com as ferramentas Corel Draw, Photoshop, InDesign, Firework e Flash. Aprendi fundamentos b??sicos de design e diferen??as de design gr??fico e digital. O curso contou com cria????o e edi????o de imagens, anima????es, v??deos, tipogr??fia, etc.',
        color: 'border-cyan-400'
    },
    {
        name: 'Operador de Computador',
        status: 'Conclu??do',
        dateStart: 'NOV. DE 2016',
        dateEnd: 'FEV. DE 2018',
        hours: '100h',
        entity: 'Prepara Cursos Profissionalizantes',
        description: 'Windows 10, Excel 2013, Powerpoint 2013, Word 2013, Internet 2015.',
        color: 'border-cyan-500'
    },

]

export default Courses