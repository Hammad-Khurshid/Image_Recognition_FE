import React from "react";
const FaceRecognition = ({IMAGEURL , Data}) => {
    return (
        <div>

            <div className='center ma f3'>
      <div className='absolute mt2 '></div>
            <img alt="insert url above in search bar" src={IMAGEURL} width='400px' heigh='auto'/>
        </div>        
        </div>
        );
}

export default FaceRecognition;