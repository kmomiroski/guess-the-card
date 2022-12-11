/* eslint-disable no-array-constructor */
const pileCardsOrderCalculate = (favNumber) => {
  let order = new Array();
  // Initial order
  order[1] = "top";
  order[2] = "top";
  order[3] = "top";

  const favNumberStringified = favNumber && favNumber.toString();

  switch (favNumberStringified) {
    case "1":
      order[1] = "top";
      order[2] = "top";
      order[3] = "top";
      break;
    case "2":
      order[1] = "middle";
      order[2] = "top";
      order[3] = "top";
      break;
    case "3":
      order[1] = "bottom";
      order[2] = "top";
      order[3] = "top";
      break;
    case "4":
      order[1] = "top";
      order[2] = "middle";
      order[3] = "top";
      break;
    case "5":
      order[1] = "middle";
      order[2] = "middle";
      order[3] = "top";
      break;
    case "6":
      order[1] = "bottom";
      order[2] = "middle";
      order[3] = "top";
      break;
    case "7":
      order[1] = "top";
      order[2] = "bottom";
      order[3] = "top";
      break;
    case "8":
      order[1] = "middle";
      order[2] = "bottom";
      order[3] = "top";
      break;
    case "9":
      order[1] = "bottom";
      order[2] = "bottom";
      order[3] = "top";
      break;
    case "10":
      order[1] = "top";
      order[2] = "top";
      order[3] = "middle";
      break;
    case "11":
      order[1] = "middle";
      order[2] = "top";
      order[3] = "middle";
      break;
    case "12":
      order[1] = "bottom";
      order[2] = "top";
      order[3] = "middle";
      break;
    case "13":
      order[1] = "top";
      order[2] = "middle";
      order[3] = "middle";
      break;
    case "14":
      order[1] = "middle";
      order[2] = "middle";
      order[3] = "middle";
      break;
    case "15":
      order[1] = "bottom";
      order[2] = "middle";
      order[3] = "middle";
      break;
    case "16":
      order[1] = "top";
      order[2] = "bottom";
      order[3] = "middle";
      break;
    case "17":
      order[1] = "middle";
      order[2] = "bottom";
      order[3] = "middle";
      break;
    case "18":
      order[1] = "bottom";
      order[2] = "bottom";
      order[3] = "middle";
      break;
    case "19":
      order[1] = "top";
      order[2] = "top";
      order[3] = "bottom";
      break;
    case "20":
      order[1] = "middle";
      order[2] = "top";
      order[3] = "bottom";
      break;
    case "21":
      order[1] = "bottom";
      order[2] = "top";
      order[3] = "bottom";
      break;
    case "22":
      order[1] = "top";
      order[2] = "middle";
      order[3] = "bottom";
      break;
    case "23":
      order[1] = "middle";
      order[2] = "middle";
      order[3] = "bottom";
      break;
    case "24":
      order[1] = "bottom";
      order[2] = "middle";
      order[3] = "bottom";
      break;
    case "25":
      order[1] = "top";
      order[2] = "bottom";
      order[3] = "bottom";
      break;
    case "26":
      order[1] = "middle";
      order[2] = "bottom";
      order[3] = "bottom";
      break;
    case "27":
      order[1] = "bottom";
      order[2] = "bottom";
      order[3] = "bottom";
      break;

    default:
      break;
  }

  return order;
};

export default pileCardsOrderCalculate;
