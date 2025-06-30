import { themes } from '../themes';
import { useState, useEffect } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// Use public assets for better GitHub Pages compatibility
const getImagePath = (imageName) => {
  const base = import.meta.env.BASE_URL || '/';
  return `${base}images/${imageName}`;
};

const productImages = {
  harness: getImagePath('harness.jpg'),
  restraints: getImagePath('restraints.jpg'),
  collar: getImagePath('collar.jpg'),
  toys: getImagePath('toys.jpg'),
};

// Event banner images
const eventBanners = [
  getImagePath('event_1.jpg'),
  getImagePath('event_2.jpg'),
];


const navigation = [
  { name: 'Marketplace', href: '#marketplace' },
  { name: 'Events', href: '#events' },
  { name: 'Our Ethos', href: '#about' },
];

const AuraWebsite = ({ currentTheme, onSidebarToggle }) => {
  const theme = themes[currentTheme];
  const [customOverrides, setCustomOverrides] = useState({
    shape: null,
    shadow: null,
    gradient: null,
    fontType: null
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Listen for custom changes and update state to trigger re-render
  useEffect(() => {
    const updateCustomOverrides = () => {
      setCustomOverrides({
        shape: document.documentElement.dataset.shapeType,
        shadow: document.documentElement.dataset.shadowType,
        gradient: document.documentElement.dataset.gradientType,
        // effect3d removed
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
             // mutation.attributeName === 'data-effect-3d' ||
             mutation.attributeName === 'data-font-type')) { // Add font type
          updateCustomOverrides();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-shape-type', 'data-shadow-type', 'data-gradient-type', 'data-font-type'] // effect-3d removed
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
    
    if (primary) {
      return `${gradientClass && gradientClass !== '' 
        ? gradientClass : 'bg-accent1'} 
        text-canvas ${shapeClass} ${shadowClass} px-8 py-3 font-bold transition-all 
        duration-300 hover:scale-105 btn-touch-ripple`;
    }
    
    return `bg-surface text-text border-accent3 hover:border-accent1 hover:bg-surface-hover 
      ${shapeClass} border px-8 py-3 font-bold transition-all duration-300`;
  };

  // Generate card class based on theme
  const generateCardClass = () => {
    const shapeClass = getShapeClass();
    const shadowClass = getShadowClass();
    
    return `bg-surface hover:bg-surface-hover ${shapeClass} ${shadowClass} 
      p-6 transition-all duration-300 ${theme.effects.backdrop ? 'backdrop-blur-subtle' : ''}`;
  };

  return (
    <div className={getFontClass()} style={{ position: 'relative', minHeight: '100vh' }}>
      {/* --- Top gradient blob (global, fixed) --- */}
      <div
        aria-hidden="true"
        className="fixed inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl pointer-events-none sm:-top-80"
        style={{ pointerEvents: 'none' }}
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            backgroundImage: `linear-gradient(135deg, ${theme.colors.accent1} 0%, ${theme.colors.accent2} 100%)`,
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      {/* Header & Mobile Menu */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 flex items-center">
              <span className="sr-only">Aura</span>
              <h1 className="text-accent1 text-2xl font-bold">Aura</h1>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-accent1"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="size-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold text-accent1 hover:text-accent3 transition-colors">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-x-4">
            <button className={generateButtonClass()}>
              Sign In
            </button>
            <button
              onClick={onSidebarToggle}
              className={`bg-surface text-text border-accent3 hover:border-accent1 hover:bg-surface-hover ${getShapeClass()} border px-8 py-3 font-bold transition-all duration-300 burger-menu`}
              aria-label="Toggle theme settings"
            >
              Change Theme
            </button>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-canvas p-6 sm:max-w-sm sm:ring-1 sm:ring-border">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5 flex items-center">
                <span className="sr-only">Aura</span>
                <h1 className="text-accent1 text-2xl font-bold">Aura</h1>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-accent1"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="size-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-border">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-accent1 hover:bg-surface-hover"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6 flex flex-col gap-2">
                  <button className={generateButtonClass()}>
                    Sign In
                  </button>
                  <button
                    onClick={() => { setMobileMenuOpen(false); onSidebarToggle(); }}
                    className={`bg-surface text-text border-accent3 hover:border-accent1 hover:bg-surface-hover ${getShapeClass()} border px-8 py-3 font-bold transition-all duration-300 burger-menu`}
                    aria-label="Toggle theme settings"
                  >
                    Change Theme
                  </button>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* Main Content */}
      <main className="relative isolate px-0 pt-32 lg:px-0 bg-canvas min-h-screen">
        {/* Hero Section - Tailwind UI style */}
        <section>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center px-6">
            <h2 className="text-balance text-5xl font-extrabold tracking-tight text-accent1 sm:text-7xl mb-6">
              A Boutique Space for the{' '}
              <span
                className="font-extrabold bg-gradient-to-r from-accent1 via-accent3 to-accent2 bg-clip-text text-transparent"
                style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              >
                Exploratory
              </span>
            </h2>
            <p className="mt-8 text-lg font-medium text-text/80 sm:text-xl max-w-2xl mx-auto">
              Discover a curated marketplace and gender-open events built on a foundation of safety, consent, and body-positive values.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button className={generateButtonClass()}>
                Explore Marketplace
              </button>
              <button className={generateButtonClass(false)}>
                Find Events
              </button>
            </div>
          </div>
      {/* --- Bottom gradient blob (global, fixed) --- */}
      <div
        aria-hidden="true"
        className="fixed inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl pointer-events-none"
        style={{ pointerEvents: 'none' }}
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            backgroundImage: `linear-gradient(135deg, ${theme.colors.accent1} 0%, ${theme.colors.accent2} 100%)`,
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
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
                <div className={`relative overflow-hidden h-72 mb-4 bg-accent2 rounded-theme`}>
                  <img 
                    src={product.image}
                    alt={product.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    style={{ maxHeight: '18rem' }}
                    onError={(e) => {
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
                  <button className={`text-xs px-4 py-2 ${getShapeClass()} ${getShadowClass()} border border-accent1 text-accent1 hover:scale-95 transition-transform duration-300`}>
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
                  <div className={`relative overflow-hidden h-72 mb-4 bg-accent2 rounded-theme`}>
                    <img
                      src={event.banner}
                      alt={event.title + ' banner'}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      style={{ maxHeight: '18rem' }}
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
                  <button className={`w-full text-center py-2 ${getShapeClass()} ${getShadowClass()} border border-accent1 text-accent1 hover:scale-95 transition-transform duration-300`}>
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
              <span key={index} className={`inline-block px-4 py-2 ${getShapeClass()} bg-surface text-accent3 border border-accent3`}>
                {value}
              </span>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
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
