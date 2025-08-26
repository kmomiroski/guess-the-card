export interface Card {
  id: number;
  value: string;
  suit?: string;
  imagePath: string;
}

export interface GameState {
  currentStep: GameStep;
  favoriteNumber: number;
  cardsToSplit: number;
  slot1: number[];
  slot2: number[];
  slot3: number[];
  deck: number[];
}

export type GameStep = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export interface StepConfig {
  step: GameStep;
  title: string;
  subtitle: string;
  actionText?: string;
}

export interface PileSelection {
  pileNumber: 1 | 2 | 3;
  cards: number[];
}

export interface GameConstants {
  TOTAL_CARDS: number;
  CARDS_PER_PILE: number;
  MAX_FAVORITE_NUMBER: number;
  ANIMATION_DELAY: number;
}
