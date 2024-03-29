import React from 'react';
import "./index.css";

function Footer(props) {
  const {
    // total, 
    // currencySign, 
    totalText,
    buttonText,
    setStageIndex,
    nextStageDisabled,
  } = props;       

  return (
    <div className="date-and-tickets__footer">
      <div className="date-and-tickets__total">
        Итого: {totalText}
      </div>

      <button 
        className={`date-and-tickets__next-stage ${
          nextStageDisabled ? "" : "date-and-tickets__next-stage_enabled"}`}
        disabled={nextStageDisabled}
        onClick={() => setStageIndex((prev) => prev + 1)}
        tabIndex={0}
      >
        {buttonText}
      </button>
    </div>   
  );
}

export default Footer;