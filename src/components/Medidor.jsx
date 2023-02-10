import React from 'react'

const Medidor = ({ This, That, tranformX }) => {
    return (
        <div>
            <div className="flex justify-between px-3">
                <p>{This}</p>
                <p>{That}</p>
            </div>
            <div className="h-[2px] bg-dark-blue dark:bg-background-light "></div>

            <div className={`rounded-[15px]
            h-[40px] w-[60px] 
            bg-gradient-to-r from-yellow via-pink to-violet 
            relative bottom-[20px] left-[50%] -mx-[5%] translate-x-[${tranformX}px] `}></div>
        </div>
    )
}

export default Medidor