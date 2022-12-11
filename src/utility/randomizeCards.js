/**
 * Utility function that helps you to shuffle the cards
 * @param {*} cards 
 * @returns shuffle cards
 */
const randomizeCards = (cards) => {
  for (let i = cards?.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
  }
  return cards;
};

export default randomizeCards;
