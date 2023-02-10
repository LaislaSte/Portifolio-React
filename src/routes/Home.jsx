import React from 'react';
import { myHardSkills } from '../components/Skills';
import Navbar from '../components/menu/Navbar';
import Container from '../components/Container';

import me from '../assets/naturalMe.jpg'
import HomeContainer from '../components/HomeContainer';

const Home = () => {
    return (
        <HomeContainer>
            <div className="grid grid-cols-2 grid-flow-row gap-7 ">
                <div className="col-span-2">
                    <Navbar page='Home' />
                </div>
                <Container >
                    <h1 className='text-3xl text-center mb-5'>Laisla Stephanie</h1>
                    <div className="flex justify-center ">
                        <img src={me} alt="avatar da Laisla" className='w-[200px] h-[200px] rounded-full object-cover mb-5' />
                    </div>
                    <h2> Descrição: </h2>
                    <p>Estudante de Análise e Desenvilvimento de Sistemas</p>
                    <h2 className='mt-2'>Atuação:</h2>
                    <p> Desenvolvimento Back-End</p>
                </Container>

                <Container>
                    <h1 className='text-3xl text-center mb-5'>Tecnologias</h1>
                    {myHardSkills.map((item, index) => {
                        return (
                            <h2 key={index}>{item.skill}</h2>
                        )
                    })}
                </Container>

                <div className="col-span-2">
                    <Container className='border-4'>
                        <h1 className="text-3xl text-center mb-5">Projetos</h1>
                        <h2>projeto 1</h2>
                        <h2>projeto 2</h2>
                        <h2>projeto 3</h2>
                    </Container>
                </div>
            </div>
        </HomeContainer>
    )
}

export default Home