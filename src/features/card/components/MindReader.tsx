import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Psychology, AutoAwesome } from '@mui/icons-material';

const MindReaderContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(4),
}));

const MindReadingAnimation = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 200,
  position: 'relative',
}));

const BrainIcon = styled(Psychology)(({ theme }) => ({
  fontSize: '4rem',
  color: '#7C3AED',
  marginBottom: theme.spacing(2),
  animation: 'mindReading 2s ease-in-out infinite',
}));

const MagicParticles = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
  overflow: 'hidden',
}));

const Particle = styled(Box)<{ delay: number; duration: number }>(({ theme, delay, duration }) => ({
  position: 'absolute',
  width: 4,
  height: 4,
  background: 'linear-gradient(135deg, #7C3AED 0%, #F59E0B 100%)',
  borderRadius: '50%',
  animation: `float ${duration}s ease-in-out infinite`,
  animationDelay: `${delay}s`,
  opacity: 0.7,
}));

const LoadingText = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem',
  color: '#A1A1AA',
  marginTop: theme.spacing(2),
  fontStyle: 'italic',
}));

const CompleteButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(135deg, #10B981 0%, #34D399 100%)',
  color: '#FFFFFF',
  borderRadius: theme.spacing(2),
  padding: theme.spacing(1.5, 4),
  fontSize: '1.1rem',
  fontWeight: 600,
  textTransform: 'none',
  boxShadow: '0 8px 25px rgba(16, 185, 129, 0.3)',
  transition: 'all 0.3s ease',
  
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 12px 35px rgba(16, 185, 129, 0.4)',
    background: 'linear-gradient(135deg, #059669 0%, #10B981 100%)',
  },
}));

interface MindReaderProps {
  isLoading: boolean;
  showAnimation: boolean;
  onComplete: () => void;
  onStart: () => void;
}

export const MindReader: React.FC<MindReaderProps> = ({
  isLoading,
  showAnimation,
  onComplete,
  onStart,
}) => {
  const [loadingText, setLoadingText] = useState('Initializing mind reading...');
  const [particles, setParticles] = useState<Array<{ id: number; delay: number; duration: number; x: number; y: number }>>([]);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (showAnimation) {
      // Generate random particles
      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        delay: Math.random() * 2,
        duration: 2 + Math.random() * 3,
        x: Math.random() * 100,
        y: Math.random() * 100,
      }));
      setParticles(newParticles);

      // Start countdown
      const countdownInterval = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            clearInterval(countdownInterval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      // Update loading text
      const textSequence = [
        'Initializing mind reading...',
        'Accessing neural pathways...',
        'Decoding brain waves...',
        'Analyzing thought patterns...',
        'Almost there...',
        'Mind reading complete!',
      ];

      let textIndex = 0;
      const textInterval = setInterval(() => {
        if (textIndex < textSequence.length - 1) {
          setLoadingText(textSequence[textIndex]);
          textIndex++;
        } else {
          clearInterval(textInterval);
        }
      }, 500);
    }
  }, [showAnimation]);

  if (!showAnimation) {
    return (
      <MindReaderContainer>
        <Typography variant="h4" gutterBottom>
          🧠 Ready to Read Your Mind?
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Click the button below to start the mind reading process. This will take a few seconds...
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={onStart}
          startIcon={<Psychology />}
          sx={{
            background: 'linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)',
            fontSize: '1.1rem',
            padding: '12px 24px',
          }}
        >
          Start Mind Reading
        </Button>
      </MindReaderContainer>
    );
  }

  if (isLoading) {
    return (
      <MindReaderContainer>
        <MindReadingAnimation>
          <MagicParticles>
            {particles.map((particle) => (
              <Particle
                key={particle.id}
                delay={particle.delay}
                duration={particle.duration}
                sx={{
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                }}
              />
            ))}
          </MagicParticles>
          
          <BrainIcon />
          
          <CircularProgress
            size={60}
            thickness={4}
            sx={{
              color: '#7C3AED',
              marginBottom: 2,
            }}
          />
          
          <LoadingText variant="body1">
            {loadingText}
          </LoadingText>
          
          {countdown > 0 && (
            <Typography 
              variant="h3" 
              sx={{ 
                mt: 2, 
                color: '#7C3AED', 
                fontWeight: 'bold',
                animation: 'pulse 1s ease-in-out infinite'
              }}
            >
              {countdown}
            </Typography>
          )}
        </MindReadingAnimation>
      </MindReaderContainer>
    );
  }

  return (
    <MindReaderContainer>
      <MindReadingAnimation>
        <AutoAwesome
          sx={{
            fontSize: '4rem',
            color: '#10B981',
            marginBottom: 2,
            animation: 'pulse 1s ease-in-out infinite',
          }}
        />
        
        <Typography variant="h4" gutterBottom color="#10B981">
          🎉 Mind Reading Complete!
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 3, maxWidth: 500 }}>
          I've successfully read your mind and found your card! The magic has revealed the truth.
        </Typography>
        
        <CompleteButton
          variant="contained"
          size="large"
          onClick={onComplete}
          startIcon={<AutoAwesome />}
        >
          Reveal My Card
        </CompleteButton>
      </MindReadingAnimation>
    </MindReaderContainer>
  );
};
