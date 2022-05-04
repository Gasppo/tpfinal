import React, { useState } from 'react';
import pic from '../../assets/grupal-oveja.jpg';
import pic2 from '../../assets/logoConFondo.jpg';
import CarouselArrows from './CarouselArrows';
import CarouselIndicator from './CarouselIndicator';


interface CarouselProps {

}

const Carousel = (props: CarouselProps) => {

    const items = [pic, pic2, pic]

    const [currentIndex, setCurrentIndex] = useState(0)

    return (
        <div className="col-span-3 relative" >
            <CarouselArrows>
                <div className='flex flex-row absolute top-full left-1/2 transform -translate-y-full -translate-x-1/2 transition-all duration-500 justify-center'>
                    <CarouselIndicator currentIndex={currentIndex} items={items} />
                </div>
                <div className="flex justify-center" >
                    <img src={items[currentIndex]} alt='pic' className='object-cover' />
                </div>
            </CarouselArrows>
        </div>
    )
}

export default Carousel
