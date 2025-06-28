import { useState, useEffect } from 'react';
import { 
  applyCustomRadius, 
  applyCustomShape, 
  applyCustomShadow, 
  applyCustomGradient, 
  applyCustom3DEffect,
  applyCustomFont,
  swapAccentColors,
  getStoredCustomizations,
  resetCustomizations,
  applyTheme,
  themes as allThemes,
  fontTypes
} from '../themes';

const ThemeSidebar = ({ isOpen, onClose, currentTheme, onThemeChange, setCurrentTheme, themes }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeCustomTab, setActiveCustomTab] = useState('radius');
  const [customizations, setCustomizations] = useState(getStoredCustomizations());

  // Get array of theme keys for navigation
  const themeKeys = Object.keys(themes);
  const currentIndex = themeKeys.indexOf(currentTheme);

  // Navigate to previous theme
  const goToPreviousTheme = () => {
    const prevIndex = currentIndex === 0 ? themeKeys.length - 1 : currentIndex - 1;
    onThemeChange(themeKeys[prevIndex]);
  };

  // Navigate to next theme
  const goToNextTheme = () => {
    const nextIndex = currentIndex === themeKeys.length - 1 ? 0 : currentIndex + 1;
    onThemeChange(themeKeys[nextIndex]);
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.theme-sidebar') && !event.target.closest('.burger-menu')) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Remove body scroll lock since we want to see live changes
    } else {
      // Ensure scroll is restored
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Handle escape key to close sidebar
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [isOpen, onClose]);

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event) => {
      // Only handle if sidebar is open and no input/textarea is focused
      if (!isOpen || document.activeElement.tagName === 'INPUT' || 
          document.activeElement.tagName === 'TEXTAREA') return;

      if (event.key === 'ArrowLeft' && event.ctrlKey) {
        event.preventDefault();
        goToPreviousTheme();
      } else if (event.key === 'ArrowRight' && event.ctrlKey) {
        event.preventDefault();
        goToNextTheme();
      } else if (event.key === 'ArrowUp' && event.ctrlKey && event.shiftKey) {
        // Cycle through shapes backwards
        event.preventDefault();
        const shapes = ['standard', 'pill', 'angular', 'organic', 'asymmetric', 'blob', 'morphic', 'squircle', 'chamfer', 'rounded-plus'];
        const currentShapeIndex = shapes.indexOf(customizations.shape || 'standard');
        const prevShapeIndex = currentShapeIndex === 0 ? shapes.length - 1 : currentShapeIndex - 1;
        const newShape = shapes[prevShapeIndex];
        applyCustomShape(newShape);
        setCustomizations(prev => ({ ...prev, shape: newShape }));
      } else if (event.key === 'ArrowDown' && event.ctrlKey && event.shiftKey) {
        // Cycle through shapes forwards
        event.preventDefault();
        const shapes = ['standard', 'pill', 'angular', 'organic', 'asymmetric', 'blob', 'morphic', 'squircle', 'chamfer', 'rounded-plus'];
        const currentShapeIndex = shapes.indexOf(customizations.shape || 'standard');
        const nextShapeIndex = currentShapeIndex === shapes.length - 1 ? 0 : currentShapeIndex + 1;
        const newShape = shapes[nextShapeIndex];
        applyCustomShape(newShape);
        setCustomizations(prev => ({ ...prev, shape: newShape }));
      } else if (event.key === '3' && event.ctrlKey && event.shiftKey) {
        // Cycle through 3D effects
        event.preventDefault();
        const effects3d = ['none', 'raised', 'pressed', 'floating', 'beveled', 'extruded'];
        const currentEffectIndex = effects3d.indexOf(customizations.effect3d || 'none');
        const nextEffectIndex = currentEffectIndex === effects3d.length - 1 ? 0 : currentEffectIndex + 1;
        const newEffect = effects3d[nextEffectIndex];
        applyCustom3DEffect(newEffect);
        setCustomizations(prev => ({ ...prev, effect3d: newEffect }));
      } else if (event.key === 'f' && event.ctrlKey && event.shiftKey) {
        // Cycle through fonts
        event.preventDefault();
        const fonts = Object.keys(fontTypes);
        const currentFontIndex = fonts.indexOf(customizations.fontType || 'inter');
        const nextFontIndex = currentFontIndex === fonts.length - 1 ? 0 : currentFontIndex + 1;
        const newFont = fonts[nextFontIndex];
        applyCustomFont(newFont);
        setCustomizations(prev => ({ ...prev, fontType: newFont }));
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentIndex, isOpen, customizations.shape, customizations.effect3d, customizations.fontType, setCustomizations]);

  // Customization handlers
  const handleRadiusChange = (radius) => {
    applyCustomRadius(radius);
    setCustomizations(prev => ({ ...prev, radius }));
  };

  const handleShapeChange = (shape) => {
    applyCustomShape(shape);
    setCustomizations(prev => ({ ...prev, shape }));
  };

  const handleShadowChange = (shadow) => {
    applyCustomShadow(shadow);
    setCustomizations(prev => ({ ...prev, shadow }));
  };

  const handleGradientChange = (gradient) => {
    applyCustomGradient(gradient);
    setCustomizations(prev => ({ ...prev, gradient }));
  };

  const handle3DEffectChange = (effect3d) => {
    applyCustom3DEffect(effect3d);
    setCustomizations(prev => ({ ...prev, effect3d }));
  };

  const handleColorSwap = (colorSwap) => {
    swapAccentColors(colorSwap);
    setCustomizations(prev => ({ ...prev, colorSwap }));
  };

  const handleResetCustomizations = () => {
    resetCustomizations();
    setCustomizations(getStoredCustomizations());
  };

  // Font change handler
  const handleFontChange = (fontType) => {
    applyCustomFont(fontType);
    setCustomizations(prev => ({ ...prev, fontType }));
  };

  // Random Mix function to randomize everything
  const handleRandomMix = () => {
    // Available options
    const themeKeys = Object.keys(allThemes);
    const shapes = ['standard', 'pill', 'angular', 'organic', 'asymmetric', 'blob', 'morphic', 'squircle', 'chamfer', 'rounded-plus'];
    const shadows = ['none', 'soft', 'classic', 'neon', 'inner', 'harsh'];
    const gradients = ['none', 'linear', 'radial', 'duotone'];
    const effects3d = ['none', 'raised', 'pressed', 'floating', 'beveled', 'extruded'];
    const colors = ['reset', 'primary-secondary', 'rotate-forward', 'rotate-backward'];
    const radiusOptions = ['0', '0.25rem', '0.5rem', '0.75rem', '1rem', '2rem'];
    const fontOptions = Object.keys(fontTypes);

    // Random selections
    const randomTheme = themeKeys[Math.floor(Math.random() * themeKeys.length)];
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    const randomShadow = shadows[Math.floor(Math.random() * shadows.length)];
    const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
    const randomEffect3d = effects3d[Math.floor(Math.random() * effects3d.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomRadius = radiusOptions[Math.floor(Math.random() * radiusOptions.length)];
    const randomFont = fontOptions[Math.floor(Math.random() * fontOptions.length)];

    // Apply random theme first
    setCurrentTheme(randomTheme);
    onThemeChange(randomTheme);
    applyTheme(randomTheme);
    
    // Apply random customizations
    handleRadiusChange(randomRadius);
    handleShapeChange(randomShape);
    handleShadowChange(randomShadow);
    handleGradientChange(randomGradient);
    handle3DEffectChange(randomEffect3d);
    handleColorSwap(randomColor);
    handleFontChange(randomFont);

    // Update state
    setCustomizations({
      radius: randomRadius,
      shape: randomShape,
      shadow: randomShadow,
      gradient: randomGradient,
      effect3d: randomEffect3d,
      colorSwap: randomColor,
      fontType: randomFont
    });
  };

  // Update customizations state when theme changes
  useEffect(() => {
    setCustomizations(getStoredCustomizations());
  }, [currentTheme]);

  return (
    <>
      {/* Sidebar */}
      <div className={`theme-sidebar fixed top-0 right-0 h-full w-80 md:w-96 bg-canvas border-l-2 border-accent1 z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-accent1 text-xl font-bold">🎨 Theme Settings</h2>
          <button
            onClick={onClose}
            className="text-text-muted hover:text-accent1 transition-colors duration-300 text-2xl leading-none"
            aria-label="Close sidebar"
          >
            ×
          </button>
        </div>

        {/* Theme Navigation Controls */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center gap-2 mb-4">
            {/* Previous Theme Button */}
            <button
              onClick={goToPreviousTheme}
              className="bg-surface border-accent2 text-accent2 hover:border-accent1 hover:text-accent1 hover:bg-surface-hover hover:scale-95 rounded-theme border px-3 py-2 font-bold transition-all duration-300"
              title="Previous Theme (Ctrl + ←)"
            >
              ◀
            </button>

            {/* Current Theme Name Display */}
            <div className="bg-surface border-accent1 text-accent1 rounded-theme border px-4 py-2 font-bold flex-1 text-center backdrop-blur-subtle">
              <div className="text-sm opacity-75">{currentIndex + 1}/{themeKeys.length}</div>
              <div className="text-sm">{themes[currentTheme].name}</div>
            </div>

            {/* Next Theme Button */}
            <button
              onClick={goToNextTheme}
              className="bg-surface border-accent2 text-accent2 hover:border-accent1 hover:text-accent1 hover:bg-surface-hover hover:scale-95 rounded-theme border px-3 py-2 font-bold transition-all duration-300"
              title="Next Theme (Ctrl + →)"
            >
              ▶
            </button>
          </div>

          {/* Theme Dropdown Toggle */}
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="bg-surface border-accent1 text-text hover:border-accent2 hover:bg-surface-hover hover:scale-95 rounded-theme border-2 px-4 py-2 font-bold transition-all duration-300 backdrop-blur-subtle w-full mb-4"
          >
            {isDropdownOpen ? '▲ Hide All Themes' : '▼ Show All Themes'}
          </button>

          {/* Reset Customizations Button */}
          <button
            onClick={handleResetCustomizations}
            className="bg-surface border-warning text-warning hover:border-accent1 hover:text-accent1 hover:scale-95 rounded-theme border px-3 py-2 text-sm transition-all duration-300 w-full mb-2"
          >
            🔄 Reset Customizations
          </button>

          {/* Random Mix Button */}
          <button
            onClick={handleRandomMix}
            className="bg-surface border-accent3 text-accent3 hover:border-accent1 hover:text-accent1 hover:scale-95 rounded-theme border px-3 py-2 text-sm transition-all duration-300 w-full"
          >
            🎲 Random Mix
          </button>
        </div>

        {/* Advanced Customization Controls */}
        <div className="border-b border-border">
          <div className="p-6">
            <h3 className="text-accent1 text-lg font-bold mb-4">🎛️ Live Customization</h3>
            
            {/* Customization Tabs */}
            <div className="flex flex-wrap gap-1 mb-4">
              {[
                { id: 'radius', label: '📐 Radius', icon: '●' },
                { id: 'shape', label: '🔷 Shape', icon: '◆' },
                { id: 'shadow', label: '🌟 Shadow', icon: '✦' },
                { id: 'gradient', label: '🌈 Gradient', icon: '▦' },
                { id: '3d', label: '🧊 3D', icon: '◉' },
                { id: 'fonts', label: '🔤 Fonts', icon: 'Aa' },
                { id: 'colors', label: '🎨 Colors', icon: '◉' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCustomTab(tab.id)}
                  className={`px-3 py-1 text-xs rounded-theme border transition-all duration-300 hover:scale-95 ${
                    activeCustomTab === tab.id
                      ? 'border-accent1 bg-accent1/20 text-accent1'
                      : 'border-border text-text-muted hover:border-accent2 hover:text-accent2'
                  }`}
                >
                  {tab.icon} {tab.label.split(' ')[1]}
                </button>
              ))}
            </div>

            {/* Radius Controls */}
            {activeCustomTab === 'radius' && (
              <div className="space-y-3">
                <h4 className="text-accent2 font-medium text-sm">Border Radius</h4>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: 'None', value: '0' },
                    { label: 'Small', value: '0.25rem' },
                    { label: 'Medium', value: '0.5rem' },
                    { label: 'Large', value: '0.75rem' },
                    { label: 'XL', value: '1rem' },
                    { label: 'Pill', value: '2rem' }
                  ].map(option => (
                    <button
                      key={option.label}
                      onClick={() => handleRadiusChange(option.value)}
                      className={`p-2 text-xs rounded border transition-all duration-300 hover:scale-95 ${
                        customizations.radius === option.value
                          ? 'border-accent1 bg-accent1/20 text-accent1'
                          : 'border-border text-text hover:border-accent2 hover:bg-surface-hover'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
                
                {/* Custom Radius Slider */}
                <div className="mt-3">
                  <label className="text-text-muted text-xs block mb-1">Custom (0-2rem)</label>
                  <input
                    type="range"
                    min="0"
                    max="32"
                    step="1"
                    onChange={(e) => handleRadiusChange(`${e.target.value}px`)}
                    className="w-full accent-accent1"
                  />
                </div>
              </div>
            )}

            {/* Shape Controls */}
            {activeCustomTab === 'shape' && (
              <div className="space-y-3">
                <h4 className="text-accent2 font-medium text-sm">Card Shape Style</h4>
                
                
                {/* Basic Shapes */}
                <div className="mb-4">
                  <h5 className="text-xs text-text-muted mb-2 font-medium flex items-center gap-2">
                    <span className="inline-block w-3 h-3 bg-accent2 rounded"></span>
                    🔸 Basic Shapes
                  </h5>
                  <div className="space-y-2">
                    {[
                      { label: 'Standard', value: 'standard', desc: 'Normal rounded corners', icon: '▢' },
                      { label: 'Pill', value: 'pill', desc: 'Extra rounded sides', icon: '⬭' },
                      { label: 'Angular', value: 'angular', desc: 'Sharp, minimal corners', icon: '▪' },
                      { label: 'Organic', value: 'organic', desc: 'Asymmetric organic feel', icon: '⬟' },
                      { label: 'Asymmetric', value: 'asymmetric', desc: 'Mixed corner styles', icon: '⟐' }
                    ].map(option => (
                      <button
                        key={option.value}
                        onClick={() => handleShapeChange(option.value)}
                        className={`w-full p-3 text-left rounded border transition-all duration-300 hover:scale-95 ${
                          customizations.shape === option.value
                            ? 'border-accent1 bg-accent1/20 text-accent1'
                            : 'border-border text-text hover:border-accent2 hover:bg-surface-hover'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-accent2 text-lg">{option.icon}</span>
                          <div className="flex-1">
                            <div className="font-medium text-sm">{option.label}</div>
                            <div className="text-xs text-text-muted">{option.desc}</div>
                          </div>
                          <div className="w-6 h-6 bg-accent2/30 border border-accent2/50 rounded transition-all duration-300" 
                               style={{ borderRadius: option.value === 'standard' ? 'var(--radius)' : 
                                                    option.value === 'pill' ? 'calc(var(--radius) * 2.5)' :
                                                    option.value === 'angular' ? 'calc(var(--radius) * 0.3)' :
                                                    option.value === 'organic' ? 'var(--radius) calc(var(--radius) * 1.2)' :
                                                    option.value === 'asymmetric' ? 'var(--radius) calc(var(--radius) * 0.6) calc(var(--radius) * 1.4) var(--radius)' : 'var(--radius)' }}></div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Artistic Shapes */}
                <div className="mb-4">
                  <h5 className="text-xs text-text-muted mb-2 font-medium flex items-center gap-2">
                    <span className="inline-block w-3 h-3 bg-accent4 rounded"></span>
                    🎨 Artistic Shapes
                  </h5>
                  <div className="space-y-2">
                    {[
                      { label: 'Blob', value: 'blob', desc: 'Irregular organic shapes', icon: '🫧' },
                      { label: 'Morphic', value: 'morphic', desc: 'Flowing, liquid-like borders', icon: '💧' }
                    ].map(option => (
                      <button
                        key={option.value}
                        onClick={() => handleShapeChange(option.value)}
                        className={`w-full p-3 text-left rounded border transition-all duration-300 hover:scale-95 ${
                          customizations.shape === option.value
                            ? 'border-accent1 bg-accent1/20 text-accent1'
                            : 'border-border text-text hover:border-accent2 hover:bg-surface-hover'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-accent4 text-lg">{option.icon}</span>
                          <div className="flex-1">
                            <div className="font-medium text-sm">{option.label}</div>
                            <div className="text-xs text-text-muted">{option.desc}</div>
                          </div>
                          <div className="w-6 h-6 bg-accent4/30 border border-accent4/50 transition-all duration-300" 
                               style={{ 
                                 borderRadius: option.value === 'blob' ? '60% 40% 30% 70% / 60% 30% 70% 40%' :
                                             option.value === 'morphic' ? '50% 20% 80% 30% / 40% 70% 30% 60%' : '0.25rem',
                                 transform: option.value === 'morphic' ? 'rotate(-2deg)' : 'none'
                               }}></div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Modern Shapes */}
                <div className="mb-4">
                  <h5 className="text-xs text-text-muted mb-2 font-medium flex items-center gap-2">
                    <span className="inline-block w-3 h-3 bg-accent1 rounded"></span>
                    ✨ Modern Shapes
                  </h5>
                  <div className="space-y-2">
                    {[
                      { label: 'Squircle', value: 'squircle', desc: 'Perfect blend square + circle', icon: '⬜' },
                      { label: 'Chamfer', value: 'chamfer', desc: 'Beveled corners (45° cuts)', icon: '⧄' },
                      { label: 'Rounded Plus', value: 'rounded-plus', desc: 'Different radius each corner', icon: '➕' },
                      { label: 'Teardrop', value: 'teardrop', desc: 'Asymmetric droplet shape', icon: '💧' }
                    ].map(option => (
                      <button
                        key={option.value}
                        onClick={() => handleShapeChange(option.value)}
                        className={`w-full p-3 text-left rounded border transition-all duration-300 hover:scale-95 ${
                          customizations.shape === option.value
                            ? 'border-accent1 bg-accent1/20 text-accent1'
                            : 'border-border text-text hover:border-accent2 hover:bg-surface-hover'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-accent1 text-lg">{option.icon}</span>
                          <div className="flex-1">
                            <div className="font-medium text-sm">{option.label}</div>
                            <div className="text-xs text-text-muted">{option.desc}</div>
                          </div>
                          <div className={`w-6 h-6 bg-accent1/30 border border-accent1/50 transition-all duration-300 ${option.value === 'teardrop' ? 'rounded-tl-full rounded-tr-none rounded-bl-full rounded-br-full' : ''}`}
                               style={{ 
                                 borderRadius: option.value === 'squircle' ? '1rem 1rem 1rem 1rem' :
                                             option.value === 'rounded-plus' ? '0.25rem 0.5rem 0.375rem 0.125rem' : 
                                             option.value === 'teardrop' ? '50% 0 50% 50%' : '0.25rem',
                                 clipPath: option.value === 'chamfer' ? 'polygon(3px 0%, 100% 0%, 100% calc(100% - 3px), calc(100% - 3px) 100%, 0% 100%, 0% 3px)' : 'none',
                                 transform: option.value === 'teardrop' ? 'rotate(45deg)' : 'none'
                               }}></div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Shadow Controls */}
            {activeCustomTab === 'shadow' && (
              <div className="space-y-3">
                <h4 className="text-accent2 font-medium text-sm">Shadow Style</h4>
                <div className="space-y-2">
                  {[
                    { label: 'None', value: 'none', desc: 'No shadow effects' },
                    { label: 'Soft', value: 'soft', desc: 'Gentle diffuse shadow' },
                    { label: 'Classic', value: 'classic', desc: 'Standard drop shadow' },
                    { label: 'Neon', value: 'neon', desc: 'Glowing accent effects' },
                    { label: 'Inner', value: 'inner', desc: 'Inset shadow style' },
                    { label: 'Harsh', value: 'harsh', desc: 'Bold offset shadow' }
                  ].map(option => (
                    <button
                      key={option.value}
                      onClick={() => handleShadowChange(option.value)}
                      className={`w-full p-3 text-left rounded border transition-all duration-300 hover:scale-95 ${
                        customizations.shadow === option.value
                          ? 'border-accent1 bg-accent1/20 text-accent1'
                          : 'border-border text-text hover:border-accent2 hover:bg-surface-hover'
                      }`}
                    >
                      <div className="font-medium text-sm">{option.label}</div>
                      <div className="text-xs text-text-muted">{option.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Gradient Controls */}
            {activeCustomTab === 'gradient' && (
              <div className="space-y-3">
                <h4 className="text-accent2 font-medium text-sm">Background Gradient</h4>
                <div className="space-y-2">
                  {[
                    { label: 'None', value: 'none', desc: 'Solid colors only' },
                    { label: 'Linear', value: 'linear', desc: 'Straight gradient lines' },
                    { label: 'Radial', value: 'radial', desc: 'Circular gradient' },
                    { label: 'Duotone', value: 'duotone', desc: 'Two-color blend' }
                  ].map(option => (
                    <button
                      key={option.value}
                      onClick={() => handleGradientChange(option.value)}
                      className={`w-full p-3 text-left rounded border transition-all duration-300 hover:scale-95 ${
                        customizations.gradient === option.value
                          ? 'border-accent1 bg-accent1/20 text-accent1'
                          : 'border-border text-text hover:border-accent2 hover:bg-surface-hover'
                      }`}
                    >
                      <div className="font-medium text-sm">{option.label}</div>
                      <div className="text-xs text-text-muted">{option.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* 3D Effects Controls */}
            {activeCustomTab === '3d' && (
              <div className="space-y-3">
                <h4 className="text-accent2 font-medium text-sm">3D Visual Effects</h4>
                
                
                <div className="space-y-2">
                  {[
                    { 
                      label: 'None', 
                      value: 'none', 
                      desc: 'Flat design with no 3D effects',
                      icon: '⬜'
                    },
                  { 
                    label: 'Raised', 
                    value: 'raised', 
                    desc: 'Subtle elevation with soft shadows',
                    icon: '📦'
                  },
                  { 
                    label: 'Pressed', 
                    value: 'pressed', 
                    desc: 'Inset appearance like pressed buttons',
                    icon: '🔳'
                  },
                  { 
                    label: 'Floating', 
                    value: 'floating', 
                    desc: 'Dramatic elevation with glow effects',
                    icon: '🌟'
                  },
                  { 
                    label: 'Beveled', 
                    value: 'beveled', 
                    desc: 'Angled edges with highlight gradients',
                    icon: '💎'
                  },
                  { 
                    label: 'Extruded', 
                    value: 'extruded', 
                    desc: 'Deep 3D extrusion with layered shadows',
                    icon: '🧊'
                  }
                ].map(option => (
                    <button
                      key={option.value}
                      onClick={() => handle3DEffectChange(option.value)}
                      className={`w-full p-3 text-left rounded border transition-all duration-300 hover:scale-95 ${
                        customizations.effect3d === option.value
                          ? 'border-accent1 bg-accent1/20 text-accent1'
                          : 'border-border text-text hover:border-accent2 hover:bg-surface-hover'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg">{option.icon}</span>
                        <span className="font-medium text-sm">{option.label}</span>
                      </div>
                      <div className="text-xs text-text-muted">{option.desc}</div>
                    </button>
                  ))}
                </div>
                
                {/* 3D Effect Preview */}
                <div className="bg-surface/30 border border-border rounded p-4">
                  <h5 className="text-accent3 font-medium text-xs mb-3">Live Preview</h5>
                  <div className="grid grid-cols-2 gap-3">
                    <div className={`bg-accent1 text-canvas rounded-theme p-3 text-center text-xs font-bold transition-all duration-300 ${
                      customizations.effect3d === 'raised' ? 'effect-3d-raised' :
                      customizations.effect3d === 'pressed' ? 'effect-3d-pressed' :
                      customizations.effect3d === 'floating' ? 'effect-3d-floating' :
                      customizations.effect3d === 'beveled' ? 'effect-3d-beveled' :
                      customizations.effect3d === 'extruded' ? 'effect-3d-extruded' : ''
                    }`}>
                      Button
                    </div>
                    <div className={`bg-surface border border-accent2 rounded-theme p-3 text-center text-xs font-bold transition-all duration-300 ${
                      customizations.effect3d === 'raised' ? 'effect-3d-raised' :
                      customizations.effect3d === 'pressed' ? 'effect-3d-pressed' :
                      customizations.effect3d === 'floating' ? 'effect-3d-floating' :
                      customizations.effect3d === 'beveled' ? 'effect-3d-beveled' :
                      customizations.effect3d === 'extruded' ? 'effect-3d-extruded' : ''
                    }`}>
                      Card
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-text-muted text-center">
                    Current: {customizations.effect3d || 'none'}
                  </div>
                </div>
              </div>
            )}

            {/* Font Controls */}
            {activeCustomTab === 'fonts' && (
              <div className="space-y-3">
                <h4 className="text-accent2 font-medium text-sm">Typography</h4>
                <div className="grid grid-cols-1 gap-2">
                  {Object.entries(fontTypes).map(([fontKey, fontData]) => (
                    <button
                      key={fontKey}
                      onClick={() => handleFontChange(fontKey)}
                      className={`p-3 text-left rounded border transition-all duration-300 hover:scale-95 ${
                        customizations.fontType === fontKey
                          ? 'border-accent1 bg-accent1/20 text-accent1'
                          : 'border-border text-text hover:border-accent2 hover:bg-surface-hover'
                      }`}
                    >
                      <div className="font-medium text-sm mb-1" style={{ fontFamily: fontData.primary }}>
                        {fontData.name}
                      </div>
                      <div className="text-xs text-text-muted mb-2" style={{ fontFamily: fontData.primary }}>
                        The quick brown fox jumps over the lazy dog
                      </div>
                    </button>
                  ))}
                </div>
                <div className="mt-2 text-xs text-text-muted text-center">
                  Current: {fontTypes[customizations.fontType]?.name || 'Theme Default'}
                </div>
              </div>
            )}

            {/* Color Controls */}
            {activeCustomTab === 'colors' && (
              <div className="space-y-3">
                <h4 className="text-accent2 font-medium text-sm">Color Arrangement</h4>
                <div className="space-y-2">
                  {[
                    { label: 'Default', value: 'reset', desc: 'Original theme colors' },
                    { label: 'Swap Primary/Secondary', value: 'primary-secondary', desc: 'Exchange main colors' },
                    { label: 'Rotate Forward', value: 'rotate-forward', desc: 'Shift colors clockwise' },
                    { label: 'Rotate Backward', value: 'rotate-backward', desc: 'Shift colors counter-clockwise' }
                  ].map(option => (
                    <button
                      key={option.value}
                      onClick={() => handleColorSwap(option.value)}
                      className={`w-full p-3 text-left rounded border transition-all duration-300 hover:scale-95 ${
                        customizations.colorSwap === option.value
                          ? 'border-accent1 bg-accent1/20 text-accent1'
                          : 'border-border text-text hover:border-accent2 hover:bg-surface-hover'
                      }`}
                    >
                      <div className="font-medium text-sm">{option.label}</div>
                      <div className="text-xs text-text-muted">{option.desc}</div>
                    </button>
                  ))}
                </div>
                
                {/* Current Color Preview */}
                <div className="mt-3 p-3 bg-surface rounded border border-border">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-xs text-text-muted">Current Accent Colors:</div>
                    <div className="text-xs text-accent2 font-medium">
                      {customizations.colorSwap === 'primary-secondary' ? 'Swapped' :
                       customizations.colorSwap === 'rotate-forward' ? 'Rotated →' :
                       customizations.colorSwap === 'rotate-backward' ? 'Rotated ←' :
                       'Default'}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    {[
                      { key: 'accent1', color: themes[currentTheme]?.colors?.accent1, label: 'Primary' },
                      { key: 'accent2', color: themes[currentTheme]?.colors?.accent2, label: 'Secondary' },
                      { key: 'accent3', color: themes[currentTheme]?.colors?.accent3, label: 'Tertiary' },
                      { key: 'accent4', color: themes[currentTheme]?.colors?.accent4, label: 'Quaternary' },
                      { key: 'accent5', color: themes[currentTheme]?.colors?.accent5, label: 'Quinternary' }
                    ].map((accent, index) => (
                      <div 
                        key={accent.key}
                        className="h-8 w-8 rounded border-2 border-border hover:border-accent1 transition-all duration-300 cursor-pointer relative group flex-shrink-0"
                        style={{ backgroundColor: accent.color }}
                        title={`${accent.label} (${accent.color})`}
                        onClick={() => {
                          navigator.clipboard?.writeText(accent.color);
                          // You could add a toast notification here
                        }}
                      >
                        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-surface border border-border rounded px-2 py-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10 pointer-events-none">
                          {accent.color}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="text-xs text-text-dim mt-2">Click to copy color code</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Theme Options List */}
        {isDropdownOpen && (
          <div className="flex-1 overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-accent1 text-lg font-bold">Choose Style</h3>
              <span className="text-text-muted text-sm">({Object.keys(themes).length} themes)</span>
            </div>
            
            <div className="space-y-2">
              {Object.entries(themes).map(([key, theme]) => {
                // Determine theme category
                const getThemeCategory = (themeId) => {
                  if (['neonNoir', 'cyberpunk'].includes(themeId)) return '🌃 Tech';
                  if (['warmVelvet', 'softPastel'].includes(themeId)) return '🎨 Classic';
                  if (['dommeSupreme', 'neonFemme', 'goddessGold'].includes(themeId)) return '👑 Femme Power';
                  if (['kinkElegance', 'dungeonChic', 'leatherLux', 'latex_noir', 'fetish_palace'].includes(themeId)) return '⛓️ BDSM Elite';
                  if (['queerPride', 'queerRebel', 'sapphic_sunset'].includes(themeId)) return '🏳️‍🌈 Queer Pride';
                  if (['sensualVelvet', 'darkRomance', 'sissy_pink'].includes(themeId)) return '💕 Sensual';
                  return '✨ Other';
                };
                
                return (
                  <button
                    key={key}
                    onClick={() => {
                      onThemeChange(key);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full rounded-theme border-2 p-3 text-left transition-all duration-300 hover:scale-95 ${
                      currentTheme === key
                        ? 'border-accent1 bg-accent1/20 text-accent1'
                        : 'border-border hover:border-accent2 bg-canvas text-text hover:bg-surface-hover'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs opacity-75">{getThemeCategory(key)}</span>
                          <div className="font-bold text-sm">{theme.name}</div>
                        </div>
                        <div className="text-text-muted text-xs mt-1">{theme.description}</div>
                      </div>
                    
                      {/* Color Preview - Show 5 accent colors */}
                      <div className="flex space-x-1 ml-2">
                        <div 
                          className="h-3 w-3 rounded-full border border-white/20"
                          style={{ backgroundColor: theme.colors.accent1 }}
                          title="Accent 1"
                        />
                        <div 
                          className="h-3 w-3 rounded-full border border-white/20"
                          style={{ backgroundColor: theme.colors.accent2 }}
                          title="Accent 2"
                        />
                        <div 
                          className="h-3 w-3 rounded-full border border-white/20"
                          style={{ backgroundColor: theme.colors.accent3 }}
                          title="Accent 3"
                        />
                        <div 
                          className="h-3 w-3 rounded-full border border-white/20"
                          style={{ backgroundColor: theme.colors.accent4 }}
                          title="Accent 4"
                        />
                        <div 
                          className="h-3 w-3 rounded-full border border-white/20"
                          style={{ backgroundColor: theme.colors.accent5 }}
                          title="Accent 5"
                        />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
            
            <div className="text-text/60 mt-4 text-xs border-t border-border pt-4">
              Current: <span className="text-accent1">{themes[currentTheme].name}</span>
              <br />
              <span className="text-xs opacity-50">Use Ctrl + ← → for quick navigation</span>
            </div>
          </div>
        )}

        {/* Quick Info when dropdown is closed */}
        {!isDropdownOpen && (
          <div className="p-6">
            <div className="text-text/60 text-sm">
              <div className="mb-2">
                Current: <span className="text-accent1 font-medium">{themes[currentTheme].name}</span>
              </div>
              <div className="text-xs opacity-50">
                • Use arrow buttons or Ctrl + ← → for quick navigation
                <br />
                • Use Live Customization to modify appearance
                <br />
                • Click "Show All Themes" to browse all {Object.keys(themes).length} themes
                <br />
                • Press Escape or click outside to close
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ThemeSidebar;
