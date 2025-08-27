import React, { useState, useEffect } from 'react';
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
  LinearProgress,
  Chip,
  IconButton,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { 
  AutoAwesome, 
  Psychology, 
  Casino, 
  Visibility,
  Refresh,
  Timer,
  TrendingUp,
  Info,
  Keyboard,
  EmojiEvents,
  Settings
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
  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5), 0 0 100px rgba(124, 58, 237, 0.1)',
  transition: 'all 0.4s ease',
  
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 35px 70px rgba(0, 0, 0, 0.6), 0 0 120px rgba(124, 58, 237, 0.2)',
  },
  
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '3px',
    background: 'linear-gradient(90deg, #7C3AED 0%, #F59E0B 100%)',
    boxShadow: '0 0 20px rgba(124, 58, 237, 0.5)',
  },
}));

const MagicButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)',
  borderRadius: theme.spacing(3),
  padding: theme.spacing(2, 6),
  fontSize: '1.2rem',
  fontWeight: 600,
  textTransform: 'none',
  boxShadow: '0 8px 25px rgba(124, 58, 237, 0.3), 0 0 20px rgba(124, 58, 237, 0.2)',
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  border: '2px solid rgba(124, 58, 237, 0.3)',
  
  '&:hover': {
    transform: 'translateY(-3px) scale(1.02)',
    boxShadow: '0 15px 40px rgba(124, 58, 237, 0.4), 0 0 30px rgba(124, 58, 237, 0.3)',
    background: 'linear-gradient(135deg, #6D28D9 0%, #8B5CF6 100%)',
    borderColor: '#7C3AED',
  },
  
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
    transition: 'left 0.6s ease',
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

const GameStats = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(3),
  flexWrap: 'wrap',
}));

const StatChip = styled(Chip)(({ theme }) => ({
  background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, rgba(245, 158, 11, 0.15) 100%)',
  border: '1px solid rgba(124, 58, 237, 0.4)',
  color: '#FFFFFF',
  fontWeight: 600,
  backdropFilter: 'blur(10px)',
  transition: 'all 0.3s ease',
  
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(124, 58, 237, 0.3)',
    borderColor: '#7C3AED',
  },
  
  '& .MuiChip-icon': {
    color: '#7C3AED',
  },
}));

const ProgressContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  padding: theme.spacing(3),
  background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.9) 0%, rgba(22, 33, 62, 0.9) 100%)',
  borderRadius: theme.spacing(3),
  border: '1px solid rgba(124, 58, 237, 0.3)',
  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  position: 'relative',
  overflow: 'hidden',
  
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: 'linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.5), transparent)',
  },
}));

const EnhancedStartOverButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(135deg, #EF4444 0%, #F87171 100%)',
  color: '#FFFFFF',
  borderRadius: theme.spacing(2.5),
  padding: theme.spacing(2, 5),
  fontSize: '1.1rem',
  fontWeight: 600,
  textTransform: 'none',
  boxShadow: '0 8px 25px rgba(239, 68, 68, 0.3), 0 0 20px rgba(239, 68, 68, 0.2)',
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  border: '2px solid rgba(239, 68, 68, 0.3)',
  
  '&:hover': {
    transform: 'translateY(-3px) scale(1.02)',
    boxShadow: '0 15px 40px rgba(239, 68, 68, 0.4), 0 0 30px rgba(239, 68, 68, 0.3)',
    background: 'linear-gradient(135deg, #DC2626 0%, #EF4444 100%)',
    borderColor: '#EF4444',
  },
  
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
    transition: 'left 0.6s ease',
  },
  
  '&:hover::before': {
    left: '100%',
  },
}));

const FloatingActionButton = styled(IconButton)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(3),
  right: theme.spacing(3),
  background: 'linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)',
  color: '#FFFFFF',
  width: 60,
  height: 60,
  boxShadow: '0 8px 25px rgba(124, 58, 237, 0.3), 0 0 20px rgba(124, 58, 237, 0.2)',
  transition: 'all 0.3s ease',
  border: '2px solid rgba(255, 255, 255, 0.1)',
  
  '&:hover': {
    transform: 'translateY(-3px) scale(1.1)',
    boxShadow: '0 15px 40px rgba(124, 58, 237, 0.4), 0 0 30px rgba(124, 58, 237, 0.3)',
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
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
  
  // PRO Features: Game Statistics
  const [gameStats, setGameStats] = useState({
    startTime: Date.now(),
    moves: 0,
    totalGames: 0,
    bestTime: localStorage.getItem('bestTime') ? parseInt(localStorage.getItem('bestTime')!) : null,
  });
  
  const [showStats, setShowStats] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  
  // Track game progress
  useEffect(() => {
    if (gameState.currentStep > 1) {
      setGameStats(prev => ({ ...prev, moves: prev.moves + 1 }));
      
             // Track achievements based on performance
       if (gameState.currentStep === 7) {
         const gameTime = Date.now() - gameStats.startTime;
         if (gameTime < 30000) { // Under 30 seconds
           showAchievement('Speed Demon', 'Completed the game in under 30 seconds!', '⚡');
         }
         if (gameStats.moves <= 6) { // Perfect game
           showAchievement('Perfect Magic', 'Completed with minimal moves!', '✨');
         }
         if (gameStats.totalGames > 0) { // Not first game
           showAchievement('Magic Master', 'You\'re getting good at this!', '🎭');
         }
       }
    }
  }, [gameState.currentStep]);
  
  // Track game completion
  useEffect(() => {
    if (gameState.currentStep === 7) {
      const gameTime = Date.now() - gameStats.startTime;
      const bestTime = gameStats.bestTime;
      
      if (!bestTime || gameTime < bestTime) {
        localStorage.setItem('bestTime', gameTime.toString());
        setGameStats(prev => ({ ...prev, bestTime: gameTime, totalGames: prev.totalGames + 1 }));
      } else {
        setGameStats(prev => ({ ...prev, totalGames: prev.totalGames + 1 }));
      }
    }
  }, [gameState.currentStep, gameStats.startTime, gameStats.bestTime]);
  
  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Only handle key presses when not typing in input fields
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        return;
      }
      
      if (event.key === 'r' || event.key === 'R') {
        if (gameState.currentStep > 1) {
          event.preventDefault();
          resetGame();
        }
      }
      if (event.key === 'h' || event.key === 'H') {
        event.preventDefault();
        setShowHelp(true);
      }
      if (event.key === 's' || event.key === 'S') {
        event.preventDefault();
        setShowStats(true);
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameState.currentStep, resetGame]);
  
  const formatTime = (ms: number) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    return `${minutes}:${(seconds % 60).toString().padStart(2, '0')}`;
  };
  
  const getProgressPercentage = () => {
    return ((gameState.currentStep - 1) / 6) * 100;
  };
  
  const showAchievement = (title: string, description: string, icon: string) => {
    // Achievement will be shown in the UI instead of toast
    console.log(`${icon} ${title}: ${description}`);
  };

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
        {/* Enhanced Progress Bar */}
        <ProgressContainer>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
            <Typography variant="h6" color="rgba(255, 255, 255, 0.9)" sx={{ fontWeight: 600 }}>
              Step {gameState.currentStep} of 7
            </Typography>
            <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
              {Math.round(getProgressPercentage())}% Complete
            </Typography>
          </Box>
          
          {/* Step Indicator Dots */}
          <Box display="flex" justifyContent="center" gap={1} mb={2}>
            {Array.from({ length: 7 }, (_, i) => (
              <StepDot
                key={i}
                active={gameState.currentStep === i + 1}
                completed={gameState.currentStep > i + 1}
              />
            ))}
          </Box>
          
          <LinearProgress
            variant="determinate"
            value={getProgressPercentage()}
            sx={{
              height: 10,
              borderRadius: 5,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              '& .MuiLinearProgress-bar': {
                background: 'linear-gradient(90deg, #7C3AED 0%, #F59E0B 100%)',
                borderRadius: 5,
                boxShadow: '0 0 20px rgba(124, 58, 237, 0.5)',
              },
            }}
          />
        </ProgressContainer>

        {/* Start Over Button - Moved Higher */}
        {gameState.currentStep > 1 && (
          <Box textAlign="center" mb={3}>
            <EnhancedStartOverButton
              variant="outlined"
              onClick={resetGame}
              startIcon={<Refresh />}
              sx={{ color: 'rgba(255, 255, 255, 0.7)', borderColor: 'rgba(255, 255, 255, 0.3)' }}
            >
              Start Over
            </EnhancedStartOverButton>
          </Box>
        )}

        {/* Enhanced Game Statistics */}
        {gameState.currentStep > 1 && (
          <Box>
            <GameStats>
              <StatChip
                icon={<Timer />}
                label={`Time: ${formatTime(Date.now() - gameStats.startTime)}`}
                variant="outlined"
              />
              <StatChip
                icon={<TrendingUp />}
                label={`Moves: ${gameStats.moves}`}
                variant="outlined"
              />
              {gameStats.bestTime && (
                <StatChip
                  icon={<EmojiEvents />}
                  label={`Best: ${formatTime(gameStats.bestTime)}`}
                  variant="outlined"
                />
              )}
            </GameStats>
            
            {/* Achievement Display */}
            {gameState.currentStep === 7 && (
              <Box 
                sx={{ 
                  mt: 2, 
                  p: 2, 
                  background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(252, 211, 77, 0.1) 100%)',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                  borderRadius: 2,
                  textAlign: 'center',
                  animation: 'glow 2s ease-in-out infinite'
                }}
              >
                <Typography variant="h6" color="#F59E0B" sx={{ mb: 1, fontWeight: 600 }}>
                  🏆 Achievement Unlocked! 🏆
                </Typography>
                <Typography variant="body2" color="rgba(255, 255, 255, 0.8)">
                  {gameStats.moves <= 6 ? '✨ Perfect Magic: Completed with minimal moves!' : 
                   '🎭 Magic Master: You\'re getting good at this!'}
                </Typography>
              </Box>
            )}
          </Box>
        )}

        {/* Main Game Content */}
        <GameCard elevation={24}>
          <CardContent>
            {renderStepContent()}
          </CardContent>
        </GameCard>
      </Container>

      {/* Enhanced Floating Action Buttons */}
      <FloatingActionButton
        onClick={() => setShowHelp(true)}
        sx={{ 
          bottom: 120,
          mb: 1,
          background: 'linear-gradient(135deg, #F59E0B 0%, #FCD34D 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #D97706 0%, #F59E0B 100%)',
          }
        }}
      >
        <Tooltip title="Help (H)" placement="left">
          <Info />
        </Tooltip>
      </FloatingActionButton>
      
      <FloatingActionButton
        onClick={() => setShowStats(true)}
        sx={{ 
          bottom: 56,
          background: 'linear-gradient(135deg, #10B981 0%, #34D399 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #059669 0%, #10B981 100%)',
          }
        }}
      >
        <Tooltip title="Stats (S)" placement="left">
          <TrendingUp />
        </Tooltip>
      </FloatingActionButton>
      
      {/* Keyboard Shortcuts Hint */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 20,
          left: 20,
          background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.9) 0%, rgba(22, 33, 62, 0.9) 100%)',
          border: '1px solid rgba(124, 58, 237, 0.3)',
          borderRadius: 2,
          padding: 1.5,
          backdropFilter: 'blur(10px)',
          zIndex: 1000,
        }}
      >
        <Typography variant="caption" color="rgba(255, 255, 255, 0.7)" sx={{ display: 'block' }}>
          ⌨️ <strong>H</strong>elp | <strong>S</strong>tats | <strong>R</strong>eset
        </Typography>
      </Box>



      {/* Help Dialog */}
      <Dialog
        open={showHelp}
        onClose={() => setShowHelp(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.95) 0%, rgba(22, 33, 62, 0.95) 100%)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(124, 58, 237, 0.3)',
            color: '#FFFFFF',
          },
        }}
      >
        <DialogTitle sx={{ textAlign: 'center', color: '#7C3AED' }}>
          🎭 Game Help & Controls
        </DialogTitle>
        <DialogContent>
          <Box mb={2}>
            <Typography variant="h6" gutterBottom color="#F59E0B">
              🎯 How to Play:
            </Typography>
            <Typography variant="body2" paragraph>
              1. Think of your favorite number (1-27)
              2. Follow the magic through 3 pile selections
              3. Watch as your card is revealed!
            </Typography>
          </Box>
          <Box mb={2}>
            <Typography variant="h6" gutterBottom color="#7C3AED">
              ⌨️ Keyboard Shortcuts:
            </Typography>
            <Typography variant="body2" paragraph>
              <strong>R</strong> - Start Over (when available)<br/>
              <strong>H</strong> - Show Help<br/>
              <strong>S</strong> - Show Statistics
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom color="#10B981">
              🎨 Tips:
            </Typography>
            <Typography variant="body2">
              • Trust your intuition when selecting piles<br/>
              • The magic works best when you're relaxed<br/>
              • Try to beat your best time!
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowHelp(false)} sx={{ color: '#7C3AED' }}>
            Got it!
          </Button>
        </DialogActions>
      </Dialog>

      {/* Stats Dialog */}
      <Dialog
        open={showStats}
        onClose={() => setShowStats(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.95) 0%, rgba(22, 33, 62, 0.95) 100%)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(124, 58, 237, 0.3)',
            color: '#FFFFFF',
          },
        }}
      >
        <DialogTitle sx={{ textAlign: 'center', color: '#7C3AED' }}>
          📊 Game Statistics
        </DialogTitle>
        <DialogContent>
          <Box display="flex" flexDirection="column" gap={2}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="body1">Total Games Played:</Typography>
              <Chip label={gameStats.totalGames} color="primary" />
            </Box>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="body1">Current Game Time:</Typography>
              <Chip label={formatTime(Date.now() - gameStats.startTime)} color="secondary" />
            </Box>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="body1">Current Game Moves:</Typography>
              <Chip label={gameStats.moves} color="info" />
            </Box>
            {gameStats.bestTime && (
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="body1">Best Time:</Typography>
                <Chip 
                  label={formatTime(gameStats.bestTime)} 
                  color="success" 
                  icon={<EmojiEvents />}
                />
              </Box>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowStats(false)} sx={{ color: '#7C3AED' }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>


    </GameContainer>
  );
};
