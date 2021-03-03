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

      <div className="payment__provide-email-and-accept-terms">
        <div className="payment__provide-email">

        </div>

        <div className="payment__accept-terms">
          <Checkbox 
            termsAccepted={termsAccepted}
            setTermsAccepted={setTermsAccepted}
          />

          <div className="payment__accept-terms__text">
            Я соглашаюсь с <a className="payment__accept-terms__link" href="ticket-change-or-return-terms">Правилами обмена и возврата билетов</a> и <a className="payment__accept-terms__link" href="exhibition-visiting-terms">Правилами посещения Выставки</a>
          </div>
        </div>
      </div>    


    </div>
  )
}

export default Payment;