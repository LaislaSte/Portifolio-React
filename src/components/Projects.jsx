import React, { useState } from 'react';
import memorizeLogo from '../assets/logoMemorize.png';
import wedukLogo from '../assets/weduk-logo.png';
import Button from './Button';


const Projects = () => {

    var a = 'one';
    const [projects, setProjects] = useState(projectDone);
    const [page, setPage] = useState(a);
    const [items, setItems] = useState(false);
    const showItems = () => setItems(!items);

    const handleChange = (value) => {
        switch (value) {
            case 'one':
                a = 'one';
                setPage(a)
                setProjects(projectDone);
                break;
            case
                a = 'two':
                setPage(a);
                setProjects(projectUndone);
                break;
            case
                a = 'three':
                setPage(a);
                setProjects(projectComing);
                break;

            default:
                break;
        }
    }
    return (
        <div id='Realizacoes'>
            <div className='my-10 px-10'>
                <h1 className='font-poppins font-semibold dark:text-slate-200 text-5xl' >Projetos Realizados</h1>

                <div className="mt-10 flex justify-evenly dark:text-slate-200 font-montserrat">
                    <p
                        onClick={() => handleChange('one')}
                        className='hover:bg-slate-800/50 hover:shadow-md hover:shadow-violet-trans delay-75 ease-in-out duration-100 px-12 border-[1px] border-violet-trans rounded py-3'>Finalizados</p>
                    <p
                        onClick={() => handleChange('two')}
                        className='hover:bg-slate-800/50 hover:shadow-md hover:shadow-violet-trans delay-75 ease-in-out duration-100 px-12 border-[1px] border-violet-trans rounded py-3'>Atuais</p>
                    <p
                        onClick={() => handleChange('three')}
                        className='hover:bg-slate-800/50 hover:shadow-md hover:shadow-violet-trans delay-75 ease-in-out duration-100 px-12 border-[1px] border-violet-trans rounded py-3'>Por Vir</p>

                </div>

                <div className="mt-10 flex bg-slate-600 flex-col items-center justify-center gap-5 p-10">
                    <p>
                        {page}
                    </p>

                    {projects.map((item, index) => {
                        return (
                            <div key={index} className="flex bg-slate-800 items-center justify-center gap-10 p-10 max-md:flex-col">

                                <div className={`w-1/4 ${item.color} dark:text-slate-200 bg-slate-700 rounded-lg flex-2 h-max`}>
                                    <h1 className='text-lg font-poppins font-medium pt-5 px-5'> {item.title} </h1>
                                    <p className='font-montserrat mb-3 px-5'> {item.subtitle} </p>

                                    {item.link && (
                                        <a href={item.link} className='hover:text-pink' ><p className='font-montserrat px-5 mb-3'>Link</p></a>
                                    )}

                                    {item.repository && (
                                        <a href={item.repository} className='hover:text-violet'><p className='font-montserrat mb-3 px-5'>Repositório</p></a>
                                    )}

                                </div>

                                <div className="flex-1 bg-slate-500 flex items-center justify-center p-5 gap-5">
                                    <div className=" w-4/6 h-60 flex items-center">
                                        <img src={item.media} alt="" className='w-full  object-cover' />
                                    </div>
                                    <p className="font-montserrat font-extralight dark:text-slate-200 w-2/6">
                                        <Button
                                            text='Detalhes'
                                            onclick={showItems}
                                        />
                                    </p>
                                </div>


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



                            </div>
                        )
                    })}

                    {/* <div className="flex-1 bg-slate-500 flex items-center justify-center p-5 gap-5">
                        <img src="https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='w-4/6 h-60 object-cover' />

                        <p className="font-montserrat font-extralight dark:text-slate-200 w-2/6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et deserunt excepturi magni accusamus delectus non id enim dolore eum amet aperiam ex asperiores, harum laboriosam. Sed ab autem pariatur asperiores.
                        </p>
                    </div> */}


                </div>

            </div>

            <div className="h-3 w-full animate-bg-color "></div>
        </div>
    )
}

export default Projects

const projectDone = [
    {
        title: 'Memorize Studio',
        subtitle: 'Plataforma de memorização de conteúdos didáticos feito para o trabalho de conclusão de curso',
        description: 'A construção da aplicação Web foi feita com React js, algumas bibliotecas de axilio e produtos do Firebase como Athentication, Firestore, Storage e Hosting. O desenvolvimento do trabalho contou com uma pesquisa base e a problemática de defasagem de ensino no Brasil, foi feito o referência teórico das tecnologias usadas, das teorias acerca do esquecimento, levantamento de requisitos e diagramado as funcionalidades do software com diagramas UML (Diagrama de Caso de Uso, Atividade e Sequência), a aplicação foi baseada em funções, por isso a escolha dos diagramas. Atuei na parte de pesquisa, levantamento de requisitos, diagramação, desenvolvimento ao todo tanto no back end como no front end.',
        media: memorizeLogo,
        link: 'https://memorize-studio.web.app/ ',
        color: ''
    },
    {
        title: 'Crud com Bootstrap, PHP e MySQL',
        subtitle: 'Plataforma de cadastro, exibição, edição e exclusão de usuário',
        description: 'Crud em MVC e PHP o objetivo é desenvolver um sistema CRUD simples em PHP 5 ou 7 (sem frameworks) e MySQL para a administração de serviços agendados. Foi usado como Base de Dados o Maria DB.',
        media: 'https://github.com/LaislaSte/webagendamentos/raw/main/img/readme/index.png',
        repository: 'https://github.com/LaislaSte/webagendamentos',
        link: '',
        color: ''
    },
]

const projectUndone = [
    {
        title: 'Memorize Studio 2.0',
        subtitle: 'Plataforma de memorização de conteúdos didáticos para o trabalho de conclusão de curso.',
        description: 'Aplicando princípios solid e outras ferramentas de desenvolvimento para melhor produtivizade como Tawild e utilização de typescript para tipagem e criação de interfaces. Melhorias de lógica de funcionamento e de design.',
        media: memorizeLogo,
        link: 'https://memorize-studio.web.app/ ',
        color: ''
    },
]

const projectComing = [
    {
        title: 'Weduk',
        subtitle: 'Plataforma de indicação de conteúdos didáticos para auxiliar na defasagem de aprendizado de um aluno.',
        description: 'O projeto foi ganhador do 2º lugar do Hackathon da Microsoft, que ocorreu no evento da Campus Party 2022, e por isso o time do qual faço parte foram para as semi finais da Image Cup da Microsoft com direito de partipar do Startups Founders Hub, a minha participação no projeto foi de trazer ideias e insitgs aos branstorms e formulação do projeto, e desenvolvimento de componentes simples como inputs, botões e formulários na parte de Front-End.',
        media: wedukLogo,
        repository: 'https://github.com/arcel-labs/arcel-fe',
        link: 'https://weduk-student.vercel.app',
        color: ''
    },
    {
        title: 'Desafio IBM',
        description: 'Desafio proposto para ser desenvolvido na faculdade de Análise e Desenvolvimento de Sistemas',
        media: '',
        repository: '',
        link: '',
        color: ''
    },
]