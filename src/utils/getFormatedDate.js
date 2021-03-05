const months = {
  "ru-ru": [
    "Января", 
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Октября",
    "Сентября",
    "Ноября",
    "Декабря"
  ],
};

const getFormatedDate = (date, language = "ru-ru") => {
  return `${date.getDay()} ${months[language][date.getMonth()]} ${date.getFullYear()}`;
};

export default getFormatedDate;