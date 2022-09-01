import React from "react";
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onTap  }) => {
    return (
    <div>
        <p className="f3">
            {'This Magic Brain will recognize  celebrity faces in  picture'}
        </p>
        <div className="center">
            <div className="center form pa4 br3 shadow-5">
                <input className="f4 br3 pa1 w-80 center b--solid" type= 'text' onChange={onInputChange} />
                <button 
                className="bt2 w-25 grow f4 br3 link ph3  pv1 dib white "
                onClick={onTap}
                >Detect</button>
            </div>
        </div>
    </div>
    );
}
export default ImageLinkForm;