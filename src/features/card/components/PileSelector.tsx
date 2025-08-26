import React from 'react';
import { Box, Grid, Button, Typography, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Visibility, AutoAwesome } from '@mui/icons-material';
import type { PileSelection } from '../types';

const PileContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const PileCard = styled(Card)<{ isSelected?: boolean }>(({ theme, isSelected }) => ({
  background: isSelected
    ? 'linear-gradient(135deg, rgba(124, 58, 237, 0.2) 0%, rgba(245, 158, 11, 0.2) 100%)'
    : 'linear-gradient(135deg, rgba(26, 26, 46, 0.8) 0%, rgba(22, 33, 62, 0.8) 100%)',
  border: isSelected
    ? '2px solid #7C3AED'
    : '1px solid rgba(124, 58, 237, 0.2)',
  borderRadius: theme.spacing(2),
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 35px rgba(124, 58, 237, 0.2)',
    borderColor: '#7C3AED',
  },
  
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '3px',
    background: isSelected
      ? 'linear-gradient(90deg, #7C3AED 0%, #F59E0B 100%)'
      : 'transparent',
    transition: 'all 0.3s ease',
  },
}));

const PileHeader = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(2),
  fontSize: '1.3rem',
  fontWeight: 600,
  color: '#FFFFFF',
}));

const CardGrid = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(1),
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
}));

const CardImage = styled('img')(({ theme }) => ({
  width: 60,
  height: 80,
  borderRadius: theme.spacing(1),
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  
  '&:hover': {
    transform: 'translateY(-3px) scale(1.05)',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)',
  },
}));

const SelectButton = styled(Button)<{ isSelected?: boolean }>(({ theme, isSelected }) => ({
  background: isSelected
    ? 'linear-gradient(135deg, #10B981 0%, #34D399 100%)'
    : 'linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)',
  color: '#FFFFFF',
  borderRadius: theme.spacing(2),
  padding: theme.spacing(1, 3),
  fontWeight: 600,
  textTransform: 'none',
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(124, 58, 237, 0.4)',
    background: isSelected
      ? 'linear-gradient(135deg, #059669 0%, #10B981 100%)'
      : 'linear-gradient(135deg, #6D28D9 0%, #8B5CF6 100%)',
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

const SelectionHint = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(3),
  color: 'rgba(255, 255, 255, 0.7)',
  fontSize: '1rem',
  fontStyle: 'italic',
}));

interface PileSelectorProps {
  piles: PileSelection[];
  onSelectPile: (pileNumber: 1 | 2 | 3) => void;
  currentStep: number;
}

export const PileSelector: React.FC<PileSelectorProps> = ({ piles, onSelectPile, currentStep }) => {
  const [selectedPile, setSelectedPile] = React.useState<number | null>(null);

  const handlePileSelect = (pileNumber: 1 | 2 | 3) => {
    setSelectedPile(pileNumber);
    onSelectPile(pileNumber);
  };

  const getStepText = () => {
    switch (currentStep) {
      case 3:
        return "🔮 First pile selection - which pile contains your card?";
      case 4:
        return "✨ Second selection - getting closer to the truth!";
      case 5:
        return "🌟 Final selection - almost there!";
      default:
        return "Select the pile containing your card";
    }
  };

  return (
    <PileContainer>
      <SelectionHint variant="body1">
        {getStepText()}
      </SelectionHint>
      
      <Grid container spacing={3} justifyContent="center">
        {piles.map((pile) => (
          <Grid item xs={12} md={4} key={pile.pileNumber}>
            <PileCard isSelected={selectedPile === pile.pileNumber}>
              <CardContent>
                <PileHeader variant="h5">
                  Pile {pile.pileNumber}
                </PileHeader>
                
                <CardGrid>
                  {pile.cards.map((cardNumber) => (
                    <CardImage
                      key={cardNumber}
                      src={`/cards/${cardNumber}.png`}
                      alt={`Card ${cardNumber}`}
                      className="card-image"
                    />
                  ))}
                </CardGrid>
                
                <Box textAlign="center">
                  <SelectButton
                    variant="contained"
                    onClick={() => handlePileSelect(pile.pileNumber)}
                    isSelected={selectedPile === pile.pileNumber}
                    startIcon={selectedPile === pile.pileNumber ? <AutoAwesome /> : <Visibility />}
                    className="magic-button"
                  >
                    {selectedPile === pile.pileNumber ? 'Selected!' : 'Select This Pile'}
                  </SelectButton>
                </Box>
              </CardContent>
            </PileCard>
          </Grid>
        ))}
      </Grid>
      
      <Box textAlign="center" mt={4}>
        <Typography variant="body2" color="rgba(255, 255, 255, 0.5)">
          🎭 Trust your intuition - the magic knows where your card is! 🎭
        </Typography>
      </Box>
    </PileContainer>
  );
};
