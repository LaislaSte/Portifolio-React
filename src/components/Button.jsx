import React from 'react'

const Button = (props) => {
    return (
        <button
            onClick={props.onclick}
            type={props.type}
            className={`border-[1px] rounded-[15px] 
            bg-white text-dark-blue border-background-light 
            dark:bg-background-dark-800 dark:text-light-pink  
            p-1 w-28 
            hover:bg-gradient-to-l from-yellow via-pink to-violet 
            delay-300 duration-500 ease-in-out ${props.classname} `}
        >
            <h2>{props.text}</h2>
        </button>
    )
}

export default Button