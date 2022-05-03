import React from 'react'
import { lorem } from '../assets/lorem'
import FadeContainer from '../UI/FadeContainer'

interface WhoProps {

}

const Who = (props: WhoProps) => {
    return (
        <FadeContainer threshold={100} timeout={500} >
        <div className="w-full mt-32 flex flex-col justify-center items-center" >
            <div>
                <h2 className='text-4xl font-serif mb-2'>¿Quienes somos?</h2>
            </div>
            <div className="w-2/3" >
                {lorem}
            </div>
        </div>
        </FadeContainer>
    )
}

export default Who
