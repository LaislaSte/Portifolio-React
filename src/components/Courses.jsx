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
        status: 'Concluído',
        dateStart: 'FEV. DE 2020',
        dateEnd: 'DEZ. DE 2022',
        hours: '208h',
        entity: 'IBM',
        description: 'O programa do p-tech se destina a alunos da america látina, ele disponibiliza horas de mentoria, sessões, palestras e cursos sobre diversos assuntos em volta do mercado de trabalho e do meio coorporativo, o programa serviu para aprimorar habilidades técnicas de programação, design, apresentação, IA, habilidades profissionais, IOT e por ai vai, tudo para construir uma base para o mundo tecnológico e auxiliar na escolha de carreira ou área de atuação. As horas servem como passe para o ensino superior de Análise e Desenvolvimentos de Sistemas.',
        color: 'border-cyan-400'
    },
    {
        name: 'Desenvolvimento Avançado com Javascript ES6',
        status: 'Concluído',
        dateStart: 'JUN. DE 2022',
        dateEnd: 'JUN. DE 2022',
        hours: '05h',
        entity: 'Digital Innovation One',
        description: 'Arrow Functions; Enhanced Object Literals; conceitos Rest, Spread Operator e Destructuring em Node JS; Symbols, Interators e Generators; Callbacks e Promises; Fetch, Async/Await e EventEmitter; Testes TDD e BDD com Mocha, Chai e Sinon; Debugging.',
        color: 'border-cyan-500'
    },
    {
        name: 'Desenvolvimento Avançado em Java',
        status: 'Concluído',
        dateStart: 'MAI. DE 2022',
        dateEnd: 'MAI. DE 2022',
        hours: '08h',
        entity: 'Digital Innovation One',
        description: 'Paradigma Funcional no Java, Interfaces funcionais, Processamento Assíncrono e Paralelo, Por dentro da modularização do Java, Novidades do Java 10, Novidades do Java 11.',
        color: 'border-cyan-300'
    },
    {
        name: 'JavaScript ES6 essencial',
        status: 'Concluído',
        dateStart: 'ABR. DE 2022',
        dateEnd: 'ABR. DE 2022',
        hours: '04h',
        entity: 'Digital Innovation One',
        description: 'Tipos, variáveis, operadores, condicionais e repetição; Orientação a Objeto e Design Patterns; Manipulação e interação de Arrays.',
        color: 'border-cyan-500'
    },
    {
        name: 'Design Gráfico e Digital',
        status: 'Concluído',
        dateStart: 'MAR. DE 2018',
        dateEnd: 'NOV. DE 2018',
        hours: '100h',
        entity: 'Prepara Cursos Profissionalizantes',
        description: 'No curso desenvolvi habilidades de criação de designs com as ferramentas Corel Draw, Photoshop, InDesign, Firework e Flash. Aprendi fundamentos básicos de design e diferenças de design gráfico e digital. O curso contou com criação e edição de imagens, animações, vídeos, tipográfia, etc.',
        color: 'border-cyan-400'
    },
    {
        name: 'Operador de Computador',
        status: 'Concluído',
        dateStart: 'NOV. DE 2016',
        dateEnd: 'FEV. DE 2018',
        hours: '100h',
        entity: 'Prepara Cursos Profissionalizantes',
        description: 'Windows 10, Excel 2013, Powerpoint 2013, Word 2013, Internet 2015.',
        color: 'border-cyan-500'
    },

]

export default Courses