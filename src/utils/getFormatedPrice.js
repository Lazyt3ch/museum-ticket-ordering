const getFormatedPrice = (price, currencySign, thousandSeparator = " ", decimalSeparator = ",") => {
  const wholePart = Math.floor(price);
  const decimalPart = price - wholePart;
  const thousandRegExp = /(-?[0-9]+)([0-9]{3})/;

  let priceStr = "";
  let wholeStr = wholePart.toString();

  if (wholePart >= 1000) {
    while(thousandRegExp.test(wholeStr)) {
      wholeStr = wholeStr.replace(thousandRegExp, '$1' + thousandSeparator + '$2');
    }
  }

  priceStr += wholeStr;

  if (decimalPart) {
    priceStr += decimalSeparator + decimalPart.toString();
  }

  priceStr += " " + currencySign;

  console.log("priceStr =", priceStr);

  return priceStr;
};

export default getFormatedPrice;