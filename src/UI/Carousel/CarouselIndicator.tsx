import React from 'react'
import CircleIcon from '@mui/icons-material/Circle';

interface CarouselIndicatorProps {
    currentIndex?: number,
    items?: string[],
    onChange: (value: number) => void
}

const CarouselIndicator = (props: CarouselIndicatorProps) => {
    const { currentIndex, items, onChange } = props

    return (
        <>
            {items?.map((el, i) => <div onClick={() => onChange(i)} key={i} ><CircleIcon  className={`${i === currentIndex ? 'opacity-25 ' : 'opacity-100 hover:opacity-25'}  transition-all duration-500`} /></div>)}
        </>
    )
}

export default CarouselIndicator
