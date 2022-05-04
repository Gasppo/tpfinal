import React from 'react'
import CircleIcon from '@mui/icons-material/Circle';

interface CarouselIndicatorProps {
    currentIndex?: number,
    items?: string[]
}

const CarouselIndicator = (props: CarouselIndicatorProps) => {
    const { currentIndex, items } = props

    return (
        <>
            {items?.map((el, i) => <CircleIcon key={i} className={`${i === currentIndex ? 'opacity-25 ' : 'opacity-100 hover:opacity-25'}  transition-all duration-500`} />)}
        </>
    )
}

export default CarouselIndicator
