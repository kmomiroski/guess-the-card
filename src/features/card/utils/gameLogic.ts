import { GAME_CONSTANTS } from './constants';

/**
 * Shuffles an array of cards using the Fisher-Yates algorithm
 */
export const shuffleCards = (cards: number[]): number[] => {
  const shuffled = [...cards];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

/**
 * Converts a number to base 3 representation for pile selection logic
 */
export const numberToBaseThree = (favoriteNumber: number): number[] => {
  const cardNumbers: number[] = [];
  let pileLimit = 9;
  
  for (let i = 0; i < 3; i++) {
    cardNumbers.push(Math.floor(favoriteNumber / pileLimit));
    favoriteNumber = favoriteNumber - Math.floor(favoriteNumber / pileLimit) * pileLimit;
    pileLimit = pileLimit / 3;
  }
  
  return cardNumbers.reverse();
};

/**
 * Creates initial deck of 27 cards
 */
export const createInitialDeck = (): number[] => {
  return Array.from({ length: GAME_CONSTANTS.TOTAL_CARDS }, (_, i) => i + 1);
};

/**
 * Splits deck into three piles
 */
export const splitDeckIntoPiles = (deck: number[]): [number[], number[], number[]] => {
  const pile1: number[] = [];
  const pile2: number[] = [];
  const pile3: number[] = [];
  
  for (let i = 0; i < deck.length; i++) {
    if (i % 3 === 0) pile1.push(deck[i]);
    else if (i % 3 === 1) pile2.push(deck[i]);
    else pile3.push(deck[i]);
  }
  
  return [pile1, pile2, pile3];
};

/**
 * Reorders deck based on pile selection and favorite number
 */
export const reorderDeck = (
  pile1: number[],
  pile2: number[],
  pile3: number[],
  selectedPile: number,
  favoriteNumber: number,
  currentStep: number
): number[] => {
  const baseThree = numberToBaseThree(favoriteNumber - 1);
  const stateNum = currentStep - 3;
  const index = baseThree[stateNum];
  
  let newOrder: number[];
  
  if (index === 0) {
    if (selectedPile === 1) newOrder = [...pile1, ...pile2, ...pile3];
    else if (selectedPile === 2) newOrder = [...pile2, ...pile1, ...pile3];
    else newOrder = [...pile3, ...pile2, ...pile1];
  } else if (index === 1) {
    if (selectedPile === 1) newOrder = [...pile2, ...pile1, ...pile3];
    else if (selectedPile === 2) newOrder = [...pile1, ...pile2, ...pile3];
    else newOrder = [...pile2, ...pile3, ...pile1];
  } else {
    if (selectedPile === 1) newOrder = [...pile3, ...pile2, ...pile1];
    else if (selectedPile === 2) newOrder = [...pile3, ...pile1, ...pile2];
    else newOrder = [...pile1, ...pile2, ...pile3];
  }
  
  return newOrder;
};
