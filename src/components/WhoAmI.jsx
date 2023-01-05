import React from 'react'

const WhoAmI = () => {
    return (
        <div id='Habilidades' className='pt-5 max-md:mt-10'>

            <div className="h-3 w-full animate-bg-color "></div>

            <h1 className='font-poppins font-semibold dark:text-slate-200 text-5xl max-[440px]:text-4xl pt-10 pl-10' >Apresentações</h1>

            <div className="flex flex-wrap max-[400px]:flex-col ">
                <div className="flex-1  p-5 lg:p-10">
                    <h1 className='font-poppins font-medium dark:text-slate-200 text-2xl  '>Quem Sou Eu</h1>
                    <p className='font-montserrat font-light dark:text-slate-200 '>Recém formada no Ensino Médio Integrado ao Técnico em Desenvolvimento de Sistemas.</p>
                    <p className='font-montserrat font-light dark:text-slate-200 '>Atual estudante em Análise e Desenvolvimento de Sistemas na Faculdade de Tecnologia Fatec Zona Leste</p>
                </div>

                <div className="flex-1  p-5 lg:p-10">
                    <h1 className='font-poppins font-medium dark:text-slate-200 text-2xl ' >Um pouco sobre mim</h1>
                    <p className='font-montserrat font-light dark:text-slate-200 '> Durante os 3 anos aprendi o básico de desenvolvimento de software para mobile, web e desktop para ter um entendimento mais profundo dos conteúdos nos anos seguintes na faculdade, tenho conhecimentos sobre a indispensável lógica de programação e sobre algumas linguagens de programação como Java, Kotlin, PHP, Javascript, C, de marcação como HTML, XML e CSS, bibliotecas como Bootstrap, React js e React Native, a linguaguem MySQL para banco de dados, frameworks como Laravel, Heroku e Firebase.</p>
                </div>
            </div>

        </div>
    )
}

export default WhoAmI