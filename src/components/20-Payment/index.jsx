import React from 'react';
import "./index.css";

function Payment(props) {

  return (
    <div className="payment__container">
      {/* <div className="payment__development-message">
        Payment Stage: To be implemented
      </div> */}
      <div className="payment__header">
        <h1 className="payment__header-text">Покупка билета</h1>
        <p className="payment__header-description">
          Укажите вашу электронную почту для получения билета и чека
        </p>
      </div>    

    </div>
  )
}

export default Payment;