import React, { useState } from 'react';
import { Box, Grid, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Casino } from '@mui/icons-material';

const NumberGrid = styled(Grid)(({ theme }) => ({
  maxWidth: 600,
  margin: '0 auto',
}));

const NumberButton = styled(Button)<{ selected?: boolean }>(({ theme, selected }) => ({
  minWidth: 60,
  height: 60,
  borderRadius: '50%',
  fontSize: '1.2rem',
  fontWeight: 600,
  background: selected
    ? 'linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)'
    : 'linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, rgba(245, 158, 11, 0.1) 100%)',
  color: selected ? '#FFFFFF' : '#7C3AED',
  border: selected
    ? '2px solid #7C3AED'
    : '2px solid rgba(124, 58, 237, 0.3)',
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  
  '&:hover': {
    transform: 'translateY(-3px) scale(1.05)',
    background: selected
      ? 'linear-gradient(135deg, #6D28D9 0%, #8B5CF6 100%)'
      : 'linear-gradient(135deg, rgba(124, 58, 237, 0.2) 0%, rgba(245, 158, 11, 0.2) 100%)',
    boxShadow: '0 8px 25px rgba(124, 58, 237, 0.3)',
    borderColor: '#7C3AED',
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
  fontSize: '0.9rem',
  fontStyle: 'italic',
}));

interface NumberSelectorProps {
  onSelectNumber: (number: number) => void;
  maxNumber: number;
}

export const NumberSelector: React.FC<NumberSelectorProps> = ({ onSelectNumber, maxNumber }) => {
  const numbers = Array.from({ length: maxNumber }, (_, i) => i + 1);
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);

  const handleNumberSelect = (number: number) => {
    setSelectedNumber(number);
    onSelectNumber(number);
  };

  return (
    <Box>
      <SelectionHint variant="body2">
        🎯 Click on your favorite number to continue the magic
      </SelectionHint>
      
      <NumberGrid container spacing={2} justifyContent="center">
        {numbers.map((number) => (
          <Grid item key={number}>
            <NumberButton
              selected={selectedNumber === number}
              onClick={() => handleNumberSelect(number)}
              className="magic-button"
              startIcon={<Casino />}
            >
              {number}
            </NumberButton>
          </Grid>
        ))}
      </NumberGrid>
      
      <Box textAlign="center" mt={3}>
        <Typography variant="body2" color="rgba(255, 255, 255, 0.5)">
          ✨ Each number holds its own magic ✨
        </Typography>
      </Box>
    </Box>
  );
};
