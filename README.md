# Aura - Website Designs with Multiple Themes

A React + Vite project showcasing different website design styles with dynamic theme switching using Tailwind CSS.

## 🎨 Available Themes

### A. Neon Noir
- **Colors**: Near-black UI with magenta + indigo accents
- **Styling**: 2xl (16px) soft curves, subtle glass blur
- **Feel**: Dark, futuristic, high-contrast

### B. Warm Velvet  
- **Colors**: Deep burgundy, cream, muted gold accents
- **Styling**: xl curves (12px), lightly textured backgrounds
- **Feel**: Luxurious, warm, elegant

### C. Soft Pastel
- **Colors**: Ivory base, coral & teal pops
- **Styling**: lg curves (8px), more air/whitespace
- **Feel**: Clean, minimal, friendly

### D. Cyberpunk
- **Colors**: Dark grays, neon greens, electric blues  
- **Styling**: Sharp corners (4px), glitch effects, scanlines
- **Feel**: Edgy, tech-noir, high-energy

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/pepperumo/website-designs.git
cd website-designs
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🛠️ Project Structure

```
src/
├── components/
│   ├── AuraWebsite.jsx    # Main website content
│   └── ThemeSelector.jsx  # Theme switching component
├── themes.js              # Theme configurations
├── index.css              # Global styles and CSS variables
├── App.jsx                # Main app component
└── main.jsx               # Entry point
```

## 🎯 Features

- **Dynamic Theme Switching**: Click the "🎨 Themes" button to switch between 4 different design styles
- **Persistent Theme Selection**: Your theme choice is saved in localStorage
- **Responsive Design**: Optimized for desktop and mobile devices
- **Smooth Transitions**: All theme changes are animated
- **Modern Stack**: React 18 + Vite + Tailwind CSS

## 📱 Theme Selector

The theme selector is positioned in the top-right corner and includes:
- Theme preview with color swatches
- Detailed descriptions of each style
- Current theme indicator
- Smooth animations and transitions

## 🔧 Customization

### Adding New Themes

1. Add a new theme object to `src/themes.js`:
```javascript
newTheme: {
  name: 'Theme Name',
  id: 'theme-id',
  colors: {
    canvas: '#background-color',
    surface: '#surface-color', 
    accent1: '#primary-accent',
    accent2: '#secondary-accent',
    text: '#text-color',
  },
  radius: '0.5rem',
  effects: {
    backdrop: true,
    glow: true,
    pattern: 'subtle',
  },
  description: 'Theme description'
}
```

2. The theme will automatically appear in the theme selector.

### Modifying Existing Themes

Edit the theme objects in `src/themes.js` to adjust colors, radius, or effects.

## 🎨 CSS Custom Properties

The theme system uses CSS custom properties for dynamic styling:
- `--color-canvas`: Main background color
- `--color-surface`: Card/panel background color  
- `--color-accent-1`: Primary accent color
- `--color-accent-2`: Secondary accent color
- `--color-text`: Text color
- `--radius`: Border radius for all elements

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Add new themes
- Improve existing designs
- Fix bugs
- Enhance documentation

## 📧 Contact

Created by [@pepperumo](https://github.com/pepperumo)
