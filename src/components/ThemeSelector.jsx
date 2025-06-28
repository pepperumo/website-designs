import { useState, useEffect } from 'react';

const ThemeSelector = ({ currentTheme, onThemeChange, themes }) => {
  const [isOpen, setIsOpen] = useState(false);

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

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event) => {
      // Only handle if no input/textarea is focused and dropdown is closed
      if (document.activeElement.tagName === 'INPUT' || 
          document.activeElement.tagName === 'TEXTAREA' || 
          isOpen) return;

      if (event.key === 'ArrowLeft' && event.ctrlKey) {
        event.preventDefault();
        goToPreviousTheme();
      } else if (event.key === 'ArrowRight' && event.ctrlKey) {
        event.preventDefault();
        goToNextTheme();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentIndex, isOpen]);

  return (
    <div className="fixed top-4 right-4 z-50">
      {/* Theme Navigation Controls */}
      <div className="flex items-center gap-2 mb-2">
        {/* Previous Theme Button */}
        <button
          onClick={goToPreviousTheme}
          className="bg-surface border-accent2 text-accent2 hover:border-accent1 hover:text-accent1 hover:bg-surface-hover rounded-theme border px-3 py-2 font-bold transition-all duration-300"
          title="Previous Theme (Ctrl + ←)"
        >
          ◀
        </button>

        {/* Current Theme Name Display */}
        <div className="bg-surface border-accent1 text-accent1 rounded-theme border px-4 py-2 font-bold min-w-48 text-center backdrop-blur-subtle">
          <div className="text-sm opacity-75">{currentIndex + 1}/{themeKeys.length}</div>
          <div>{themes[currentTheme].name}</div>
        </div>

        {/* Next Theme Button */}
        <button
          onClick={goToNextTheme}
          className="bg-surface border-accent2 text-accent2 hover:border-accent1 hover:text-accent1 hover:bg-surface-hover rounded-theme border px-3 py-2 font-bold transition-all duration-300"
          title="Next Theme (Ctrl + →)"
        >
          ▶
        </button>
      </div>

      {/* Theme Selector Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-surface border-accent1 text-text hover:border-accent2 hover:bg-surface-hover rounded-theme border-2 px-4 py-2 font-bold transition-all duration-300 backdrop-blur-subtle w-full"
      >
        🎨 All Themes
      </button>

      {/* Theme Options Dropdown */}
      {isOpen && (
        <div className="bg-surface border-accent1 absolute right-0 top-20 min-w-96 max-w-lg rounded-theme border-2 p-4 backdrop-blur-subtle max-h-80 overflow-y-auto">
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
                if (['sensualVelvet', 'darkRomance', 'sissy_pink'].includes(themeId)) return '� Sensual';
                return '✨ Other';
              };
              
              return (
                <button
                  key={key}
                  onClick={() => {
                    onThemeChange(key);
                    setIsOpen(false);
                  }}
                  className={`w-full rounded-theme border-2 p-3 text-left transition-all duration-300 ${
                    currentTheme === key
                      ? 'border-accent1 bg-accent1/20 text-accent1'
                      : 'border-border hover:border-accent2 bg-canvas text-text hover:bg-surface-hover'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs opacity-75">{getThemeCategory(key)}</span>
                        <div className="font-bold">{theme.name}</div>
                      </div>
                      <div className="text-text-muted text-sm mt-1">{theme.description}</div>
                    </div>
                  
                  {/* Color Preview - Show 5 accent colors */}
                  <div className="flex space-x-1">
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
          
          <div className="text-text/60 mt-4 text-xs">
            Current: <span className="text-accent1">{themes[currentTheme].name}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSelector;
