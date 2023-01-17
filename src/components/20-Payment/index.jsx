import React, {useRef} from 'react';
// import {useRef} from 'preact-compat';
import "./index.css";
import Checkbox from "../Checkbox";
import Footer from "../Footer";
import getFormatedPrice from "../../utils/getFormatedPrice";
import validateEmail from "../../utils/validateEmail";

function Payment(props) {
  const {
    termsAccepted,
    setTermsAccepted,
    total,
    currencySign,
    stageIndex,
    setStageIndex,
    email,
    setEmail,
  } = props;

  const emailInputOne = useRef(null);
  const emailInputTwo = useRef(null);

  const verifyEmails = () => {
    // console.log("verify emails");
    const emailOne = emailInputOne.current.value.trim();
    const emailTwo = emailInputTwo.current.value.trim();
    // console.log("emailOne, emailTwo =", emailOne, emailTwo);

    if (emailOne !== emailTwo || !validateEmail(emailOne) || !validateEmail(emailTwo)) {
      setEmail(null);
      return;
    }
    
    // console.log("set email");
    setEmail(emailOne);
  }

  return (
    <div className="payment">
      <div className="payment-header">
        <div className="payment-title">Покупка билета</div>
        <div className="payment-description">
          Укажите вашу электронную почту для получения билета и чека
        </div>
      </div>    

      <div className="payment-email">
        <input type="text" 
          ref={emailInputOne} 
          className="payment-email__input" 
          placeholder="E-mail" 
          onBlur={verifyEmails}
        />
        <input type="text" 
          ref={emailInputTwo} 
          className="payment-email__input" 
          placeholder="Повторите e-mail" 
          onBlur={verifyEmails}
        />
        <div className={`payment-email__description ${
          email ? "" : "payment-email__warning"}`}
        
        >
          Внимательно проверьте ваш e-mail адрес. Билеты на него придут сразу после оплаты
        </div>
      </div>

      <div className="payment-terms">
        <Checkbox 
          termsAccepted={termsAccepted}
          setTermsAccepted={setTermsAccepted}
        />
        
        {/* TODO: Replace both dummy links */}
        <div className="payment-terms__acceptance">
          Я соглашаюсь с <a className="payment-terms__link" href="ticket-change-or-refund" tabIndex={0}>Правилами обмена и возврата билетов</a> и <a className="payment-terms__link" href="exhibition-visiting" tabIndex={0}>Правилами посещения Выставки</a>
        </div>
      </div>

      <Footer 
        totalText={getFormatedPrice(total, currencySign)}
        buttonText={`Оплатить - ${getFormatedPrice(total, currencySign)}`}
        stageIndex={stageIndex}
        setStageIndex={setStageIndex}      
        nextStageDisabled={!email || !termsAccepted}
      />

      <div className="payment-processors">
        <img src={require('../../assets/images/visa.png').default} alt='Visa' />      
        <img src={require('../../assets/images/mastercard.png').default} alt='Mastercard' />
        <img src={require('../../assets/images/apple-pay.png').default} alt='Apple Pay' />
        <img src={require('../../assets/images/google-pay.png').default} alt='Google Pay' />
        <img src={require('../../assets/images/tinkoff.png').default} alt='Тинькофф' />
        <img src={require('../../assets/images/mir.png').default} alt='Мир' />
      </div>
    </div>
  )
}

export default Payment;