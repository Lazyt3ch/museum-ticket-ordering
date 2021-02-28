import React, {useState} from 'react';
import "./index.css";
// Reference: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_popup

function Popup(props) {
  const { infoPopupText } = props;

  const [isInfoPopupVisible, setIsInfoPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsInfoPopupVisible((prev) => !prev);
  };

  return (
    <>
      <div className="tickets__info-popup">
        <div class={`tickets__info-popup-text ${isInfoPopupVisible 
            ? "tickets__info-popup-text_show" : ""}`}>
          {infoPopupText}
        </div>         

        <div className="tickets__info-button" onClick={togglePopup}></div>
      </div>

   
    </>
  )
}

export default Popup;