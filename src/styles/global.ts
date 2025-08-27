import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    overflow-x: hidden;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: linear-gradient(135deg, #0F0F23 0%, #1A1A2E 50%, #16213E 100%);
    background-attachment: fixed;
    color: #FFFFFF;
  }

  #root {
    height: 100%;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #7C3AED 0%, #F59E0B 100%);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #6D28D9 0%, #D97706 100%);
  }

  /* Animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInFromLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInFromRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @keyframes glow {
    0%, 100% {
      box-shadow: 0 0 20px rgba(124, 58, 237, 0.5);
    }
    50% {
      box-shadow: 0 0 30px rgba(124, 58, 237, 0.8), 0 0 40px rgba(124, 58, 237, 0.4);
    }
  }

  @keyframes cardFlip {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(180deg);
    }
  }

  @keyframes mindReading {
    0% {
      opacity: 0.3;
      transform: scale(0.8);
    }
    50% {
      opacity: 1;
      transform: scale(1.1);
    }
    100% {
      opacity: 0.3;
      transform: scale(0.8);
    }
  }

  @keyframes confettiFall {
    0% {
      transform: translateY(-10px) rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: translateY(100vh) rotate(720deg);
      opacity: 0;
    }
  }

  /* Utility classes */
  .fade-in {
    animation: fadeIn 0.6s ease-out;
  }

  .slide-in-left {
    animation: slideInFromLeft 0.6s ease-out;
  }

  .slide-in-right {
    animation: slideInFromRight 0.6s ease-out;
  }

  .pulse {
    animation: pulse 2s infinite;
  }

  .float {
    animation: float 3s ease-in-out infinite;
  }

  .glow {
    animation: glow 2s ease-in-out infinite;
  }

  .card-flip {
    animation: cardFlip 0.8s ease-in-out;
  }

  .mind-reading {
    animation: mindReading 1.5s ease-in-out infinite;
  }

  .confetti-fall {
    animation: confettiFall 3s linear infinite;
  }

  /* Focus styles */
  *:focus {
    outline: 2px solid #7C3AED;
    outline-offset: 2px;
  }

  /* Selection styles */
  ::selection {
    background: rgba(124, 58, 237, 0.3);
    color: #FFFFFF;
  }

  /* Smooth transitions */
  * {
    transition: all 0.2s ease;
  }

  /* Card specific styles */
  .card-image {
    border-radius: 12px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-5px) scale(1.02);
      box-shadow: 0 12px 35px rgba(0, 0, 0, 0.4);
    }
  }

  /* Button hover effects */
  .magic-button {
    position: relative;
    overflow: hidden;
  }
  
  .magic-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }
  
  .magic-button:hover::before {
    left: 100%;
  }
`;
