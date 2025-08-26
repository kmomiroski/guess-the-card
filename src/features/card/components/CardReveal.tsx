import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Casino, Refresh, AutoAwesome } from '@mui/icons-material';

const RevealContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(4),
}));

const RevealedCard = styled(Box)(({ theme }) => ({
  margin: theme.spacing(4, 0),
  position: 'relative',
}));

const CardImage = styled('img')<{ isRevealed: boolean }>(({ theme, isRevealed }) => ({
  width: 250,
  height: 400,
  borderRadius: theme.spacing(2),
  boxShadow: isRevealed 
    ? '0 20px 60px rgba(124, 58, 237, 0.4), 0 0 40px rgba(124, 58, 237, 0.2)'
    : '0 8px 25px rgba(0, 0, 0, 0.3)',
  transition: 'all 0.8s ease',
  transform: isRevealed ? 'scale(1.05) rotateY(0deg)' : 'scale(0.8) rotateY(180deg)',
  filter: isRevealed ? 'brightness(1.1)' : 'brightness(0.8)',
}));

const MagicEffect = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
  zIndex: 1,
}));

const Sparkle = styled(Box)<{ delay: number; duration: number }>(({ theme, delay, duration }) => ({
  position: 'absolute',
  width: 6,
  height: 6,
  background: 'linear-gradient(135deg, #F59E0B 0%, #FCD34D 100%)',
  borderRadius: '50%',
  animation: `glow ${duration}s ease-in-out infinite`,
  animationDelay: `${delay}s`,
  opacity: 0.8,
}));

const CustomCardsGrid = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(4),
  maxWidth: 800,
  margin: '0 auto',
}));

const CustomCard = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.9) 0%, rgba(22, 33, 62, 0.9) 100%)',
  border: '1px solid rgba(124, 58, 237, 0.3)',
  borderRadius: theme.spacing(2),
  transition: 'all 0.3s ease',
  
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 35px rgba(124, 58, 237, 0.3)',
    borderColor: '#7C3AED',
  },
}));

const CustomCardContent = styled(CardContent)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(2),
}));

const PlayAgainButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)',
  color: '#FFFFFF',
  borderRadius: theme.spacing(2),
  padding: theme.spacing(1.5, 4),
  fontSize: '1.1rem',
  fontWeight: 600,
  textTransform: 'none',
  boxShadow: '0 8px 25px rgba(124, 58, 237, 0.3)',
  transition: 'all 0.3s ease',
  marginTop: theme.spacing(3),
  
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 12px 35px rgba(124, 58, 237, 0.4)',
    background: 'linear-gradient(135deg, #6D28D9 0%, #8B5CF6 100%)',
  },
}));

const customCardsData = [
  { value: "5♥", suit: "hearts" },
  { value: "2♦", suit: "diamonds" },
  { value: "9♦", suit: "diamonds" },
  { value: "10♦", suit: "diamonds" },
  { value: "K♥", suit: "hearts" },
  { value: "Q♣", suit: "clubs" },
  { value: "Q♥", suit: "hearts" },
  { value: "10♠", suit: "spades" },
  { value: "8♠", suit: "spades" },
  { value: "4♦", suit: "diamonds" },
  { value: "6♠", suit: "spades" },
  { value: "J♠", suit: "spades" },
  { value: "4♥", suit: "hearts" },
  { value: "5♦", suit: "diamonds" },
  { value: "10♥", suit: "hearts" },
  { value: "J♣", suit: "clubs" },
  { value: "3♣", suit: "clubs" },
  { value: "7♥", suit: "hearts" },
  { value: "3♥", suit: "hearts" },
  { value: "2♣", suit: "clubs" },
  { value: "6♦", suit: "diamonds" },
  { value: "K♠", suit: "spades" },
  { value: "9♠", suit: "spades" },
  { value: "10♣", suit: "clubs" },
  { value: "2♥", suit: "hearts" },
  { value: "8♥", suit: "hearts" },
  { value: "K♣", suit: "clubs" },
];

interface CardRevealProps {
  cardNumber: number | null;
  onPlayAgain: () => void;
}

export const CardReveal: React.FC<CardRevealProps> = ({ cardNumber, onPlayAgain }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [sparkles, setSparkles] = useState<Array<{ id: number; delay: number; duration: number; x: number; y: number }>>([]);

  useEffect(() => {
    // Trigger card reveal animation
    const timer = setTimeout(() => {
      setIsRevealed(true);
    }, 500);

    // Generate sparkles
    const newSparkles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      delay: Math.random() * 2,
      duration: 1.5 + Math.random() * 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setSparkles(newSparkles);

    return () => clearTimeout(timer);
  }, []);

  if (!cardNumber) {
    return (
      <RevealContainer>
        <Typography variant="h4" color="error">
          Error: Card not found
        </Typography>
      </RevealContainer>
    );
  }

  return (
    <RevealContainer>
      <Typography variant="h3" gutterBottom color="#10B981">
        🎉 Your Card is Revealed!
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
        The magic has successfully read your mind! Here's the card you were thinking of all along.
      </Typography>

      <RevealedCard>
        <MagicEffect>
          {sparkles.map((sparkle) => (
            <Sparkle
              key={sparkle.id}
              delay={sparkle.delay}
              duration={sparkle.duration}
              sx={{
                left: `${sparkle.x}%`,
                top: `${sparkle.y}%`,
              }}
            />
          ))}
        </MagicEffect>
        
        <CardImage
          src={`/cards/${cardNumber}.png`}
          alt={`Card ${cardNumber}`}
          isRevealed={isRevealed}
          className="card-image"
        />
      </RevealedCard>




      <PlayAgainButton
        variant="contained"
        size="large"
        onClick={onPlayAgain}
        startIcon={<Refresh />}
        className="magic-button"
      >
        Play Again ✨
      </PlayAgainButton>

      <Box mt={4}>
        <Typography variant="body2" color="rgba(255, 255, 255, 0.6)">
          🎭 The magic never ends - try again with a different card! 🎭
        </Typography>
      </Box>
    </RevealContainer>
  );
};
