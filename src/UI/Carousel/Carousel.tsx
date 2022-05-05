import React, { useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import pic from '../../assets/grupal-oveja.jpg';
import pic2 from '../../assets/logoConFondo.jpg';
import CarouselArrows from './CarouselArrows';
import CarouselIndicator from './CarouselIndicator';
import 'react-awesome-slider/dist/styles.css'

interface CarouselProps {

}

const Carousel = (props: CarouselProps) => {

    const items = [pic, pic2, pic]

    const [currentIndex, setCurrentIndex] = useState(0)

    const handleRight = () => {
        if (currentIndex === items.length - 1) return
        setCurrentIndex(prev => prev + 1)
    }

    const handleLeft = () => {
        if (currentIndex === 0) return
        setCurrentIndex(prev => prev - 1)
    }

    const handleChange = (value: number) => {
        setCurrentIndex(value)
    }

    //useInterval( autoScroll ,5000)

    return (
        <div className="col-span-3 relative" >
            {/* <CarouselArrows onLeft={handleLeft} onRight={handleRight}>
                <div className='flex flex-row absolute top-full left-1/2 transform -translate-y-full -translate-x-1/2 transition-all duration-500 justify-center'>
                    <CarouselIndicator onChange={handleChange} currentIndex={currentIndex} items={items} />
                </div>
                <div className="flex justify-center transition-all" >
                    <img src={items[currentIndex]} alt='pic' className='object-cover' />
                </div>
            </CarouselArrows> */}
            <AwesomeSlider>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </AwesomeSlider>
        </div>
    )
}

export default Carousel
