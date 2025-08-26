import type { StepConfig, GameConstants } from '../types';

export const GAME_CONSTANTS: GameConstants = {
  TOTAL_CARDS: 27,
  CARDS_PER_PILE: 9,
  MAX_FAVORITE_NUMBER: 27,
  ANIMATION_DELAY: 3000,
};

export const STEP_CONFIGS: StepConfig[] = [
  {
    step: 1,
    title: "🎭 Mind Reading Magic",
    subtitle: "Think of a card from the 27 available. I'll read your mind and reveal it! Choose carefully, and don't tell anyone what you're thinking.",
    actionText: "Let's Begin the Magic ✨"
  },
  {
    step: 2,
    title: "🎯 Pick Your Favorite",
    subtitle: "Select your favorite number between 1 and 27. This is your secret - only you and I will know!",
    actionText: "Continue to Selection"
  },
  {
    step: 3,
    title: "🔮 The Magic Reveals",
    subtitle: "Now the real magic begins! I'll split the cards into 3 piles. Tell me which pile contains your chosen card.",
    actionText: "Reveal My Card"
  },
  {
    step: 4,
    title: "✨ Second Revelation",
    subtitle: "The magic continues! I'm getting closer to reading your mind. Which pile holds your card now?",
    actionText: "Continue the Magic"
  },
  {
    step: 5,
    title: "🌟 Final Revelation",
    subtitle: "Almost there! One more selection and I'll have your card perfectly revealed.",
    actionText: "Complete the Magic"
  },
  {
    step: 6,
    title: "🧠 Reading Your Mind",
    subtitle: "I'm accessing your thoughts... This might take a moment as I navigate through your mind waves.",
    actionText: "Reveal the Result"
  },
  {
    step: 7,
    title: "🎉 Your Card is Revealed!",
    subtitle: "The magic is complete! Here's the card you were thinking of all along.",
    actionText: "Play Again"
  }
];

export const CARD_SUITS = ['♠', '♥', '♦', '♣'];
export const CARD_VALUES = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
