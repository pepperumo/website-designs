

/**
 * Tailwind theme config using CSS variables for full multi-theme support.
 *
 * All color, radius, shadow, and font tokens reference CSS variables set by JS (see themes.js).
 *
 * Use: import this file in tailwind.config.js and spread into theme.extend.
 */

const withVars = (cssVar, fallback) => `var(${cssVar}${fallback ? ', ' + fallback : ''})`;

module.exports = {
  colors: {
    canvas: withVars('--color-canvas', '#0B0B11'),
    surface: withVars('--color-surface', '#1A1A22'),
    'surface-hover': withVars('--color-surface-hover', '#242432'),
    accent1: withVars('--color-accent-1', '#E000B8'),
    accent2: withVars('--color-accent-2', '#4F00FF'),
    accent3: withVars('--color-accent-3', '#00D4FF'),
    accent4: withVars('--color-accent-4', '#FF006B'),
    accent5: withVars('--color-accent-5', '#9D00FF'),
    text: withVars('--color-text', '#F0F0F0'),
    'text-muted': withVars('--color-text-muted', '#B8B8C0'),
    'text-dim': withVars('--color-text-dim', '#808090'),
    border: withVars('--color-border', '#2A2A38'),
    success: withVars('--color-success', '#00FF88'),
    warning: withVars('--color-warning', '#FFB800'),
    danger: withVars('--color-danger', '#FF3860'),
  },
  fontFamily: {
    sans: withVars('--font-primary', 'Inter, system-ui, sans-serif'),
    heading: withVars('--font-secondary', 'Poppins, sans-serif'),
    mono: withVars('--font-mono', 'JetBrains Mono, monospace'),
  },
  borderRadius: {
    DEFAULT: withVars('--radius', '1rem'),
    theme: withVars('--radius', '1rem'),
    pill: '2.5rem',
    angular: '0.3rem',
    organic: '1.2rem',
    asymmetric: '1rem 0.6rem 1.4rem 1rem',
  },
  boxShadow: {
    'theme-soft': '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
    'theme-classic': '0 4px 8px rgba(0,0,0,0.15)',
    'theme-neon': '0 0 20px var(--color-accent-1), 0 0 40px rgba(224,0,184,0.4)',
    'theme-inner': 'inset 0 2px 4px rgba(0,0,0,0.2)',
    'theme-harsh': '8px 8px 0px var(--color-accent-2)',
  },
  backgroundImage: {
    'gradient-linear': 'linear-gradient(var(--gradient-angle, 135deg), var(--color-accent-1) 0%, var(--color-accent-2) 35%, var(--color-accent-3) 70%, var(--color-accent-1) 100%)',
    'gradient-radial': 'radial-gradient(circle at center, var(--color-accent-1) 0%, var(--color-accent-2) 35%, var(--color-accent-3) 70%, var(--color-accent-1) 100%)',
    'gradient-duotone': 'linear-gradient(var(--gradient-angle, 135deg), var(--color-accent-1) 0%, var(--color-accent-2) 100%)',
  },
  spacing: {
    section: '5rem',
    container: '2rem',
    card: '1.5rem',
    button: '0.75rem 1.5rem',
  },
};
