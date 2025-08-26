import { useState, useEffect, useCallback } from 'react';
import type { GameState, GameStep } from '../types';
import { GAME_CONSTANTS } from '../utils/constants';
import { 
  shuffleCards, 
  createInitialDeck, 
  splitDeckIntoPiles, 
  reorderDeck 
} from '../utils/gameLogic';

export const useGameLogic = () => {
  const [gameState, setGameState] = useState<GameState>({
    currentStep: 1,
    favoriteNumber: 0,
    cardsToSplit: GAME_CONSTANTS.TOTAL_CARDS,
    slot1: [],
    slot2: [],
    slot3: [],
    deck: [],
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  // Initialize deck on component mount
  useEffect(() => {
    const initialDeck = createInitialDeck();
    const shuffledDeck = shuffleCards(initialDeck);
    setGameState(prev => ({ ...prev, deck: shuffledDeck }));
  }, []);

  const nextStep = useCallback(() => {
    setGameState(prev => ({ ...prev, currentStep: (prev.currentStep + 1) as GameStep }));
  }, []);

  const selectFavoriteNumber = useCallback((number: number) => {
    const [pile1, pile2, pile3] = splitDeckIntoPiles(gameState.deck);
    
    setGameState(prev => ({
      ...prev,
      currentStep: 3,
      favoriteNumber: number,
      slot1: pile1,
      slot2: pile2,
      slot3: pile3,
    }));
  }, [gameState.deck]);

  const selectPile = useCallback((pileNumber: 1 | 2 | 3) => {
    const newDeck = reorderDeck(
      gameState.slot1,
      gameState.slot2,
      gameState.slot3,
      pileNumber,
      gameState.favoriteNumber,
      gameState.currentStep
    );

    const [newPile1, newPile2, newPile3] = splitDeckIntoPiles(newDeck);

    setGameState(prev => ({
      ...prev,
      currentStep: (prev.currentStep + 1) as GameStep,
      slot1: newPile1,
      slot2: newPile2,
      slot3: newPile3,
      deck: newDeck,
    }));
  }, [gameState.slot1, gameState.slot2, gameState.slot3, gameState.favoriteNumber, gameState.currentStep]);

  const startMindReading = useCallback(() => {
    setIsLoading(true);
    setShowAnimation(true);
    
    setTimeout(() => {
      setIsLoading(false);
    }, GAME_CONSTANTS.ANIMATION_DELAY);
  }, []);

  const resetGame = useCallback(() => {
    const initialDeck = createInitialDeck();
    const shuffledDeck = shuffleCards(initialDeck);
    
    setGameState({
      currentStep: 1,
      favoriteNumber: 0,
      cardsToSplit: GAME_CONSTANTS.TOTAL_CARDS,
      slot1: [],
      slot2: [],
      slot3: [],
      deck: shuffledDeck,
    });
    
    setIsLoading(false);
    setShowAnimation(false);
  }, []);

  const getCurrentCard = useCallback(() => {
    if (gameState.favoriteNumber > 0 && gameState.deck.length > 0) {
      return gameState.deck[gameState.favoriteNumber - 1];
    }
    return null;
  }, [gameState.favoriteNumber, gameState.deck]);

  return {
    gameState,
    isLoading,
    showAnimation,
    nextStep,
    selectFavoriteNumber,
    selectPile,
    startMindReading,
    resetGame,
    getCurrentCard,
  };
};
