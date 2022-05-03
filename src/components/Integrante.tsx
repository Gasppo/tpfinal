import React from 'react'

interface IntegranteProps {
    picture: string
    name?: string
}

const Integrante = (props: IntegranteProps) => {
    const { picture, name } = props
    return (
            <div className="relative mt-8 ml-2 group" >
                <img src={picture} alt='profile' className=' w-auto lg:h-64 md:h-48 shadow-lg' />
                <div className="absolute bottom-0 ml-4 opacity-0 group-hover:opacity-100 transition-all duration-500 text-red-400 font-bold" >
                    <p>{name || 'Placeholder'}</p>
                </div>
            </div>
    )
}

export default Integrante
