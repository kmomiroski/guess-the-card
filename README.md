# 🎭 Guess the Card - Modern Magic Game

A beautiful, modern implementation of the classic "Guess the Card" magic trick, built with **Vite + React + TypeScript + Material-UI**.

## ✨ Features

- **🎯 Mind Reading Magic**: Experience the classic card guessing trick with modern UI/UX
- **🎨 Beautiful Design**: Stunning dark theme with purple/amber gradients and glassmorphism effects
- **🚀 Fast Performance**: Built with Vite for lightning-fast development and builds
- **📱 Responsive**: Works perfectly on all devices
- **🎭 Interactive Animations**: Smooth transitions, particle effects, and magical animations
- **🔄 Replayable**: Play again and again with different cards

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite
- **UI Framework**: Material-UI (MUI) v7
- **Styling**: Styled-components + Emotion
- **State Management**: React Hooks
- **Architecture**: Feature-based folder structure

## 🎮 How to Play

1. **Think of a Card**: Choose one of the 27 available cards in your mind
2. **Pick Your Number**: Select your favorite number between 1-27
3. **Follow the Magic**: The app will split cards into 3 piles
4. **Select Piles**: Tell the app which pile contains your card (3 times)
5. **Mind Reading**: Watch as the app "reads your mind"
6. **Reveal**: Your chosen card is magically revealed!

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (recommended: 20+)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd guess-the-card
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── app/
│   ├── providers/          # Theme and context providers
│   ├── routes/            # Routing configuration
│   └── layout/            # Layout components
├── features/
│   └── card/              # Card game feature
│       ├── components/    # Game-specific components
│       ├── hooks/         # Custom hooks
│       ├── types/         # TypeScript types
│       ├── utils/         # Game logic utilities
│       └── pages/         # Feature pages
├── components/            # Shared UI components
├── lib/                  # Utilities, theme, helpers
└── styles/               # Global styles and animations
```

## 🎨 Design System

- **Color Palette**: Dark theme with purple (#7C3AED) and amber (#F59E0B) accents
- **Typography**: Inter font family with gradient text effects
- **Animations**: Smooth transitions, floating effects, and particle systems
- **Components**: Glassmorphism cards with backdrop blur effects

## 🔧 Configuration

### Vite Configuration
- Path aliases: `@/*` → `src/*`
- React plugin with TypeScript support
- Optimized build settings

### TypeScript Configuration
- Strict mode enabled
- Path mapping for clean imports
- Modern ES2020 target

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: xs, sm, md, lg, xl
- **Touch Friendly**: Large touch targets and smooth interactions

## 🎭 Game Logic

The magic trick works using a mathematical algorithm:
1. Cards are shuffled and split into 3 piles
2. User selects which pile contains their card
3. Cards are reordered based on the selection
4. Process repeats 3 times
5. The final position reveals the chosen card

## 🚀 Performance Features

- **Lazy Loading**: Components load only when needed
- **Optimized Images**: Card images optimized for web
- **Smooth Animations**: 60fps animations with CSS transforms
- **Efficient State**: Minimal re-renders with React hooks

## 🧪 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Quality

- **ESLint**: Strict linting rules
- **Prettier**: Consistent code formatting
- **TypeScript**: Full type safety
- **Component Architecture**: Reusable, modular components

## 🌟 Future Enhancements

- [ ] Sound effects and background music
- [ ] Multiple card decks and themes
- [ ] Leaderboard and statistics
- [ ] Multiplayer support
- [ ] Advanced animations and effects
- [ ] Accessibility improvements

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Material-UI**: Beautiful React components
- **Vite**: Lightning-fast build tool
- **React Team**: Amazing framework
- **Magic Community**: Inspiration for the card trick

---

**🎭 Ready to experience the magic? Start the game and let your mind be read! ✨**
