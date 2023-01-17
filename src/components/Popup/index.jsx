import React, {useState} from 'react';
// import {useState} from 'preact-compat';
import "./index.css";
// Reference: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_popup

function Popup(props) {
  const { infoPopupText } = props;

  const [isInfoPopupVisible, setIsInfoPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsInfoPopupVisible((prev) => !prev);
  };

  const handleKeyUp = (e) => {
    if (e.code === "Space") {
      togglePopup();
    }
  }

  return (
    <>
      <div className="tickets__info-popup">
        <div className={`tickets__info-popup-text ${isInfoPopupVisible 
            ? "tickets__info-popup-text_show" : ""}`}
          onClick={togglePopup}    
        >
          {infoPopupText}
        </div>         
        <div className={`tickets__info-popup-arrow ${isInfoPopupVisible 
            ? "tickets__info-popup-arrow_show" : ""}`}
        >
        </div>     
        <div className="tickets__info-button" 
          onClick={togglePopup}
          onKeyUp={handleKeyUp}
          tabIndex={0}
        ></div>
      </div>   
    </>
  )
}

export default Popup;