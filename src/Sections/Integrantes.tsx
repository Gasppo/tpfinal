import React from 'react'
import emptyProfile from '../assets/blank-profile.jpg'
import Integrante from '../components/Integrante'
import FadeContainer from '../UI/FadeContainer'
interface IntegrantesProps {

}

const Integrantes = (props: IntegrantesProps) => {
    return (
        <FadeContainer threshold={200} timeout={500} >
            <div className="w-full mt-32 mb-16 flex flex-col justify-center items-center" >
                <div>
                    <h2 className='text-4xl font-serif mb-2'>Nuestros integrantes</h2>
                </div>
                <div className="w-2/3 grid grid-cols-4 mb-8" >
                    {/*TODO GET INTEGRANTES FROM API*/}
                    <Integrante picture={emptyProfile} />
                    <Integrante picture={emptyProfile} />
                    <Integrante picture={emptyProfile} />
                    <Integrante picture={emptyProfile} />
                    <Integrante picture={emptyProfile} />
                    <Integrante picture={emptyProfile} />
                    <Integrante picture={emptyProfile} />
                    <Integrante picture={emptyProfile} />
                </div>
            </div>
        </FadeContainer>
    )
}

export default Integrantes
