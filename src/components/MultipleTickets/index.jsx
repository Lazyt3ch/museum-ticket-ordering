import React from 'react';
import "./index.css";

function MultipleTickets(props) {
  const {
    numTickets,
    setNumTickets,
  } = props;


  const removeTickets = () => setNumTickets(0);

  const handleRemoveKeyUp = (e) => {
    if (e.code === "Space") {
      removeTickets();
    }
  };


  const decrementTickets = () => setNumTickets((prev) => prev - 1);

  const handleDecrementKeyUp = (e) => {
    if (e.code === "Space") {
      decrementTickets();
    }
  };


  const incrementTickets = () => setNumTickets((prev) => prev + 1);

  const handleIncrementKeyUp = (e) => {
    if (e.code === "Space") {
      incrementTickets();      
    }
  }; 

  return (
    <div className="multiple-tickets">
      <div className="multiple-tickets__remove-wrapper">
        <button 
          className={`multiple-tickets__remove`} 
          disabled={!numTickets}
          onClick={removeTickets}
          onKeyUp={handleRemoveKeyUp}
        >
          Удалить
        </button> 
      </div>

      <div className="multiple-tickets__increment-decrement-wrapper">
        <button 
          className={`multiple-tickets__decrement`} 
          disabled={numTickets < 1}
          onClick={decrementTickets}
          onKeyUp={handleDecrementKeyUp}
        >
          &ndash;
        </button>      

        <div className="multiple-tickets__subtotal">
          {numTickets}
        </div>

        <button 
          className={`multiple-tickets__increment`} 
          onClick={incrementTickets}
          onKeyUp={handleIncrementKeyUp}
        >
          +
        </button> 
      </div>      


    </div>
  )
}

export default MultipleTickets;