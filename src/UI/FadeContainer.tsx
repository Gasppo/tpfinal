import { Fade, useScrollTrigger } from '@mui/material'
import React from 'react'

interface FadeComponentProps {
    children?: any,
    threshold: number
    timeout: number

}

const FadeContainer = (props: FadeComponentProps) => {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: props.threshold,
    })

    return <Fade appear={true} in={trigger} timeout={props.timeout} >{props.children}</Fade>

}


export default FadeContainer

