import React from 'react'
import { lorem } from '../assets/lorem'
import FadeContainer from '../UI/FadeContainer'

interface ReconocimientosProps {
    
}

const Reconocimientos = (props: ReconocimientosProps) => {
    return (
        <FadeContainer threshold={1000} timeout={500} >
        <div className="w-full pt-16 pb-16 flex flex-col justify-center items-center bg-black text-white shadow-2xl" >
            <div>
                <h2 className='text-4xl font-serif mb-2'>Nuestros Reconocimientos</h2>
            </div>
            <div className="w-2/3" >
                {lorem}
            </div>
        </div>
        </FadeContainer>
    )
}

export default Reconocimientos
