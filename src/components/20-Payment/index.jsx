import React from 'react';
import "./index.css";
import Checkbox from "../Checkbox";

function Payment(props) {
  const {
    termsAccepted,
    setTermsAccepted,
  } = props;

  return (
    <div className="payment__container">
      {/* <div className="payment__development-message">
        Payment Stage: To be implemented
      </div> */}

      <div className="payment__header">
        <div className="payment__header-text">Покупка билета</div>
        <div className="payment__header-description">
          Укажите вашу электронную почту для получения билета и чека
        </div>
      </div>    

      <div className="payment__email-and-confirm">
        <div className="payment__email">

        </div>

        <div className="payment__confirm">
          <Checkbox 
            termsAccepted={termsAccepted}
            setTermsAccepted={setTermsAccepted}
          />
        </div>
      </div>    


    </div>
  )
}

export default Payment;