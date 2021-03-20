const months = {
  "ru-ru": [
    "января", 
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "октября",
    "сентября",
    "ноября",
    "декабря"
  ],
};

const getFormatedDate = (date, language = "ru-ru") => {
  return `${date.getDate()} ${months[language][date.getMonth()]} ${date.getFullYear()}`;
};

export default getFormatedDate;