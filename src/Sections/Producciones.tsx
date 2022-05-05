import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import '../styles/carousel.css'
import FadeContainer from '../UI/FadeContainer';
import pic from '../assets/grupal-oveja.jpg';
import pic2 from '../assets/logoConFondo.jpg';
import Produccion from '../components/Produccion';
import { lorem } from '../assets/lorem';
interface ProduccionesProps {

}

export type ProduccionType = {
    src: string,
    text: String,
    title: string,
}

const Producciones = (props: ProduccionesProps) => {
    const items: ProduccionType[] = [
        {src:pic, text: 'Texto 1 largo y corto', title: 'Produccion 1'},
        {src:pic2, text: 'Texto 2 largo y corto y bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla ', title: 'Produccion 2'},
        {src:pic, text: lorem, title: 'Produccion 3'},
        ]

    return (
        <FadeContainer threshold={600} timeout={500} >
            <div className="w-full pt-16 pb-16 flex flex-col justify-center items-center bg-black text-white shadow-2xl" >
                <div>
                    <h2 className='text-4xl font-serif mb-2'>Nuestras Producciones</h2>
                </div>
                <div className="w-2/3 bg-white" >
                    <AwesomeSlider>
                        {items.map((el, i) => {
                            console.log(el)
                            return <><Produccion item={el}/></>
                        })}
                    </AwesomeSlider>
                </div>
            </div>
        </FadeContainer>
    )
}

export default Producciones
