import React from 'react';
import "./index.css";

function Footer(props) {
  const {
    total, 
    currencySign, 
    buttonText,
    setStageIndex,
  } = props;       

  return (
    <div className="date-and-tickets__footer">
      <div className="date-and-tickets__total">
        Итого: {total} {currencySign}
      </div>

      <button 
        className={`date-and-tickets__go-to-payment ${
          total ? "date-and-tickets__go-to-payment_enabled" : ""}`}
        disabled={!total}
        onClick={() => setStageIndex((prev) => prev + 1)}
      >
        {buttonText}
      </button>
    </div>   
  );
}

export default Footer;