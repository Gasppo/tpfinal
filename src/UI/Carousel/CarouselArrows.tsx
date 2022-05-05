import React from 'react'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

interface CarouselArrowsProps {
    children: any,
    onRight: () => void,
    onLeft: () => void

}


const CarouselArrows = (props: CarouselArrowsProps) => {

    const {children, onLeft, onRight} = props

    return (
        <>
            <div className='opacity-25 text-red-600 absolute top-1/2  transform -translate-y-1/2 hover:opacity-100 transition-all duration-500' onClick={onLeft}>
                <ArrowLeftIcon style={{ fontSize: '128px' }} />
            </div>
            {children}
            <div className='opacity-25 text-red-600 absolute top-1/2  left-full transform -translate-y-1/2  -translate-x-full hover:opacity-100 transition-all duration-500' onClick={onRight}>
                <ArrowRightIcon style={{ fontSize: '128px' }} />
            </div>
        </>
    )
}

export default CarouselArrows
