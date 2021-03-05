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
          <div className="success__info-card__header__checkmark"></div>
          Покупка билетов прошла успешно
        </div>
      </div>

      
    </div>
  )
}

export default Success;