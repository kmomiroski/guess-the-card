import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Fade,
  Grow,
  Zoom,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { 
  AutoAwesome, 
  Psychology, 
  Casino, 
  Visibility,
  Refresh 
} from '@mui/icons-material';
import { useGameLogic } from '../hooks/useGameLogic';
import { STEP_CONFIGS } from '../utils/constants';
import { NumberSelector } from './NumberSelector';
import { PileSelector } from './PileSelector';
import { MindReader } from './MindReader';
import { CardReveal } from './CardReveal';

const GameContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #0F0F23 0%, #1A1A2E 50%, #16213E 100%)',
  padding: theme.spacing(4, 0),
  position: 'relative',
  overflow: 'hidden',
  
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 20% 80%, rgba(124, 58, 237, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.1) 0%, transparent 50%)',
    pointerEvents: 'none',
  },
}));

const GameCard = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.9) 0%, rgba(22, 33, 62, 0.9) 100%)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(124, 58, 237, 0.3)',
  borderRadius: theme.spacing(3),
  padding: theme.spacing(4),
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '2px',
    background: 'linear-gradient(90deg, #7C3AED 0%, #F59E0B 100%)',
  },
}));

const MagicButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)',
  borderRadius: theme.spacing(2),
  padding: theme.spacing(1.5, 4),
  fontSize: '1.1rem',
  fontWeight: 600,
  textTransform: 'none',
  boxShadow: '0 8px 25px rgba(124, 58, 237, 0.3)',
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 12px 35px rgba(124, 58, 237, 0.4)',
    background: 'linear-gradient(135deg, #6D28D9 0%, #8B5CF6 100%)',
  },
  
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
    transition: 'left 0.5s',
  },
  
  '&:hover::before': {
    left: '100%',
  },
}));

const StepIndicator = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: theme.spacing(4),
  gap: theme.spacing(1),
}));

const StepDot = styled(Box)<{ active: boolean; completed: boolean }>(({ theme, active, completed }) => ({
  width: 12,
  height: 12,
  borderRadius: '50%',
  background: completed 
    ? 'linear-gradient(135deg, #10B981 0%, #34D399 100%)'
    : active 
    ? 'linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)'
    : 'rgba(255, 255, 255, 0.2)',
  transition: 'all 0.3s ease',
  transform: active ? 'scale(1.2)' : 'scale(1)',
  boxShadow: active ? '0 0 20px rgba(124, 58, 237, 0.5)' : 'none',
}));

export const Game: React.FC = () => {
  const {
    gameState,
    isLoading,
    showAnimation,
    nextStep,
    selectFavoriteNumber,
    selectPile,
    startMindReading,
    resetGame,
    getCurrentCard,
  } = useGameLogic();

  const currentStepConfig = STEP_CONFIGS.find(config => config.step === gameState.currentStep);

  const renderStepContent = () => {
    switch (gameState.currentStep) {
      case 1:
        return (
          <Fade in timeout={800}>
            <Box textAlign="center">
              <Typography variant="h1" gutterBottom className="fade-in">
                {currentStepConfig?.title}
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
                {currentStepConfig?.subtitle}
              </Typography>
              <MagicButton
                variant="contained"
                size="large"
                onClick={nextStep}
                startIcon={<AutoAwesome />}
                className="magic-button"
              >
                {currentStepConfig?.actionText}
              </MagicButton>
            </Box>
          </Fade>
        );

      case 2:
        return (
          <Fade in timeout={800}>
            <Box textAlign="center">
              <Typography variant="h2" gutterBottom className="fade-in">
                {currentStepConfig?.title}
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
                {currentStepConfig?.subtitle}
              </Typography>
              <NumberSelector
                onSelectNumber={selectFavoriteNumber}
                maxNumber={27}
              />
            </Box>
          </Fade>
        );

      case 3:
      case 4:
      case 5:
        return (
          <Fade in timeout={800}>
            <Box textAlign="center">
              <Typography variant="h3" gutterBottom className="fade-in">
                {currentStepConfig?.title}
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, maxWidth: 600, mx: 'auto' }}>
                {currentStepConfig?.subtitle}: <strong>{gameState.favoriteNumber}</strong>
              </Typography>
              <PileSelector
                piles={[
                  { pileNumber: 1, cards: gameState.slot1 },
                  { pileNumber: 2, cards: gameState.slot2 },
                  { pileNumber: 3, cards: gameState.slot3 },
                ]}
                onSelectPile={selectPile}
                currentStep={gameState.currentStep}
              />
            </Box>
          </Fade>
        );

      case 6:
        return (
          <Fade in timeout={800}>
            <Box textAlign="center">
              <Typography variant="h3" gutterBottom className="fade-in">
                {currentStepConfig?.title}
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
                {currentStepConfig?.subtitle}
              </Typography>
              <MindReader
                isLoading={isLoading}
                showAnimation={showAnimation}
                onComplete={nextStep}
                onStart={startMindReading}
              />
            </Box>
          </Fade>
        );

      case 7:
        return (
          <Fade in timeout={800}>
            <Box textAlign="center">
              <Typography variant="h2" gutterBottom className="fade-in">
                {currentStepConfig?.title}
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
                {currentStepConfig?.subtitle}
              </Typography>
              <CardReveal
                cardNumber={getCurrentCard()}
                onPlayAgain={resetGame}
              />
            </Box>
          </Fade>
        );

      default:
        return null;
    }
  };

  return (
    <GameContainer>
      <Container maxWidth="lg">
        {/* Step Indicator */}
        <StepIndicator>
          {STEP_CONFIGS.map((config) => (
            <StepDot
              key={config.step}
              active={gameState.currentStep === config.step}
              completed={gameState.currentStep > config.step}
            />
          ))}
        </StepIndicator>

        {/* Main Game Content */}
        <GameCard elevation={24}>
          <CardContent>
            {renderStepContent()}
          </CardContent>
        </GameCard>

        {/* Reset Button */}
        {gameState.currentStep > 1 && (
          <Box textAlign="center" mt={4}>
            <Button
              variant="outlined"
              onClick={resetGame}
              startIcon={<Refresh />}
              sx={{ color: 'rgba(255, 255, 255, 0.7)', borderColor: 'rgba(255, 255, 255, 0.3)' }}
            >
              Start Over
            </Button>
          </Box>
        )}
      </Container>
    </GameContainer>
  );
};
