import { themes } from '../themes';
import { useState, useEffect } from 'react';

// Import product images
// Note: These images need to be saved manually from the provided attachments
// with the exact filenames: harness.jpg, restraints.jpg, collar.jpg, toys.jpg

const productImages = {
  harness: '/src/assets/images/harness.jpg',
  restraints: '/src/assets/images/restraints.jpg',
  collar: '/src/assets/images/collar.jpg',
  toys: '/src/assets/images/toys.jpg',
};

// Event banner images
const eventBanners = [
  '/src/assets/images/event_1.jpg',
  '/src/assets/images/event_2.jpg',
];

const AuraWebsite = ({ currentTheme, onSidebarToggle }) => {
  const theme = themes[currentTheme];
  const [customOverrides, setCustomOverrides] = useState({
    shape: null,
    shadow: null,
    gradient: null,
    fontType: null // Add font type override
  });

  // Listen for custom changes and update state to trigger re-render
  useEffect(() => {
    const updateCustomOverrides = () => {
      setCustomOverrides({
        shape: document.documentElement.dataset.shapeType,
        shadow: document.documentElement.dataset.shadowType,
        gradient: document.documentElement.dataset.gradientType,
        effect3d: document.documentElement.getAttribute('data-effect-3d'),
        fontType: document.documentElement.getAttribute('data-font-type') // Add font type
      });
    };

    // Update immediately
    updateCustomOverrides();

    // Set up a mutation observer to watch for changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && 
            (mutation.attributeName === 'data-shape-type' || 
             mutation.attributeName === 'data-shadow-type' || 
             mutation.attributeName === 'data-gradient-type' ||
             mutation.attributeName === 'data-effect-3d' ||
             mutation.attributeName === 'data-font-type')) { // Add font type
          updateCustomOverrides();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-shape-type', 'data-shadow-type', 'data-gradient-type', 'data-effect-3d', 'data-font-type'] // Add font type
    });

    return () => observer.disconnect();
  }, []);
  
  // Helper to get correct shape style based on theme or custom override
  const getShapeClass = () => {
    // Check for custom shape override first
    const customShape = customOverrides.shape;
    if (customShape && customShape !== 'standard') {
      switch (customShape) {
        case 'pill': return 'rounded-pill';
        case 'angular': return 'rounded-angular';
        case 'organic': return 'rounded-organic';
        case 'asymmetric': return 'rounded-asymmetric';
        default: return 'rounded-theme';
      }
    }
    
    // Fall back to theme's default shape
    switch (theme.effects.shape) {
      case 'pill': return 'rounded-pill';
      case 'angular': return 'rounded-angular';
      case 'organic': return 'rounded-organic';
      case 'asymmetric': return 'rounded-asymmetric';
      default: return 'rounded-theme';
    }
  };
  
  // Helper to get correct shadow style based on theme or custom override
  const getShadowClass = () => {
    // Check for custom shadow override first
    const customShadow = customOverrides.shadow;
    if (customShadow) {
      switch (customShadow) {
        case 'neon': return 'shadow-theme-neon';
        case 'soft': return 'shadow-theme-soft';
        case 'inner': return 'shadow-theme-inner';
        case 'harsh': return 'shadow-theme-harsh';
        case 'none': return '';
        default: return 'shadow-theme-classic';
      }
    }
    
    // Fall back to theme's default shadow
    switch (theme.effects.shadow) {
      case 'neon': return 'shadow-theme-neon';
      case 'soft': return 'shadow-theme-soft';
      case 'inner': return 'shadow-theme-inner';
      case 'harsh': return 'shadow-theme-harsh';
      case 'none': return '';
      default: return 'shadow-theme-classic';
    }
  };
  
  // Helper to get correct 3D effect style based on custom override
  const get3DEffectClass = () => {
    // Check for custom 3D effect override
    const custom3DEffect = customOverrides.effect3d;
    if (custom3DEffect) {
      switch (custom3DEffect) {
        case 'raised': return 'effect-3d-raised';
        case 'pressed': return 'effect-3d-pressed';
        case 'floating': return 'effect-3d-floating';
        case 'beveled': return 'effect-3d-beveled';
        case 'extruded': return 'effect-3d-extruded';
        case 'none': return 'effect-3d-none';
        default: return '';
      }
    }
    
    // Default to no 3D effect if not specified
    return '';
  };
  
  // Helper to get gradient style based on theme or custom override
  const getGradientClass = () => {
    // Check for custom gradient override first
    const customGradient = customOverrides.gradient;
    if (customGradient) {
      switch (customGradient) {
        case 'radial': return 'bg-gradient-radial';
        case 'mesh': return 'bg-gradient-mesh';
        case 'duotone': return 'bg-gradient-duotone';
        case 'none': return '';
        default: return 'bg-gradient-linear';
      }
    }
    
    // Fall back to theme's default gradient
    switch (theme.effects.gradient) {
      case 'radial': return 'bg-gradient-radial';
      case 'mesh': return 'bg-gradient-mesh';
      case 'duotone': return 'bg-gradient-duotone';
      case 'none': return '';
      default: return 'bg-gradient-linear';
    }
  };
  
  // Helper to get correct font style based on theme or custom override
  const getFontClass = () => {
    // Check for custom font override first
    const customFont = customOverrides.fontType;
    if (customFont) {
      switch (customFont) {
        case 'inter': return 'font-inter';
        case 'roboto': return 'font-roboto';
        case 'playfair': return 'font-playfair';
        case 'source-code': return 'font-source-code';
        case 'crimson': return 'font-crimson';
        case 'work-sans': return 'font-work-sans';
        case 'space-grotesk': return 'font-space-grotesk';
        case 'fira-code': return 'font-fira-code';
        default: return 'font-inter';
      }
    }
    
    // Fall back to theme's default font
    const themeFont = theme.typography?.fontFamily || 'inter';
    switch (themeFont) {
      case 'inter': return 'font-inter';
      case 'roboto': return 'font-roboto';
      case 'playfair': return 'font-playfair';
      case 'source-code': return 'font-source-code';
      case 'crimson': return 'font-crimson';
      case 'work-sans': return 'font-work-sans';
      case 'space-grotesk': return 'font-space-grotesk';
      case 'fira-code': return 'font-fira-code';
      default: return 'font-inter';
    }
  };
  
  // Generate button class based on theme
  const generateButtonClass = (primary = true) => {
    const shapeClass = getShapeClass();
    const shadowClass = getShadowClass();
    const gradientClass = getGradientClass();
    const effect3DClass = get3DEffectClass();
    
    if (primary) {
      return `${gradientClass && gradientClass !== '' 
        ? gradientClass : 'bg-accent1'} 
        text-canvas ${shapeClass} ${shadowClass} ${effect3DClass} px-8 py-3 font-bold transition-all 
        duration-300 hover:scale-105 btn-touch-ripple`;
    }
    
    return `bg-surface text-text border-accent3 hover:border-accent1 hover:bg-surface-hover 
      ${shapeClass} ${effect3DClass} border px-8 py-3 font-bold transition-all duration-300`;
  };

  // Generate card class based on theme
  const generateCardClass = () => {
    const shapeClass = getShapeClass();
    const shadowClass = getShadowClass();
    const effect3DClass = get3DEffectClass();
    
    return `bg-surface hover:bg-surface-hover ${shapeClass} ${shadowClass} ${effect3DClass} 
      p-6 transition-all duration-300 ${theme.effects.backdrop ? 'backdrop-blur-subtle' : ''}`;
  };

  return (
    <div className={getFontClass()}>
      {/* Header & Navigation */}
      <header className="fixed top-0 right-0 left-0 z-40">
        <div className={`bg-canvas/70 ${theme.effects.backdrop ? 'backdrop-blur-subtle' : ''} 
          border-border container mx-auto flex items-center justify-between border-b px-6 py-4`}>
          <h1 className="text-accent1 text-2xl font-bold">Aura</h1>
          <nav className="hidden items-center space-x-8 md:flex">
            <a href="#marketplace" className="hover:text-accent3 transition-colors duration-300">Marketplace</a>
            <a href="#events" className="hover:text-accent4 transition-colors duration-300">Events</a>
            <a href="#about" className="hover:text-accent5 transition-colors duration-300">Our Ethos</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className={generateButtonClass()}>
              Sign In
            </button>
            {/* Theme Settings Button */}
            <button
              onClick={onSidebarToggle}
              className={`bg-surface text-text border-accent3 hover:border-accent1 hover:bg-surface-hover ${getShapeClass()} ${get3DEffectClass()} border px-8 py-3 font-bold transition-all duration-300 burger-menu`}
              aria-label="Toggle theme settings"
            >
              Change Theme
            </button>
          </div>
        </div>
      </header>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 text-center">
          <h2 className="mb-4 text-5xl leading-tight font-light">
            A Boutique Space for the <span className="text-accent1 font-medium">Exploratory</span>
          </h2>
          <p className="text-text/80 mx-auto mb-8 max-w-3xl text-xl">
            Discover a curated marketplace and gender-open events built on a foundation of safety, consent, and body-positive values.
          </p>
          <div className="flex justify-center space-x-4">
            <button className={generateButtonClass()}>
              Explore Marketplace
            </button>
            <button className={generateButtonClass(false)}>
              Find Events
            </button>
          </div>
        </section>

        {/* Curated Products Section */}
        <section id="marketplace" className="container mx-auto px-6 py-16">
          <h3 className="mb-10 text-center text-3xl font-light">Curated Products</h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Product Cards */}
            {[
              {
                name: 'Elegant Harness',
                price: '$85.00',
                description: 'Handcrafted vegan leather with adjustable fit.',
                image: productImages.harness,
                alt: 'Red leather bondage harness with metal studs'
              },
              {
                name: 'Silk Restraints',
                price: '$45.00',
                description: 'Ultra-soft with quick-release mechanism.',
                image: productImages.restraints,
                alt: 'Collection of pink and purple adult toys'
              },
              {
                name: 'Custom Collar',
                price: '$65.00',
                description: 'Personalized with engraved details.',
                image: productImages.collar,
                alt: 'Black leather flogger with handle'
              },
              {
                name: 'Body-Safe Toy',
                price: '$75.00',
                description: 'Medical-grade materials with multiple settings.',
                image: productImages.toys,
                alt: 'Adult toy collection with various accessories'
              }
            ].map((product, index) => (
              <div key={index} className={`${generateCardClass()} group`}>
                <div className={`relative overflow-hidden h-48 mb-4 bg-accent2 rounded-theme`}>
                  <img 
                    src={product.image}
                    alt={product.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback to placeholder if image doesn't exist
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="absolute inset-0 flex justify-center items-center bg-accent2 hidden">
                    <span className="text-text text-lg">Product Image</span>
                  </div>
                </div>
                <h4 className="text-accent1 text-xl font-medium mb-2">{product.name}</h4>
                <p className="text-text-muted text-sm mb-3">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-accent1 font-bold">{product.price}</span>
                  <button className={`text-xs px-4 py-2 ${getShapeClass()} ${getShadowClass()} ${get3DEffectClass()} border border-accent1 text-accent1 hover:scale-95 transition-transform duration-300`}>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Events Section */}

        <section id="events" className={`py-16 ${theme.effects.pattern !== 'none' ? `pattern-${theme.effects.pattern}` : ''}`}>
          <div className="container mx-auto px-6">
            <h3 className="mb-10 text-center text-3xl font-light">Upcoming Events</h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {[
                {
                  title: 'FLINTA Meetup',
                  date: 'Wednesday 18.06.2025',
                  time: 'Evening',
                  location: 'Bodysharing',
                  banner: eventBanners[0],
                  description: 'A safe and empowering meetup for FLINTA individuals. Join us for an evening of connection and community.'
                },
                {
                  title: 'Consent Discussion Group',
                  date: 'Nov 20',
                  time: '6:30 PM',
                  location: 'Community Room',
                  banner: eventBanners[1],
                  description: 'Open discussion on consent, boundaries, and communication.'
                }
              ].map((event, index) => (
                <div key={index} className={`${generateCardClass()} group`}>
                  <div className={`relative overflow-hidden h-48 mb-4 bg-accent2 rounded-theme`}>
                    <img
                      src={event.banner}
                      alt={event.title + ' banner'}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    <div className="absolute inset-0 flex justify-center items-center bg-accent2 hidden">
                      <span className="text-text text-lg">Event Banner</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-accent1 text-xl font-medium">{event.title}</h4>
                    <span className="text-accent2 font-bold">{event.date}</span>
                  </div>
                  <div className="mb-2">
                    <p className="text-text-muted"><span className="text-text">Time:</span> {event.time}</p>
                    <p className="text-text-muted"><span className="text-text">Location:</span> {event.location}</p>
                  </div>
                  <p className="text-text-muted text-sm mb-3">{event.description}</p>
                  <button className={`w-full text-center py-2 ${getShapeClass()} ${getShadowClass()} ${get3DEffectClass()} border border-accent1 text-accent1 hover:scale-95 transition-transform duration-300`}>
                    Reserve a Spot
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Ethos Section */}
        <section id="about" className="container mx-auto px-6 py-16 text-center">
          <h3 className="mb-5 text-3xl font-light">Our Ethos</h3>
          <p className="text-text/80 mx-auto max-w-2xl text-lg">
            We believe in creating spaces that honor personal boundaries while celebrating authentic expression.
            Every item we curate and event we host uplifts our core values of consent, inclusivity, and exploration.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {['Consent-First', 'Body Positivity', 'Gender Inclusive', 'Quality Assured'].map((value, index) => (
              <span key={index} className={`inline-block px-4 py-2 ${getShapeClass()} ${get3DEffectClass()} bg-surface text-accent3 border border-accent3`}>
                {value}
              </span>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-surface border-t border-border py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-accent1 text-xl font-bold">Aura</h2>
              <p className="text-text-dim mt-2">A safe space for exploration.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-text-muted hover:text-accent3 transition-colors">Privacy</a>
              <a href="#" className="text-text-muted hover:text-accent3 transition-colors">Terms</a>
              <a href="#" className="text-text-muted hover:text-accent3 transition-colors">Contact</a>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-text-dim text-sm">
            &copy; {new Date().getFullYear()} Aura. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AuraWebsite;
