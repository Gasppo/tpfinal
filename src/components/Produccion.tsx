import React from 'react'
import { lorem } from '../assets/lorem'
import { ProduccionType } from '../Sections/Producciones'

interface ProduccionProps {
    item: ProduccionType
}

const Produccion = ({ item }: ProduccionProps) => {


    return (
        <div className='flex flex-row items-center'>
            <div className='flex-[2]'>
                <img src={item.src} alt='pic' />
            </div>
            <div className='flex-1 mx-10'>
                <h1 className='text-2xl font-serif mb-2'>{item.title}</h1>
                <p>{item.text}</p>
            </div>
        </div>
    )
}

export default Produccion
