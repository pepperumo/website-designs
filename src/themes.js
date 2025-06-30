// Theme configurations for the 4 different styles with expanded color palettes

// Font type configurations
export const fontTypes = {
  inter: {
    name: 'Inter',
    primary: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
    secondary: 'Inter, sans-serif',
    mono: 'JetBrains Mono, Menlo, Monaco, Consolas, monospace'
  },
  roboto: {
    name: 'Roboto',
    primary: 'Roboto, -apple-system, BlinkMacSystemFont, sans-serif',
    secondary: 'Roboto, sans-serif',
    mono: 'Roboto Mono, monospace'
  },
  playfair: {
    name: 'Playfair Display',
    primary: 'Playfair Display, Georgia, serif',
    secondary: 'Source Sans Pro, sans-serif',
    mono: 'Fira Code, monospace'
  },
  'source-code': {
    name: 'Source Code Pro',
    primary: 'Source Code Pro, monospace',
    secondary: 'Source Sans Pro, sans-serif',
    mono: 'Source Code Pro, monospace'
  },
  crimson: {
    name: 'Crimson Text',
    primary: 'Crimson Text, Georgia, serif',
    secondary: 'Open Sans, sans-serif',
    mono: 'Courier New, monospace'
  },
  'work-sans': {
    name: 'Work Sans',
    primary: 'Work Sans, sans-serif',
    secondary: 'Work Sans, sans-serif',
    mono: 'Monaco, monospace'
  },
  'space-grotesk': {
    name: 'Space Grotesk',
    primary: 'Space Grotesk, sans-serif',
    secondary: 'Space Grotesk, sans-serif',
    mono: 'Space Mono, monospace'
  },
  'fira-code': {
    name: 'Fira Code',
    primary: 'Fira Code, monospace',
    secondary: 'Fira Sans, sans-serif',
    mono: 'Fira Code, monospace'
  }
};

export const themes = {
  neonNoir: {
    name: 'Neon Noir',
    id: 'neon-noir',
    colors: {
      canvas: '#0B0B11',      // Deep near-black background
      surface: '#1A1A22',     // Darker panel surfaces
      surfaceHover: '#242432', // Hover state for cards
      accent1: '#E000B8',     // Saturated magenta (primary)
      accent2: '#4F00FF',     // Deep indigo (secondary)
      accent3: '#00D4FF',     // Electric cyan (tertiary)
      accent4: '#FF006B',     // Hot pink (quaternary)
      accent5: '#9D00FF',     // Purple (quinternary)
      text: '#F0F0F0',        // Bright off-white
      textMuted: '#B8B8C0',   // Muted text
      textDim: '#808090',     // Dim text
      border: '#2A2A38',      // Border color
      success: '#00FF88',     // Success state
      warning: '#FFB800',     // Warning state
      danger: '#FF3860',      // Danger/error state
    },
    radius: '1rem',           // 16px soft curves
    effects: {
      backdrop: true,
      glow: true,
      pattern: 'subtle',
      // New advanced effects
      shadow: 'neon',        // Options: classic, neon, soft, inner, harsh, none
      gradient: 'linear',    // Options: linear, radial, duotone, none
      shape: 'standard',     // Options: standard, pill, angular, organic, asymmetric
    },
    typography: {
      fontFamily: 'inter',   // Default font for this theme
    },
    description: 'Rich neon noir with magenta, indigo, cyan & pink accents, 2xl (16px) soft curves, subtle glass blur'
  },
  
  warmVelvet: {
    name: 'Warm Velvet',
    id: 'warm-velvet',
    colors: {
      canvas: '#2D1B1B',      // Deep burgundy
      surface: '#3D2626',     // Slightly lighter burgundy
      surfaceHover: '#4A3030', // Hover state
      accent1: '#D4AF37',     // Muted gold (primary)
      accent2: '#F5F5DC',     // Cream (secondary)
      accent3: '#CD853F',     // Peru/bronze (tertiary)
      accent4: '#DEB887',     // Burlywood (quaternary)
      accent5: '#B8860B',     // Dark goldenrod (quinternary)
      text: '#F5F5DC',        // Cream text
      textMuted: '#E6E6D3',   // Muted cream
      textDim: '#C4C4AA',     // Dim cream
      border: '#5A4040',      // Border color
      success: '#228B22',     // Forest green
      warning: '#FF8C00',     // Dark orange
      danger: '#DC143C',      // Crimson
    },
    radius: '0.75rem',        // 12px xl curves
    effects: {
      backdrop: false,
      glow: false,
      pattern: 'texture',
      // New advanced effects
      shadow: 'soft',        // Options: classic, neon, soft, inner, harsh, none
      gradient: 'linear',    // Options: linear, radial, duotone, none
      shape: 'standard',     // Options: standard, pill, angular, organic, asymmetric
    },
    typography: {
      fontFamily: 'playfair', // Elegant serif for luxury
    },
    description: 'Rich burgundy with gold, cream, bronze & burlywood accents, xl curves (12px), textured backgrounds'
  },
  
  softPastel: {
    name: 'Soft Pastel',
    id: 'soft-pastel',
    colors: {
      canvas: '#FFFFF0',      // Ivory base
      surface: '#F8F8FF',     // Ghost white
      surfaceHover: '#F0F0FA', // Hover state
      accent1: '#FF7F7F',     // Coral (primary)
      accent2: '#40E0D0',     // Turquoise/teal (secondary)
      accent3: '#DDA0DD',     // Plum (tertiary)
      accent4: '#98FB98',     // Pale green (quaternary)
      accent5: '#F0E68C',     // Khaki (quinternary)
      text: '#2F2F2F',        // Dark gray text
      textMuted: '#606060',   // Muted gray
      textDim: '#808080',     // Dim gray
      border: '#E0E0E0',      // Light border
      success: '#90EE90',     // Light green
      warning: '#FFD700',     // Gold
      danger: '#FFB6C1',      // Light pink
    },
    radius: '0.5rem',         // 8px lg curves
    effects: {
      backdrop: false,
      glow: false,
      pattern: 'none',
      // New advanced effects
      shadow: 'soft',        // Options: classic, neon, soft, inner, harsh, none
      gradient: 'linear',    // Options: linear, radial, duotone, none
      shape: 'standard',     // Options: standard, pill, angular, organic, asymmetric
    },
    typography: {
      fontFamily: 'work-sans', // Clean and friendly
    },
    description: 'Soft ivory with coral, teal, plum & pale green accents, lg curves (8px), airy whitespace'
  },
  
  cyberpunk: {
    name: 'Cyberpunk',
    id: 'cyberpunk',
    colors: {
      canvas: '#0A0A0A',      // Very dark gray
      surface: '#1A1A1A',     // Dark gray
      surfaceHover: '#252525', // Hover state
      accent1: '#00FF41',     // Neon green (primary)
      accent2: '#0080FF',     // Electric blue (secondary)
      accent3: '#FF0080',     // Hot magenta (tertiary)
      accent4: '#FFFF00',     // Electric yellow (quaternary)
      accent5: '#FF4000',     // Electric orange (quinternary)
      text: '#00FF41',        // Neon green text
      textMuted: '#80FF80',   // Muted green
      textDim: '#40AA40',     // Dim green
      border: '#333333',      // Dark border
      success: '#00FF00',     // Pure green
      warning: '#FFAA00',     // Orange
      danger: '#FF0040',      // Red-pink
    },
    radius: '0.25rem',        // 4px sharp corners
    effects: {
      backdrop: false,
      glow: true,
      pattern: 'grid',
      // New advanced effects
      shadow: 'neon',        // Options: classic, neon, soft, inner, harsh, none
      gradient: 'duotone',   // Options: linear, radial, duotone, none
      shape: 'angular',      // Options: standard, pill, angular, organic, asymmetric
    },
    typography: {
      fontFamily: 'source-code', // Futuristic monospace
    },
    description: 'Dark cyberpunk with neon green, blue, magenta & yellow accents, sharp corners (4px), glitch effects'
  },
  
  kinkElegance: {
    name: 'Kink Elegance',
    id: 'kink-elegance',
    colors: {
      canvas: '#1A0B0F',      // Deep wine/burgundy black
      surface: '#2D1419',     // Rich burgundy surface
      surfaceHover: '#3D1B23', // Hover state
      accent1: '#DC143C',     // Crimson red (primary)
      accent2: '#8B0000',     // Dark red (secondary)
      accent3: '#FF69B4',     // Hot pink (tertiary)
      accent4: '#4B0082',     // Indigo (quaternary)
      accent5: '#B8860B',     // Dark goldenrod (quinternary)
      text: '#F5F5DC',        // Cream text
      textMuted: '#D3D3D3',   // Light gray
      textDim: '#A9A9A9',     // Dark gray
      border: '#8B0000',      // Dark red border
      success: '#008000',     // Green
      warning: '#FFA500',     // Orange
      danger: '#FF0000',      // Red
    },
    radius: '0.75rem',        // 12px elegant curves
    effects: {
      backdrop: true,
      glow: false,
      pattern: 'subtle',
      // New advanced effects
      shadow: 'soft',        // Options: classic, neon, soft, inner, harsh, none
      gradient: 'linear',    // Options: linear, radial, duotone, none
      shape: 'standard',     // Options: standard, pill, angular, organic, asymmetric
    },
    typography: {
      fontFamily: 'crimson', // Elegant serif for sophistication
    },
    description: 'Deep burgundy with crimson, dark red & pink accents, elegant curves (12px), subtle glass blur'
  },
  
  queerPride: {
    name: 'Queer Pride',
    id: 'queer-pride',
    colors: {
      canvas: '#2C1810',      // Rich dark brown
      surface: '#3D2419',     // Warm dark surface
      surfaceHover: '#4A2D21', // Hover state
      accent1: '#FF69B4',     // Hot pink (primary)
      accent2: '#9370DB',     // Medium purple (secondary)
      accent3: '#00CED1',     // Dark turquoise (tertiary)
      accent4: '#FFD700',     // Gold (quaternary)
      accent5: '#FF4500',     // Orange red (quinternary)
      text: '#FFFAF0',        // Floral white
      textMuted: '#E6E6E6',   // Light gray
      textDim: '#C0C0C0',     // Silver
      border: '#4A2D21',      // Darker brown border
      success: '#32CD32',     // Lime green
      warning: '#FFA500',     // Orange
      danger: '#FF0000',      // Red
    },
    radius: '1rem',           // 16px rounded curves
    effects: {
      backdrop: true,
      glow: true,
      pattern: 'none',
      // New advanced effects
      shadow: 'neon',        // Options: classic, neon, soft, inner, harsh, none
      gradient: 'radial',    // Options: linear, radial, duotone, none
      shape: 'standard',     // Options: standard, pill, angular, organic, asymmetric
    },
    typography: {
      fontFamily: 'space-grotesk', // Modern and inclusive
    },
    description: 'Rich brown with pink, purple, turquoise & gold accents, 2xl curves (16px), rainbow glow'
  },
  
  dungeonChic: {
    name: 'Dungeon Chic',
    id: 'dungeon-chic',
    colors: {
      canvas: '#0F0F0F',      // Near-black
      surface: '#1A1A1A',     // Very dark gray
      surfaceHover: '#252525', // Hover state
      accent1: '#FF0000',     // Pure red (primary)
      accent2: '#000000',     // Pure black (secondary)
      accent3: '#800000',     // Maroon (tertiary)
      accent4: '#C0C0C0',     // Silver (quaternary)
      accent5: '#36454F',     // Charcoal (quinternary)
      text: '#C0C0C0',        // Silver text
      textMuted: '#A9A9A9',   // Dark gray
      textDim: '#696969',     // Dim gray
      border: '#2B2B2B',      // Slightly lighter black
      success: '#008000',     // Green
      warning: '#B8860B',     // Dark goldenrod
      danger: '#FF0000',      // Red
    },
    radius: '0.25rem',        // 4px sharp edges
    effects: {
      backdrop: false,
      glow: false,
      pattern: 'texture',
      // New advanced effects
      shadow: 'harsh',       // Options: classic, neon, soft, inner, harsh, none
      gradient: 'none',      // Options: linear, radial, duotone, none
      shape: 'angular',      // Options: standard, pill, angular, organic, asymmetric
    },
    typography: {
      fontFamily: 'roboto', // Industrial and strong
    },
    description: 'Dark near-black with red, black, maroon & silver accents, sharp edges (4px), textured surfaces'
  },
  
  sensualVelvet: {
    name: 'Sensual Velvet',
    id: 'sensual-velvet',
    colors: {
      canvas: '#4B0082',      // Indigo base
      surface: '#5D1A94',     // Lighter indigo
      surfaceHover: '#6B2AA3', // Hover state
      accent1: '#FF69B4',     // Hot pink (primary)
      accent2: '#DA70D6',     // Orchid (secondary)
      accent3: '#9370DB',     // Medium purple (tertiary)
      accent4: '#EE82EE',     // Violet (quaternary)
      accent5: '#FF00FF',     // Fuchsia (quinternary)
      text: '#FFF0F5',        // Lavender blush
      textMuted: '#FFE4E1',   // Misty rose
      textDim: '#E6E6FA',     // Lavender
      border: '#8A2BE2',      // Blue violet
      success: '#7CFC00',     // Lawn green
      warning: '#FFD700',     // Gold
      danger: '#FF1493',      // Deep pink
    },
    radius: '1.25rem',        // 20px very soft curves
    effects: {
      backdrop: true,
      glow: true,
      pattern: 'subtle',
      // New advanced effects
      shadow: 'soft',        // Options: classic, neon, soft, inner, harsh, none
      gradient: 'linear',    // Options: linear, radial, duotone, none
      shape: 'standard',     // Options: standard, pill, angular, organic, asymmetric
    },
    typography: {
      fontFamily: 'playfair', // Elegant and sensual
    },
    description: 'Rich indigo with pink, orchid, purple & violet accents, very soft curves (20px), subtle glow'
  },
  
  dommeSupreme: {
    name: 'Domme Supreme',
    id: 'domme-supreme',
    colors: {
      canvas: '#1A1A1A',      // Very dark gray
      surface: '#2D2D2D',     // Dark gray
      surfaceHover: '#3D3D3D', // Hover state
      accent1: '#800020',     // Burgundy (primary)
      accent2: '#C71585',     // Medium violet red (secondary)
      accent3: '#D3D3D3',     // Light gray (tertiary)
      accent4: '#B22222',     // Firebrick (quaternary)
      accent5: '#4B0082',     // Indigo (quinternary)
      text: '#F5F5F5',        // White smoke
      textMuted: '#D3D3D3',   // Light gray
      textDim: '#A9A9A9',     // Dark gray
      border: '#4D4D4D',      // Medium dark gray
      success: '#006400',     // Dark green
      warning: '#FF8C00',     // Dark orange
      danger: '#8B0000',      // Dark red
    },
    radius: '0.5rem',         // 8px controlled curves
    effects: {
      backdrop: false,
      glow: false,
      pattern: 'none',
      // New advanced effects
      shadow: 'classic',     // Options: classic, neon, soft, inner, harsh, none
      gradient: 'linear',    // Options: linear, radial, mesh, duotone, none
      shape: 'standard',     // Options: standard, pill, angular, organic, asymmetric
    },
    typography: {
      fontFamily: 'roboto', // Strong and commanding
    },
    description: 'Dark gray with burgundy, violet red, firebrick & light gray accents, controlled curves (8px)'
  },
  
  leatherLux: {
    name: 'Leather Lux',
    id: 'leather-lux',
    colors: {
      canvas: '#1C1612',      // Dark chocolate brown
      surface: '#2D251F',     // Rich leather brown
      surfaceHover: '#3A2F27', // Hover state
      accent1: '#8B4513',     // Saddle brown (primary)
      accent2: '#A0522D',     // Sienna (secondary)
      accent3: '#CD853F',     // Peru (tertiary)
      accent4: '#B8860B',     // Dark goldenrod (quaternary)
      accent5: '#D2691E',     // Chocolate (quinternary)
      text: '#F5DEB3',        // Wheat
      textMuted: '#DEB887',   // Burlywood
      textDim: '#BC9A6A',     // Dark khaki
      border: '#8B4513',      // Saddle brown border
      success: '#228B22',     // Forest green
      warning: '#FF8C00',     // Dark orange
      danger: '#8B0000',      // Dark red
    },
    radius: '0.25rem',        // 4px sharp leather edges
    effects: {
      backdrop: false,
      glow: false,
      pattern: 'texture',
    },
    typography: {
      fontFamily: 'work-sans', // Crafted and refined
    },
    description: 'Luxurious leather aesthetic with saddle brown, sienna & gold accents, crafted sophistication'
  },
  
  neonFemme: {
    name: 'Neon Femme',
    id: 'neon-femme',
    colors: {
      canvas: '#0D0D19',      // Deep navy black
      surface: '#1A1A2E',     // Dark purple-blue
      surfaceHover: '#25253D', // Hover state
      accent1: '#FF69B4',     // Hot pink (primary)
      accent2: '#00FFFF',     // Cyan (secondary)
      accent3: '#DA70D6',     // Orchid (tertiary)
      accent4: '#FFFF00',     // Electric yellow (quaternary)
      accent5: '#FF1493',     // Deep pink (quinternary)
      text: '#F0F8FF',        // Alice blue
      textMuted: '#E6E6FA',   // Lavender
      textDim: '#D8BFD8',     // Thistle
      border: '#FF69B4',      // Hot pink border
      success: '#00FF7F',     // Spring green
      warning: '#FFD700',     // Gold
      danger: '#FF6347',      // Tomato
    },
    radius: '1rem',           // 16px soft curves
    effects: {
      backdrop: true,
      glow: true,
      pattern: 'subtle',
    },
    typography: {
      fontFamily: 'space-grotesk', // Futuristic and bold
    },
    description: 'Electric feminine power with hot pink, cyan & orchid accents, futuristic goddess energy'
  },
  
  darkRomance: {
    name: 'Dark Romance',
    id: 'dark-romance',
    colors: {
      canvas: '#1A0F14',      // Deep burgundy black
      surface: '#2D1B23',     // Dark wine
      surfaceHover: '#3D252E', // Hover state
      accent1: '#800020',     // Burgundy (primary)
      accent2: '#DC143C',     // Crimson (secondary)
      accent3: '#B22222',     // Fire brick (tertiary)
      accent4: '#C71585',     // Medium violet red (quaternary)
      accent5: '#8B0000',     // Dark red (quinternary)
      text: '#FFE4E1',        // Misty rose
      textMuted: '#F0E68C',   // Khaki
      textDim: '#DDA0DD',     // Plum
      border: '#800020',      // Burgundy border
      success: '#556B2F',     // Dark olive green
      warning: '#B8860B',     // Dark goldenrod
      danger: '#DC143C',      // Crimson
    },
    radius: '0.75rem',        // 12px romantic curves
    effects: {
      backdrop: true,
      glow: false,
      pattern: 'texture',
    },
    typography: {
      fontFamily: 'crimson', // Gothic elegance
    },
    description: 'Gothic romance with deep burgundy, crimson & wine accents, passionate darkness'
  },
  
  queerRebel: {
    name: 'Queer Rebel',
    id: 'queer-rebel',
    colors: {
      canvas: '#1F1F2E',      // Dark slate
      surface: '#2E2E47',     // Purple-gray
      surfaceHover: '#3D3D5C', // Hover state
      accent1: '#FF6B6B',     // Coral red (primary)
      accent2: '#4ECDC4',     // Turquoise (secondary)
      accent3: '#45B7D1',     // Sky blue (tertiary)
      accent4: '#96CEB4',     // Mint green (quaternary)
      accent5: '#FFEAA7',     // Pale yellow (quinternary)
      text: '#FFFFFF',        // Pure white
      textMuted: '#B2BEC3',   // Blue gray
      textDim: '#74B9FF',     // Light blue
      border: '#FF6B6B',      // Coral red border
      success: '#00B894',     // Mint
      warning: '#FDCB6E',     // Orange
      danger: '#E17055',      // Terra cotta
    },
    radius: '0.5rem',         // 8px rebel curves
    effects: {
      backdrop: true,
      glow: true,
      pattern: 'subtle',
    },
    typography: {
      fontFamily: 'work-sans', // Clean and rebellious
    },
    description: 'Rebellious queer spirit with coral, turquoise & mint accents, unapologetic authenticity'
  },
  
  goddessGold: {
    name: 'Goddess Gold',
    id: 'goddess-gold',
    colors: {
      canvas: '#2F2B1A',      // Dark golden brown
      surface: '#4A3F2A',     // Rich bronze
      surfaceHover: '#5A4F38', // Hover state
      accent1: '#FFD700',     // Gold (primary)
      accent2: '#DAA520',     // Goldenrod (secondary)
      accent3: '#B8860B',     // Dark goldenrod (tertiary)
      accent4: '#CD853F',     // Peru (quaternary)
      accent5: '#F4A460',     // Sandy brown (quinternary)
      text: '#FFFACD',        // Lemon chiffon
      textMuted: '#F0E68C',   // Khaki
      textDim: '#DEB887',     // Burlywood
      border: '#DAA520',      // Goldenrod border
      success: '#9ACD32',     // Yellow green
      warning: '#FF8C00',     // Dark orange
      danger: '#DC143C',      // Crimson
    },
    radius: '1.25rem',        // 20px divine curves
    effects: {
      backdrop: true,
      glow: true,
      pattern: 'subtle',
      // New advanced effects
      shadow: 'soft',        // Options: classic, neon, soft, inner, harsh, none
      gradient: 'linear',    // Options: linear, radial, mesh, duotone, none
      shape: 'pill',         // Options: standard, pill, angular, organic, asymmetric
    },
    typography: {
      fontFamily: 'playfair', // Divine and luxurious
    },
    description: 'Divine feminine power with pure gold, goldenrod & bronze accents, celestial luxury'
  },
  
  sissy_pink: {
    name: 'Sissy Pink',
    id: 'sissy-pink',
    colors: {
      canvas: '#2E1B2C',      // Dark pink-purple
      surface: '#4A2D47',     // Mauve
      surfaceHover: '#5A3A57', // Hover state
      accent1: '#FF1493',     // Deep pink (primary)
      accent2: '#FF69B4',     // Hot pink (secondary)
      accent3: '#FFB6C1',     // Light pink (tertiary)
      accent4: '#FFC0CB',     // Pink (quaternary)
      accent5: '#FFCCCB',     // Light coral (quinternary)
      text: '#FFF0F5',        // Lavender blush
      textMuted: '#FFCCCB',   // Light coral
      textDim: '#DDA0DD',     // Plum
      border: '#FF1493',      // Deep pink border
    },
    radius: '1.5rem',         // 24px ultra-soft curves
    effects: {
      backdrop: true,
      glow: false,
      pattern: 'subtle',
    },
    typography: {
      fontFamily: 'work-sans', // Soft and gentle
    },
    description: 'Soft sissy feminization with deep pink, hot pink & light coral accents, gentle submission'
  },
  
  latex_noir: {
    name: 'Latex Noir',
    id: 'latex-noir',
    colors: {
      canvas: '#000000',      // Pure black
      surface: '#1C1C1C',     // Charcoal
      surfaceHover: '#2F2F2F', // Hover state
      accent1: '#FF0000',     // Pure red (primary)
      accent2: '#FFFFFF',     // Pure white (secondary)
      accent3: '#C0C0C0',     // Silver (tertiary)
      accent4: '#808080',     // Gray (quaternary)
      accent5: '#FF69B4',     // Hot pink (quinternary)
      text: '#FFFFFF',        // Pure white
      textMuted: '#C0C0C0',   // Silver
      textDim: '#808080',     // Gray
      border: '#FF0000',      // Pure red border
      success: '#00FF00',     // Lime
      warning: '#FFFF00',     // Yellow
      danger: '#FF0000',      // Red
    },
    radius: '0.125rem',       // 2px ultra-sharp latex edges
    effects: {
      backdrop: false,
      glow: true,
      pattern: 'texture',
    },
    typography: {
      fontFamily: 'roboto', // Clean and precise
    },
    description: 'Sleek latex fetish with pure black, red & white accents, ultra-sharp precision'
  },
  
  sapphic_sunset: {
    name: 'Sapphic Sunset',
    id: 'sapphic-sunset',
    colors: {
      canvas: '#4A1B3A',      // Deep purple-pink
      surface: '#6B2C5C',     // Rich plum
      surfaceHover: '#7D3B6E', // Hover state
      accent1: '#FF7F50',     // Coral (primary)
      accent2: '#FF6347',     // Tomato (secondary)
      accent3: '#FFB347',     // Peach (tertiary)
      accent4: '#DA70D6',     // Orchid (quaternary)
      accent5: '#FF69B4',     // Hot pink (quinternary)
      text: '#FFF8DC',        // Cornsilk
      textMuted: '#FFCCCB',   // Light coral
      textDim: '#DDA0DD',     // Plum
      border: '#FF7F50',      // Coral border
      success: '#98FB98',     // Pale green
      warning: '#FFD700',     // Gold
      danger: '#FF1493',      // Deep pink
    },
    radius: '1rem',           // 16px loving curves
    effects: {
      backdrop: true,
      glow: false,
      pattern: 'subtle',
    },
    typography: {
      fontFamily: 'work-sans', // Loving and warm
    },
    description: 'Sapphic love with coral, tomato & orchid accents, warm lesbian pride and sunset romance'
  },
  
  fetish_palace: {
    name: 'Fetish Palace',
    id: 'fetish-palace',
    colors: {
      canvas: '#2B0A2B',      // Deep purple-black
      surface: '#4A1A4A',     // Dark purple
      surfaceHover: '#5D2A5D', // Hover state
      accent1: '#8A2BE2',     // Blue violet (primary)
      accent2: '#9932CC',     // Dark orchid (secondary)
      accent3: '#BA55D3',     // Medium orchid (tertiary)
      accent4: '#DA70D6',     // Orchid (quaternary)
      accent5: '#EE82EE',     // Violet (quinternary)
      text: '#F8F8FF',        // Ghost white
      textMuted: '#E6E6FA',   // Lavender
      textDim: '#DDA0DD',     // Plum
      border: '#8A2BE2',      // Blue violet border
      success: '#7B68EE',     // Medium slate blue
      warning: '#FFD700',     // Gold
      danger: '#FF1493',      // Deep pink
    },
    radius: '0.375rem',       // 6px palace curves
    effects: {
      backdrop: true,
      glow: true,
      pattern: 'texture',
    },
    typography: {
      fontFamily: 'playfair', // Luxurious and regal
    },
    description: 'Luxurious fetish palace with blue violet, orchid & purple accents, regal kink sophistication'
  }
};

// Apply theme to CSS custom properties
export const applyTheme = (themeKey) => {
  const theme = themes[themeKey];
  if (!theme) return;

  const root = document.documentElement;
  
  // Apply core color variables
  root.style.setProperty('--color-canvas', theme.colors.canvas);
  root.style.setProperty('--color-surface', theme.colors.surface);
  root.style.setProperty('--color-surface-hover', theme.colors.surfaceHover);
  root.style.setProperty('--color-accent-1', theme.colors.accent1);
  root.style.setProperty('--color-accent-2', theme.colors.accent2);
  root.style.setProperty('--color-accent-3', theme.colors.accent3);
  root.style.setProperty('--color-accent-4', theme.colors.accent4);
  root.style.setProperty('--color-accent-5', theme.colors.accent5);
  root.style.setProperty('--color-text', theme.colors.text);
  root.style.setProperty('--color-text-muted', theme.colors.textMuted);
  root.style.setProperty('--color-text-dim', theme.colors.textDim);
  root.style.setProperty('--color-border', theme.colors.border);
  root.style.setProperty('--color-success', theme.colors.success);
  root.style.setProperty('--color-warning', theme.colors.warning);
  root.style.setProperty('--color-danger', theme.colors.danger);
  
  // Calculate RGB values for opacity variants
  const getRgbFromHex = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
      : null;
  };

  // Set RGB values for colors that need opacity variants
  root.style.setProperty('--color-canvas-rgb', getRgbFromHex(theme.colors.canvas));
  root.style.setProperty('--color-text-rgb', getRgbFromHex(theme.colors.text));
  root.style.setProperty('--color-accent-1-rgb', getRgbFromHex(theme.colors.accent1));
  root.style.setProperty('--color-accent-2-rgb', getRgbFromHex(theme.colors.accent2));
  root.style.setProperty('--color-accent-3-rgb', getRgbFromHex(theme.colors.accent3));
  root.style.setProperty('--color-accent-4-rgb', getRgbFromHex(theme.colors.accent4));
  root.style.setProperty('--color-accent-5-rgb', getRgbFromHex(theme.colors.accent5));
  
  // Apply radius setting
  root.style.setProperty('--radius', theme.radius);
  
  // Apply advanced style properties
  
  // Set shadow properties
  root.dataset.shadowType = theme.effects.shadow || 'classic';
  
  // Set gradient properties
  root.dataset.gradientType = theme.effects.gradient || 'linear';
  root.style.setProperty('--gradient-angle', theme.effects.gradient === 'radial' ? 'circle at center' : '135deg');
  
  // Set shape properties
  root.dataset.shapeType = theme.effects.shape || 'standard';
  
  // Set pattern
  root.dataset.pattern = theme.effects.pattern || 'none';
  
  // Specific theme classes for components with complex effects
  const body = document.body;
  
  // Clean all theme-related classes first
  body.classList.remove(
    'has-backdrop-blur', 
    'has-glow',
    'pattern-grid', 
    'pattern-dots', 
    'pattern-diagonal', 
    'pattern-texture', 
    'pattern-subtle'
  );

  // Apply backdrop blur
  if (theme.effects.backdrop) {
    body.classList.add('has-backdrop-blur');
  }
  
  // Apply glow effects
  if (theme.effects.glow) {
    body.classList.add('has-glow');
  }
  
  // Apply pattern
  if (theme.effects.pattern && theme.effects.pattern !== 'none') {
    body.classList.add(`pattern-${theme.effects.pattern}`);
  }
  
  // Store the current theme in local storage
  localStorage.setItem('current-theme', themeKey);
  
  // Apply any stored customizations
  setTimeout(() => applyStoredCustomizations(), 100);
};

// Get current theme from localStorage or default to neonNoir
export const getCurrentTheme = () => {
  return localStorage.getItem('current-theme') || 'neonNoir'; // Default theme
};

// Live theme customization utilities
export const applyCustomRadius = (radiusValue) => {
  const root = document.documentElement;
  root.style.setProperty('--radius', radiusValue);
  // Store custom radius
  localStorage.setItem('custom-radius', radiusValue);
};

/**
 * Advanced Shape Customization System
 * 
 * Applies sophisticated shape styles to UI elements using CSS data attributes.
 * The system supports 21 different shape types organized into 5 categories:
 * 
 * BASIC SHAPES (5):
 * - standard: Normal rounded corners using theme radius
 * - pill: Extra rounded sides (2.5x radius)
 * - angular: Sharp, minimal corners (0.3x radius)
 * - organic: Asymmetric organic feel (varied radius per side)
 * - asymmetric: Mixed corner styles (different radius each corner)
 * 
 * GEOMETRIC SHAPES (4):
 * - hexagon: Six-sided polygon using clip-path
 * - octagon: Eight-sided with cutoff corners
 * - diamond: Rotated square appearance
 * - trapezoid: Slanted top/bottom edges
 * 
 * ARTISTIC SHAPES (4):
 * - blob: Irregular organic shapes with hover morphing
 * - morphic: Flowing, liquid-like borders with animation
 * - crystalline: Sharp, faceted gem-like appearance
 * - wave: Undulating curved edges using ellipse clip-path
 * 
 * FUNCTIONAL SHAPES (4):
 * - tab: Folder tab-like appearance
 * - badge: Shield or badge-like shape
 * - ribbon: Banner/ribbon style with side cuts
 * - ticket: Perforated ticket stub with circular cutouts
 * 
 * MODERN SHAPES (4):
 * - squircle: Perfect blend of square and circle
 * - chamfer: Beveled corners with 45° cuts
 * - rounded-plus: Different radius for each corner
 * - teardrop: Asymmetric droplet shape with rotation
 * 
 * Implementation:
 * - Sets data-shape-type attribute on document.documentElement
 * - CSS selectors target [data-shape-type="value"] .rounded-theme
 * - Shapes persist via localStorage as 'custom-shape'
 * - MutationObserver in AuraWebsite.jsx detects changes
 * 
 * @param {string} shapeType - The shape type identifier
 */
export const applyCustomShape = (shapeType) => {
  const root = document.documentElement;
  root.dataset.shapeType = shapeType;
  // Store custom shape
  localStorage.setItem('custom-shape', shapeType);
};

export const applyCustomShadow = (shadowType) => {
  const root = document.documentElement;
  root.dataset.shadowType = shadowType;
  // Store custom shadow
  localStorage.setItem('custom-shadow', shadowType);
};

export const applyCustomGradient = (gradientType) => {
  const root = document.documentElement;
  root.dataset.gradientType = gradientType;
  root.style.setProperty('--gradient-angle', gradientType === 'radial' ? 'circle at center' : '135deg');
  // Store custom gradient
  localStorage.setItem('custom-gradient', gradientType);
};

/**
 * Apply 3D effect customization to all elements with .rounded-theme class
 * 
 * Available 3D Effects (6):
 * - none: No 3D effects (flat design)
 * - raised: Elevated appearance with subtle depth
 * - pressed: Inset/pressed button effect  
 * - floating: Dramatic elevation with larger shadows
 * - beveled: Angled edges with highlight/shadow gradients
 * - extruded: Deep 3D extrusion effect with layered shadows
 * 
 * Implementation:
 * - Sets data-effect-3d attribute on document.documentElement
 * - CSS selectors target [data-effect-3d="value"] .rounded-theme
 * - 3D effects persist via localStorage as 'custom-3d-effect'
 * - Effects use theme accent colors dynamically
 * - Responsive adjustments for mobile devices
 * - Respects prefers-reduced-motion for accessibility
 * 
 * @param {string} effectType - The 3D effect type identifier
 */
export const applyCustom3DEffect = (effectType) => {
  const root = document.documentElement;
  // Use setAttribute to ensure correct attribute name
  if (effectType && effectType !== 'none') {
    root.setAttribute('data-effect-3d', effectType);
  } else {
    root.removeAttribute('data-effect-3d');
  }
  // Store custom 3D effect
  localStorage.setItem('custom-3d-effect', effectType);
};

export const swapAccentColors = (colorSwap) => {
  const root = document.documentElement;
  const currentTheme = getCurrentTheme();
  const theme = themes[currentTheme];
  
  if (!theme) return;
  
  // Apply color swap based on the swap type
  switch (colorSwap) {
    case 'primary-secondary':
      root.style.setProperty('--color-accent-1', theme.colors.accent2);
      root.style.setProperty('--color-accent-2', theme.colors.accent1);
      break;
    case 'rotate-forward':
      root.style.setProperty('--color-accent-1', theme.colors.accent2);
      root.style.setProperty('--color-accent-2', theme.colors.accent3);
      root.style.setProperty('--color-accent-3', theme.colors.accent4);
      root.style.setProperty('--color-accent-4', theme.colors.accent5);
      root.style.setProperty('--color-accent-5', theme.colors.accent1);
      break;
    case 'rotate-backward':
      root.style.setProperty('--color-accent-1', theme.colors.accent5);
      root.style.setProperty('--color-accent-2', theme.colors.accent1);
      root.style.setProperty('--color-accent-3', theme.colors.accent2);
      root.style.setProperty('--color-accent-4', theme.colors.accent3);
      root.style.setProperty('--color-accent-5', theme.colors.accent4);
      break;
    case 'reset':
    default:
      root.style.setProperty('--color-accent-1', theme.colors.accent1);
      root.style.setProperty('--color-accent-2', theme.colors.accent2);
      root.style.setProperty('--color-accent-3', theme.colors.accent3);
      root.style.setProperty('--color-accent-4', theme.colors.accent4);
      root.style.setProperty('--color-accent-5', theme.colors.accent5);
      break;
  }
  
  // Store color swap state
  localStorage.setItem('custom-color-swap', colorSwap);
};

// Apply custom font type
export const applyCustomFont = (fontType) => {
  const font = fontTypes[fontType] || fontTypes.inter;
  const root = document.documentElement;
  
  // Set data attribute for CSS targeting
  root.setAttribute('data-font-type', fontType);
  
  // Apply CSS custom properties for immediate use
  root.style.setProperty('--font-primary', font.primary);
  root.style.setProperty('--font-secondary', font.secondary);
  root.style.setProperty('--font-mono', font.mono);
  
  // Store custom font selection
  localStorage.setItem('custom-font-type', fontType);
};

// Get stored customizations
export const getStoredCustomizations = () => {
  return {
    radius: localStorage.getItem('custom-radius'),
    shape: localStorage.getItem('custom-shape'),
    shadow: localStorage.getItem('custom-shadow'),
    gradient: localStorage.getItem('custom-gradient'),
    colorSwap: localStorage.getItem('custom-color-swap'),
    effect3d: localStorage.getItem('custom-3d-effect'),
    fontType: localStorage.getItem('custom-font-type') // Add font type
  };
};

// Reset all customizations to theme defaults
export const resetCustomizations = () => {
  localStorage.removeItem('custom-radius');
  localStorage.removeItem('custom-shape');
  localStorage.removeItem('custom-shadow');
  localStorage.removeItem('custom-gradient');
  localStorage.removeItem('custom-color-swap');
  localStorage.removeItem('custom-3d-effect');
  localStorage.removeItem('custom-font-type'); // Add font type
  
  // Reset DOM attributes
  const root = document.documentElement;
  root.removeAttribute('data-shape-type');
  root.removeAttribute('data-shadow-type');
  root.removeAttribute('data-gradient-type');
  root.removeAttribute('data-effect-3d');
  root.removeAttribute('data-font-type'); // Add font type
  
  // Reapply current theme
  const currentTheme = getCurrentTheme();
  applyTheme(currentTheme);
};

// Apply stored customizations after theme change
export const applyStoredCustomizations = () => {
  const customizations = getStoredCustomizations();
  
  if (customizations.radius) {
    applyCustomRadius(customizations.radius);
  }
  if (customizations.shape) {
    applyCustomShape(customizations.shape);
  }
  if (customizations.shadow) {
    applyCustomShadow(customizations.shadow);
  }
  if (customizations.gradient) {
    applyCustomGradient(customizations.gradient);
  }
  if (customizations.colorSwap) {
    swapAccentColors(customizations.colorSwap);
  }
  if (customizations.effect3d) {
    applyCustom3DEffect(customizations.effect3d);
  }
  if (customizations.fontType) {
    applyCustomFont(customizations.fontType); // Add font type
  }
};
