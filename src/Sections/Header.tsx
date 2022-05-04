import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { IconButton } from '@mui/material';
import React from 'react';
import logo from '../assets/logo_oveja.png';
import FadeContainer from '../UI/FadeContainer';

interface HeaderBarProps {
    window?: any
}



const HeaderBar = (props: HeaderBarProps) => {
    const anchorRef = React.useRef<HTMLButtonElement>(null);



    const handleInstagramOpen = () => {
        window.open("https://www.instagram.com/teatroovejanegra/");
    };

    const handleTwitterOpen = () => {
        window.open("https://twitter.com/TeatrOvejanegra");
    };
    const handleFacebookOpen = () => {
        window.open("https://www.facebook.com/Ovejanegragrupoteatral");
    };
    
    const handleYoutubeOpen = () => {
        window.open("https://www.youtube.com/channel/UCU_c7hPVtjkvo7bXSmVvoCw");
    };

    return (
        <FadeContainer threshold={100} timeout={1000}>
        <div className={`fixed flex justify-between items-center w-full h-16 m-0 transition-all duration-200 opacity-0`} >
            <div className="ml-2 text-white" >
                <img src={logo} alt='logo' className='ml-2 w-full h-10'/>
            </div>
            <div className="grow" ></div>
            <div>
                <IconButton
                    ref={anchorRef}
                    id="composition-button"
                    onClick={handleTwitterOpen} >
                    <TwitterIcon className="w-8 h-8 text-slate-600" />
                </IconButton>
                <IconButton
                    ref={anchorRef}
                    id="composition-button"
                    onClick={handleFacebookOpen} >
                    <FacebookIcon className="w-8 h-8 text-slate-600" />
                </IconButton>
                <IconButton
                    ref={anchorRef}
                    id="composition-button"
                    onClick={handleInstagramOpen} >
                    <InstagramIcon className="w-8 h-8 text-slate-600" />
                </IconButton>
                <IconButton
                    ref={anchorRef}
                    id="composition-button"
                    onClick={handleYoutubeOpen} >
                    <YouTubeIcon className="w-8 h-8 text-slate-600" />
                </IconButton>
            </div>
        </div>
        </FadeContainer>
    )
}

export default HeaderBar
