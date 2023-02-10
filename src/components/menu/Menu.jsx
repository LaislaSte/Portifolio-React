import Navbar from "./Navbar"
import Options from "./Options"


const Menu = () => {

    return (
        <div className="my-container  
        bg-white text-dark-blue shadow-shadow-dark
        dark:bg-background-dark-800 dark:text-light-pink dark:shadow-shadow-light
        flex items-center content-center flex-col
        w-3/12 h-[90vh] p-5
        ">
            <h1 className="font-bold text-[35px] ">Menu</h1>
            <div className="w-full flex-1 flex flex-col justify-center gap-10" >
                {navItems.map((item, index) => {
                    return (
                        <Options key={index} option={item.name} link={item.link} />
                    )
                })}
            </div>
        </div>
    )
}

export default Menu

const navItems = [
    {
        name: 'Home',
        link: '/',
    },
    {
        name: 'Sobre Mim',
        link: 'AboutMe',
        color: 'decoration-amber-600'
    },
    {
        name: 'Habilidades',
        link: 'Habilidades',
        color: 'decoration-orange-600'
    },
    {
        name: 'Realizações',
        link: 'Projects',
        color: 'decoration-lime-600'
    },
    {
        name: 'Certificados',
        link: 'Certificados',
        color: 'decoration-cyan-600'
    },
]