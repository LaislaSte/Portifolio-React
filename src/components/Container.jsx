import React from 'react'

const Container = ({ children }) => {
    return (
        <div className={`rounded-[20px]
        bg-white text-dark-blue shadow-shadow-dark
        dark:bg-background-dark-800 dark:text-light-pink dark:shadow-shadow-light
        p-5
        `}>
            {children}
        </div>
    )
}

export default Container