# Aura - Advanced Website Design System

A sophisticated React + Vite project featuring a comprehensive design system with dynamic theming, advanced visual effects, and customizable UI components. Built with Tailwind CSS and modern web technologies.

## ✨ Key Features

- **🎨 D## 🚀 Deployment

### Live Demo
🌐 **[View Live Demo](https://pepperumo.github.io/website-designs/)**

### Automatic GitHub Pages Deployment
This project is automatically deployed to GitHub Pages using GitHub Actions:

- **Trigger**: Every push to the `main` branch
- **Build Process**: Automated via GitHub Actions workflow
- **URL**: `https://pepperumo.github.io/website-designs/`

### Manual Deployment Options

#### GitHub Pages (Recommended)
1. **Enable GitHub Pages** in repository settings:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `(root)`

2. **Automatic deployment** via GitHub Actions (already configured)
   - Push to `main` branch triggers deployment
   - Build artifacts uploaded to `gh-pages` branch

#### Manual GitHub Pages Deployment
```bash
# Install dependencies
npm install

# Install gh-pages if not already installed
npm install --save-dev gh-pages

# Build and deploy
npm run deploy
```

### Production Build
```bash
npm run build
```
Optimized files will be generated in the `dist/` directory.

### Alternative Deployment Options
- **Vercel**: Zero-configuration deployment with automatic previews
- **Netlify**: Continuous deployment with form handling
- **AWS S3**: Scalable static hosting with CloudFront CDN
- **Firebase Hosting**: Google's hosting platform with CDNSystem**: Multiple pre-built themes with real-time switching
- **🔧 Advanced Customization**: Shape variants, 3D effects, typography options, and shadow styles
- **📱 Responsive Design**: Optimized for all screen sizes and devices
- **🎯 Accessibility First**: High contrast support, reduced motion preferences, and keyboard navigation
- **⚡ Performance Optimized**: Smooth animations and efficient rendering
- **🛠️ Developer Friendly**: Comprehensive CSS custom properties and utility classes

## 🎨 Theme System

### Core Themes Available

- **Neon Noir**: Dark futuristic design with magenta and indigo accents
- **Warm Velvet**: Luxurious burgundy and gold palette with elegant styling  
- **Soft Pastel**: Clean minimal design with coral and teal highlights
- **Cyberpunk**: High-energy tech-noir with neon greens and electric blues

### Advanced Customization Options

#### 🔮 Shape Variants
- **Standard**: Classic rounded corners with configurable radius
- **Blob**: Organic, flowing shapes with dynamic morphing
- **Morphic**: Asymmetrical designs with artistic flair
- **Squircle**: Modern iOS-style rounded rectangles
- **Chamfer**: Angular cuts for geometric aesthetics
- **Angular**: Sharp, precise geometric forms

#### 🌟 3D Effects
- **Flat**: Clean, minimalist appearance
- **Raised**: Subtle elevation with soft shadows
- **Pressed**: Inset button effects for tactile feedback
- **Floating**: Dramatic elevation with pronounced shadows
- **Beveled**: Classic raised edges with highlight gradients
- **Extruded**: Deep 3D appearance with layered shadows

#### ✍️ Typography Options
- **Inter**: Modern, highly legible sans-serif
- **Roboto**: Google's signature typeface
- **Playfair Display**: Elegant serif for headings
- **Source Code Pro**: Professional monospace font
- **Crimson Text**: Classic serif for body text
- **Work Sans**: Versatile sans-serif family
- **Space Grotesk**: Contemporary geometric sans-serif
- **Fira Code**: Developer-focused monospace with ligatures

#### 🎭 Shadow & Visual Effects
- **Soft**: Gentle, subtle shadows for minimal designs
- **Classic**: Traditional drop shadows with moderate depth
- **Neon**: Glowing effects with theme-colored illumination
- **Inner**: Inset shadows for pressed/embedded appearance
- **Harsh**: Bold, geometric shadows for dramatic contrast

#### 🌈 Background Options
- **Linear Gradients**: Multi-color directional gradients
- **Radial Gradients**: Circular gradient patterns
- **Duotone**: Two-color gradient combinations
- **Solid Colors**: Clean, flat backgrounds

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- Modern web browser with ES6+ support

### Quick Setup

1. **Clone the repository:**
```bash
git clone https://github.com/pepperumo/website-designs.git
cd website-designs
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm run dev
```

4. **Open in browser:** Navigate to `http://localhost:5173`

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🏗️ Project Architecture

```
website-designs/
├── src/
│   ├── components/
│   │   ├── AuraWebsite.jsx      # Main website component
│   │   ├── ThemeSelector.jsx    # Theme switching interface
│   │   └── ThemeSidebar.jsx     # Advanced theme controls
│   ├── assets/
│   │   └── images/              # Image assets
│   ├── themes.js                # Theme configuration system
│   ├── index.css                # Advanced CSS system & utilities
│   ├── App.jsx                  # Root application component
│   └── main.jsx                 # Application entry point
├── public/                      # Static assets
├── index.html                   # HTML template
├── package.json                 # Dependencies & scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
└── postcss.config.js           # PostCSS configuration
```

## 🎯 Advanced Features

### 🎨 Theme System
- **Live Preview**: Real-time theme switching without page reload
- **Persistent Settings**: Automatic save/restore of user preferences
- **Custom Properties**: Comprehensive CSS variable system
- **Responsive Adaptation**: Themes adapt to different screen sizes
- **Accessibility Support**: High contrast and reduced motion options

### 🔧 Customization Engine
- **Shape Morphing**: Dynamic border-radius animations
- **3D Transformations**: Hardware-accelerated visual effects
- **Typography Control**: Font family switching with web font loading
- **Color Harmony**: Intelligent accent color coordination
- **Visual Effects**: Shadows, gradients, and backdrop filters

### 📱 User Experience
- **Touch-Friendly**: Optimized for mobile and tablet interfaces
- **Keyboard Navigation**: Full accessibility via keyboard controls
- **Performance Optimized**: Smooth 60fps animations
- **Progressive Enhancement**: Graceful degradation on older browsers

## 🎛️ Theme Controls

### Basic Theme Selector
Located in the top-right corner, featuring:
- **Quick Switch**: One-click theme changes
- **Visual Previews**: Color palette previews for each theme
- **Current State**: Clear indication of active theme
- **Smooth Transitions**: Animated theme switching

### Advanced Theme Sidebar
Comprehensive customization panel including:
- **Shape Editor**: Real-time shape variant selection
- **3D Effects**: Depth and elevation controls  
- **Typography**: Font family and weight options
- **Visual Effects**: Shadow, gradient, and backdrop settings
- **Reset Options**: Restore default settings

## 🔧 Development & Customization

### Creating Custom Themes

1. **Add theme definition** to `src/themes.js`:
```javascript
export const customTheme = {
  id: 'custom-theme',
  name: 'Custom Theme',
  description: 'Your unique design style',
  colors: {
    canvas: '#1a1a2e',      // Main background
    surface: '#16213e',     // Card backgrounds
    surfaceHover: '#1e2a4a', // Hover states
    accent1: '#e94560',     // Primary accent
    accent2: '#f39c12',     // Secondary accent
    accent3: '#3498db',     // Tertiary accent
    text: '#ffffff',        // Primary text
    textMuted: '#bdc3c7',   // Secondary text
    border: '#34495e'       // Border color
  },
  radius: '0.75rem',        // Border radius
  effects: {
    backdrop: true,         // Enable backdrop blur
    shadows: 'soft',        // Shadow style
    gradients: true,        // Enable gradients
    animations: 'smooth'    // Animation style
  }
};
```

2. **Register the theme** in your theme configuration
3. **Test responsiveness** across different devices
4. **Validate accessibility** with screen readers and high contrast

### Advanced CSS Customization

#### Custom Properties System
```css
:root {
  /* Color System */
  --color-canvas: #0B0B11;
  --color-surface: #1A1A22;
  --color-accent-1: #E000B8;
  --color-accent-2: #4F00FF;
  --color-text: #F0F0F0;
  
  /* Layout Properties */
  --radius: 1rem;
  --shadow-depth: 20px;
  --gradient-angle: 135deg;
  
  /* Effect Controls */
  --shadow-color: rgba(224, 0, 184, 0.3);
  --backdrop-blur: 8px;
}
```

#### Utility Classes
```css
/* Shape Variants */
.shape-blob { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
.shape-morphic { border-radius: 50% 20% 80% 30% / 40% 70% 30% 60%; }

/* 3D Effects */
.effect-3d-raised { transform: translateY(-2px); }
.effect-3d-floating { box-shadow: 0 12px 24px rgba(0,0,0,0.25); }

/* Typography */
.font-inter { font-family: 'Inter', sans-serif; }
.font-playfair { font-family: 'Playfair Display', serif; }
```

### Component Integration

#### Using Theme Context
```jsx
import { useTheme } from './ThemeContext';

function CustomComponent() {
  const { currentTheme, updateTheme } = useTheme();
  
  return (
    <div 
      className="bg-surface rounded-theme shadow-theme-soft"
      data-shape-type={currentTheme.shape}
      data-effect-3d={currentTheme.effects.depth}
    >
      Content with dynamic theming
    </div>
  );
}
```

## 🎨 CSS Architecture

### Design System Structure
- **Base Layer**: Reset styles and fundamental properties
- **Theme Layer**: Dynamic color and effect variables  
- **Component Layer**: Reusable UI component styles
- **Utility Layer**: Single-purpose helper classes
- **Animation Layer**: Transitions and motion effects

### Performance Considerations
- **CSS Variables**: Efficient theme switching without style recalculation
- **Hardware Acceleration**: GPU-optimized transforms and animations
- **Lazy Loading**: Conditional loading of advanced effects
- **Reduced Motion**: Respects user accessibility preferences

## 🧪 Testing & Quality

### Browser Support
- **Modern Browsers**: Chrome 88+, Firefox 85+, Safari 14+, Edge 88+
- **Progressive Enhancement**: Graceful degradation for older browsers
- **Mobile Support**: iOS Safari 14+, Chrome Mobile 88+

### Accessibility Features
- **WCAG 2.1 AA**: Compliant color contrast ratios
- **Keyboard Navigation**: Full functionality without mouse
- **Screen Readers**: Semantic HTML and ARIA labels
- **Reduced Motion**: Honors `prefers-reduced-motion` settings
- **High Contrast**: Support for `prefers-contrast: high`

## � Deployment

### Production Build
```bash
npm run build
```
Optimized files will be generated in the `dist/` directory.

### Deployment Options
- **Vercel**: Zero-configuration deployment with automatic previews
- **Netlify**: Continuous deployment with form handling
- **GitHub Pages**: Free hosting with GitHub Actions
- **AWS S3**: Scalable static hosting with CloudFront CDN

### Performance Optimization
- **Code Splitting**: Automatic chunk splitting for faster loading
- **Tree Shaking**: Unused code elimination
- **Asset Optimization**: Image compression and format conversion
- **Caching Strategy**: Intelligent cache headers for static assets

## 📚 Documentation

### API Reference
- **Theme Configuration**: Complete theme object specifications
- **CSS Variables**: Comprehensive custom property documentation
- **Component Props**: React component interface definitions
- **Utility Classes**: Complete CSS utility class reference

### Guides & Tutorials
- **Getting Started**: Step-by-step setup and first customization
- **Theme Creation**: Detailed guide for building custom themes
- **Advanced Styling**: Complex shape and effect combinations
- **Performance Tips**: Optimization strategies and best practices

## 🤝 Contributing

We welcome contributions! Here's how to get involved:

### Development Setup
1. **Fork** the repository
2. **Clone** your fork: `git clone <your-fork-url>`
3. **Install** dependencies: `npm install`
4. **Create** feature branch: `git checkout -b feature/your-feature`
5. **Make** your changes with tests
6. **Submit** pull request

### Contribution Guidelines
- **Code Style**: Follow ESLint and Prettier configurations
- **Commit Messages**: Use conventional commit format
- **Testing**: Add tests for new features
- **Documentation**: Update README and inline comments
- **Accessibility**: Ensure WCAG 2.1 AA compliance

### Ideas for Contributions
- **New Themes**: Additional design styles and color schemes
- **Components**: Reusable UI components with theme support
- **Effects**: Advanced visual effects and animations
- **Accessibility**: Enhanced a11y features and testing
- **Performance**: Optimization and bundle size improvements

## 📄 License

This project is open source and available under the **MIT License**. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Next generation frontend tooling
- **React**: UI library for building user interfaces
- **Google Fonts**: Web font service and typography
- **Community**: Contributors and feedback providers

## 📧 Contact & Support

- **Creator**: [@pepperumo](https://github.com/pepperumo)
- **Issues**: [GitHub Issues](https://github.com/pepperumo/website-designs/issues)
- **Discussions**: [GitHub Discussions](https://github.com/pepperumo/website-designs/discussions)

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

[![GitHub stars](https://img.shields.io/github/stars/pepperumo/website-designs?style=social)](https://github.com/pepperumo/website-designs/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/pepperumo/website-designs?style=social)](https://github.com/pepperumo/website-designs/network)
[![GitHub issues](https://img.shields.io/github/issues/pepperumo/website-designs)](https://github.com/pepperumo/website-designs/issues)

</div>
