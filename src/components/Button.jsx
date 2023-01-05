import React from 'react'

const Button = (props) => {
    return (
        <button
            onClick={props.onclick}
            type={props.type}
            className={`bg-cyan-500 font-poppins font-semibold rounded-xl p-1 w-28 border-cyan-600 hover:bg-transparent border-2 delay-150 duration-300 ease-in-out hover:border-violet-700 hover:text-slate-200 ${props.classname} `}
        >
            {props.text}
        </button>
    )
}

export default Button