import React from 'react';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Game } from '@/features/card/components/Game';

function App() {
  return (
    <ThemeProvider>
      <Game />
    </ThemeProvider>
  );
}

export default App;
