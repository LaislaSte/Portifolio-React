import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const Options = ({ option, select, link }) => {

    return (
        <div className='border-[1px] border-light-pink
        bg-white text-dark-blue border- shadow-shadow-dark 
        dark:bg-background-dark-800 dark:text-light-pink dark:shadow-shadow-light
        w-[90%] h-[10%] 
        flex items-center justify-center 
        rounded-r-[15px] 
        font-semibold text-[20px]
        '>
            {/* <Link onClick={handleClick}> */}
            <Link to={link}>
                {option}
            </Link>
        </div>
    )
}

export default Options