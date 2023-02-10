import React from 'react'

const Skills = () => {
    return (
        <div id='Habilidades' className='pt-5 max-md:mt-10'>

            <div className="h-3 w-full animate-bg-color "></div>

            <h1 className='font-poppins font-semibold dark:text-slate-200 text-5xl pt-10 pl-10' >Habilidades Técnicas</h1>

            <div className='flex flex-wrap justify-start  max-sm:flex-col gap-10 px-10 my-10'>

                {myHardSkills.map((item, index) => {
                    return (
                        <div key={index} className={`rounded border-2 dark:text-slate-200 font-montserrat ${item.color} w-auto h-10 flex justify-center items-center 
                        transition ease-in-out delay-150
                        hover:-translate-y-1 hover:scale-110 duration-300 hover:shadow-lg hover:shadow-indigo-600/40 p-6`}>

                            <p > {item.skill} - {item.nivel} </p>
                        </div>
                    )
                })}

            </div>

            <h1 className='font-poppins font-semibold dark:text-slate-200 text-5xl pt-10 pl-10' >Habilidades Pessoais</h1>

            <div className='flex flex-wrap justify-start  max-sm:flex-col gap-10 px-10 my-10'>
                {mySoftSkills.map((item, index) => {
                    return (
                        <div key={index} className={`rounded border-2 dark:text-slate-200 font-montserrat ${item.color} w-auto h-10 flex justify-center items-center 
                        transition ease-in-out delay-150
                        hover:-translate-y-1 hover:scale-110 duration-300 hover:shadow-lg hover:shadow-indigo-600/40 p-6`}>

                            <p> {item.skill} </p>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Skills


const mySoftSkills = [
    {
        skill: 'Autodidata',
        color: 'border-cyan-400'
    },
    {
        skill: 'Rápido Aprendizado',
        color: 'border-cyan-500'
    },
    {
        skill: 'Bom relacionamento interpessoal e profissional',
        color: 'border-cyan-300'
    },
    {
        skill: 'Criatividade',
        color: 'border-cyan-400'
    },
    {
        skill: 'Relacionamento Interpessoal',
        color: 'border-cyan-500'
    },
    {
        skill: 'Ótima Ouvinte',
        color: 'border-cyan-300'
    },

]

export const myHardSkills = [
    {
        skill: 'HTML',
        nivel: 'Intermediário',
        color: 'border-cyan-400'
    },
    {
        skill: 'CSS',
        nivel: 'Intermediário',
        color: 'border-cyan-500'
    },
    {
        skill: 'Javacript ES6',
        nivel: 'Intermediário',
        color: 'border-cyan-300'
    },
    {
        skill: 'React js',
        nivel: 'Intermediário',
        color: 'border-cyan-500'
    },
    {
        skill: 'React Native',
        nivel: 'Básico',
        color: 'border-cyan-400'
    },
    {
        skill: 'Tailwind',
        nivel: 'Intermediário',
        color: 'border-cyan-400'
    },
    {
        skill: 'Material UI',
        nivel: 'Básico',
        color: 'border-cyan-500'
    },
    {
        skill: 'Bootstrap',
        nivel: 'Básico',
        color: 'border-cyan-300'
    },
    {
        skill: 'SCRUM',
        nivel: 'Básico',
        color: 'border-cyan-500'
    },
    {
        skill: 'Git e GitHub',
        nivel: 'Básico',
        color: 'border-cyan-400'
    },
    {
        skill: 'Láravel',
        nivel: 'Básico',
        color: 'border-cyan-400'
    },
    {
        skill: 'Rest API',
        nivel: 'Básico',
        color: 'border-cyan-500'
    },
    {
        skill: 'Node js',
        nivel: 'Básico',
        color: 'border-cyan-300'
    },
    {
        skill: 'Lógica de Programação',
        nivel: 'Básico',
        color: 'border-cyan-500'
    },
    {
        skill: 'Inglês',
        nivel: 'Intermediário',
        color: 'border-cyan-400'
    },
]