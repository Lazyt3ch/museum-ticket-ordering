// import React from 'react';
import "./index.css";

import getFormatedPrice from "../../utils/getFormatedPrice";
import getFormatedDate from "../../utils/getFormatedDate";

function Success(props) {
  const {
    total,
    currencySign,
    selectedDate,
  } = props;

  const goBack = () => {
    /* TODO: Implement go-back function */
    alert("На этом работа приложения завершена.\nПереход на сайт не реализован.");
  };

  const handleKeyDown = (e) => { // Must be key down, not key up (otherwise page scrolls down)
    if (e.keyCode === 32 || e.keyCode === 13) { // "Space" or "Enter"
      e.preventDefault();
      goBack();
    }
  }  

  return (
    <div className="success">
      <div className="success-nav">        
        <div className="success-nav__arrow-background-image"
          onClick={goBack}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="success-nav__arrow-background-color"></div>
        </div>

        <div className="success-nav__text">
          Вернуться на сайт
        </div>
      </div>

      <div className="success-card">
        <div className="success-card__header">
          <div className="success-card__checkmark-background-image">
            <div className="success-card__checkmark-background-color"></div>
          </div>
          <p>
            Покупка билетов прошла успешно
          </p>
        </div>

        <div className="success-card__divider"></div>
        <hr className="success-card__hidden-divider" />        

        <div className="success-card__main">
          <p className="success-card__info-type">
            ID: 000000001
          </p>
          <p className="success-card__info-details">
            Выставка “Body Worlds”
          </p>
          <p className="success-card__info-type">
            Дата посещения
          </p>
          <p className="success-card__info-details">
            {getFormatedDate(selectedDate)}
          </p>
        </div>        

        <div className="success-card__divider"></div>
        <hr className="success-card__hidden-divider" />

        <div className="success-card__footer">
          <p className="success-card__payment-title">
            Оплачено
          </p>
          <div className="success-card__payment-details">
            <span className="success-card__payment-total">
              {getFormatedPrice(total, currencySign)}
            </span>
            <span className="success-card__payment-method">
              Картой онлайн
            </span>
          </div>
          <p className="success-card__payment-info">
            Электронный билет и чек были отправлены на указанную Вами электронную почту
          </p>         
        </div>     
      </div>

      <div className="success-rules">
        <div className="success-rules__mask-image"></div>

        <div className="success-rules__text">
          <p className="success-rules__title">
            требования по посещению выставки
          </p>
          <p className="success-rules__details">
            Необходимо использовать индивидуальные средства защиты (маски, перчатки) и соблюдать дистанцию 1,5 &mdash; 2 метра
          </p>          
        </div>
      </div>
      
      <div className="success-contact">
        <p className="success-contact__title">
          Отдел технической поддержки по электронным билетам
        </p>

        <div className="success-contact__details">
          <span className="success-contact__phone-icon"></span>
          <span className="success-contact__text">
            +7(499)643-82-38
          </span>          
          <span className="success-contact__mail-icon"></span>
          <span className="success-contact__text">
            info@bodyworlds.moscow          
          </span>          
        </div>         
      </div>
    </div>
  )
}

export default Success;