import React from 'react';
import "./index.css";

function Success(props) {

  return (
    <div className="success__container">
      <div className="success__nav">
        <div className="success__nav__arrow"></div>
        Вернуться на сайт
      </div>

      <div className="success__info-card">
        <div className="success__info-card__header">
          <div className="success__info-card__header__checkmark">
            <div className="success__info-card__header__checkmark__background-color"></div>
          </div>
          Покупка билетов прошла успешно
        </div>

        <div className="success__info-card__divider"></div>

        <div className="success__info-card__main">
          <p className="success__info-card__main__info-type">
            ID: 000000001
          </p>
          <p className="success__info-card__main__info-details">
            Выставка “Body Worlds”
          </p>
          <p className="success__info-card__main__info-type">
            Дата посещения
          </p>
          <p className="success__info-card__main__info-details">
            25 февраля 2021
          </p>
        </div>        

        <div className="success__info-card__divider"></div>

        <div className="success__info-card__footer">
          <p className="success__info-card__footer__payment-title">
            Оплачено
          </p>
          <div className="success__info-card__footer__payment-details">
            <span className="success__info-card__footer__order-details__payment-total">
              1150 ₽
            </span>
            <span className="success__info-card__footer__order-details__payment-method">
              Картой онлайн
            </span>
          </div>
          <p className="success__info-card__footer__payment-info">
            Электронный билет и чек были отправлены на указанную Вами электронную почту
          </p>         
        </div>     
      </div>

      <div className="success__exhibition-rules">
        <div className="success__exhibition-rules__image"></div>

        <div className="success__exhibition-rules__text">
          <p className="success__exhibition-rules__title">
            требования по посещению выставки
          </p>
          <p className="success__exhibition-rules__details">
            Необходимо использовать индивидуальные средства защиты (маски, перчатки) и соблюдать дистанцию 1,5 &mdash; 2 метра
          </p>          
        </div>
      </div>


      

      
    </div>
  )
}

export default Success;