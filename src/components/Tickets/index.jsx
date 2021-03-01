import React, {useState} from 'react';
import "./index.css";
import Popup from "../Popup";
import MultipleTickets from "../MultipleTickets";

function Tickets(props) {
  const { // TODO: Remove dummy values!!!
    ticketTitle = "Семейный",
    price,
    currency = "₽",
    ordinaryText = "2 взрослых 1 ребёнок",
    importantText = "",
    isInfoButton = false,
    infoPopupText = "",
    isAddButton = false,
    // isDateSelected = false,
    selectedDate = null,
  } = props.data;

  // eslint-disable-next-line
  const [isInfoButtonHovered, setIsInfoButtonHovered] = useState(false);  
  const [numTickets, setNumTickets] = useState(0);

  const getFormatedPrice = (price, currencySign, thousandSeparator = " ", decimalSeparator = ",") => {
    const wholePart = Math.floor(price);
    const decimalPart = price - wholePart;
    const thousandRegExp = /(-?[0-9]+)([0-9]{3})/;

    let priceStr = "";
    let wholeStr = wholePart.toString();

    if (wholePart >= 1000) {
      while(thousandRegExp.test(wholeStr)) {
        wholeStr = wholeStr.replace(thousandRegExp, '$1' + thousandSeparator + '$2');
      }
    }

    priceStr += wholeStr;

    if (decimalPart) {
      priceStr += decimalSeparator + decimalPart.toString();
    }

    priceStr += " " + currencySign;

    return priceStr;
  };


  return (
    <div className="tickets">
      <div className="tickets__header">
        <div className="tickets__title-and-popup-button">
          <div className="tickets__title">{ticketTitle}</div>
          { isInfoButton && infoPopupText.trim().length 
            && <Popup infoPopupText={infoPopupText} /> }
        </div>        
        
        <div className="tickets__price">{getFormatedPrice(price, currency)}</div>
      </div> 
      
      { (ordinaryText.trim().length > 0) && <div className="tickets__text">
        {ordinaryText}
      </div> }

      { (importantText.trim().length > 0) && <div className="tickets__text tickets__text_important">
        {importantText}
      </div> }

      <div className="tickets__handlers">
        { isAddButton && !numTickets &&
            <button 
              className={`tickets__add-button ${selectedDate ? "tickets__add-button_enabled" : ""}`} 
              disabled={!selectedDate}
              onClick={() => setNumTickets(1)}
            >
              Добавить
            </button> 
        }

        { isAddButton && numTickets > 0 &&
            <MultipleTickets 
              numTickets={numTickets}
              setNumTickets={setNumTickets}
            /> 
        }      
      </div>

      { isInfoButton && isInfoButtonHovered 
          && <div className="tickets__info-popup tickets__info-popup_active">{infoPopupText}</div> 
      }

    </div>
  )
}

export default Tickets;