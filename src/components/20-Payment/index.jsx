import React, {useRef} from 'react';
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

    if (emailOne !== emailTwo) {
      return;
    }

    if (!validateEmail(emailOne) || !validateEmail(emailTwo)) {
      return;
    }
    
    // console.log("set email");
    setEmail(emailOne);
  }

  return (
    <div className="payment__container">
      <div className="payment__header">
        <div className="payment__header-text">Покупка билета</div>
        <div className="payment__header-description">
          Укажите вашу электронную почту для получения билета и чека
        </div>
      </div>    

      <div className="payment__provide-email">
        <input type="text" 
          ref={emailInputOne} 
          className="payment__email-input" 
          placeholder="E-mail" 
          onBlur={verifyEmails}
        />
        <input type="text" 
          ref={emailInputTwo} 
          className="payment__email-input" 
          placeholder="Повторите e-mail" 
          onBlur={verifyEmails}
        />
        <div className={`payment__email-input__description ${
          email ? "" : "payment__email-input__description_warning"}`}
        
        >
          Внимательно проверьте ваш e-mail адрес. Билеты на него придут сразу после оплаты
        </div>
      </div>

      <div className="payment__accept-terms">
        <Checkbox 
          termsAccepted={termsAccepted}
          setTermsAccepted={setTermsAccepted}
        />
        
        {/* TODO: Replace both dummy links */}
        <div className="payment__accept-terms__text">
          Я соглашаюсь с <a className="payment__accept-terms__link" href="ticket-change-or-return-terms">Правилами обмена и возврата билетов</a> и <a className="payment__accept-terms__link" href="exhibition-visiting-terms">Правилами посещения Выставки</a>
        </div>
      </div>

      <Footer 
        totalText={getFormatedPrice(total, currencySign)}
        buttonText={`Оплатить - ${getFormatedPrice(total, currencySign)}`}
        stageIndex={stageIndex}
        setStageIndex={setStageIndex}      
        nextStageDisabled={!email || !termsAccepted}
      />

      <div className="payment__processor-logos">
        <img src={require('../../assets/images/visa.svg').default} alt='Visa' />      
        <img src={require('../../assets/images/mastercard.svg').default} alt='MasterCard' />
        <img src={require('../../assets/images/apple-pay.svg').default} alt='Apple Pay' />
        <img src={require('../../assets/images/google-pay.svg').default} alt='Google Pay' />
        <img src={require('../../assets/images/tinkoff.svg').default} alt='Тинькофф' />
        <img src={require('../../assets/images/mir.svg').default} alt='МИР' />
      </div>
    </div>
  )
}

export default Payment;