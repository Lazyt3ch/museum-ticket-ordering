import React, {useState} from 'react';
import "./index.css";
// Reference: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_popup

function Popup(props) {
  // eslint-disable-next-line
  const { infoPopupText } = props;

  const [isInfoPopupVisible, setIsInfoPopupVisible] = useState(false);

  /*
<div class="popup" onclick="myFunction()">Click me to toggle the popup!
  <span class="popuptext" id="myPopup">A Simple Popup!</span>
</div>

  */
  const togglePopup = () => {
    setIsInfoPopupVisible((prev) => !prev);
  };

  return (
    <>
      <div className="tickets__info-popup">
        <div className="tickets__info-popup-container">
          <div class={`tickets__info-popup-text ${isInfoPopupVisible 
              ? "tickets__info-popup-text_show" : ""}`}>
            {infoPopupText}
          </div>         
        </div>

        <div className="tickets__info-button" onClick={togglePopup}></div>
      </div>

   
    </>
  )
}

export default Popup;