import React from "react";
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import Brain from './brain1.png'
const Logo = () => {
    return (
    <div className="ma1 ">
         <Tilt className="w-50">
            <div className="Tilt ">
               <img alt="logo" src={Brain} />
               <p className="f2 b dim bb" style={{fontStyle: 'Italic' , color: 'black'}}>SMART BRAIN</p>
            </div>
        </Tilt>
    </div>
    );
}
export default Logo;