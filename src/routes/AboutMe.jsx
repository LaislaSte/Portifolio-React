import React from 'react';
import Container from '../components/Container';
import HomeContainer from '../components/HomeContainer';
import styledMe from '../assets/thatsme.png';
import Medidor from '../components/Medidor';
import Navbar from '../components/menu/Navbar';

const AboutMe = () => {
    return (

        <HomeContainer>
            <div className="grid grid-cols-2 gap-7">
                <div className="col-span-2">
                    <Navbar page='Sobre Mim' />
                </div>

                <div className="overflow-y-auto flex flex-col gap-7 ">
                    <Container>
                        <h1 className='text-2xl mb-2'>Bio</h1>
                        <p className='mb-1'>
                            Recém formada no Ensino Médio Integrado ao Técnico em Desenvolvimento de Sistemas.
                        </p>
                        <p>
                            Atual estudante em Análise e Desenvolvimento de Sistemas na Faculdade de Tecnologia Fatec Zona Leste
                        </p>
                        <p className='mt-2'>
                            Durante os 3 anos aprendi o básico de desenvolvimento de software para mobile, web e desktop para ter um entendimento mais profundo dos conteúdos nos anos seguintes na faculdade, tenho conhecimentos sobre a indispensável lógica de programação e sobre algumas linguagens de programação como Java, Kotlin, PHP, Javascript, C, de marcação como HTML, XML e CSS, bibliotecas como Bootstrap, React js e React Native, a linguaguem MySQL para banco de dados, frameworks como Laravel, Heroku e Firebase.
                        </p>
                    </Container>
                    <Container>
                        <h1 className='text-2xl mb-2' >Persona</h1>
                        <Medidor This='Isso' That='Aquilo' tranformX={0} />
                        <Medidor This='Isso' That='Aquilo' tranformX={0} />
                        <Medidor This='Isso' That='Aquilo' tranformX={0} />
                    </Container>
                </div>

                <div className="">
                    <Container>
                        <div className="flex justify-center">
                            <img src={styledMe} alt="minha cara com uns circulos coloridos em volta" className='object-cover h-[300px] w-[300px] mb-2 ' />
                        </div>
                        <h1 className='text-center text-xl mb-2'>Laisla Stephanie</h1>
                        <div className="text-center flex justify-center ">
                            <h2 className='bg-background-light dark:text-dark-blue rounded-[15px] w-max px-5'>Desenvolvedora Full-Stack</h2>
                        </div>

                        <div className="mt-10">
                            <h1 className='mb-2'>Estudante e Futura Analista</h1>
                            <h1 >Proficiente para desenvolvimento de sistemas</h1>
                            <p>Web e Mobile</p>
                            <h1 className='mt-2'>Interesses</h1>
                            <p>Segurança da Informação</p>
                            <h1 className='mt-2'>Meta</h1>
                            <p>À procura de um estágio como desenvolvedor Back-End, Front-Ens ou Full-Stack para trabalhos na Web</p>
                        </div>
                    </Container>
                </div>


            </div>

        </HomeContainer>
    )
}

export default AboutMe

const personaData = [
    {
        this: '',
        that: '',
        tranformX: 0
    },
    {
        this: '',
        that: '',
        tranformX: 0
    },
    {
        this: '',
        that: '',
        tranformX: 0
    },
    {
        this: '',
        that: '',
        tranformX: 0
    },
]