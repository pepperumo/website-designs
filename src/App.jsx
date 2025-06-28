import { useState, useEffect } from 'react';
import { themes, applyTheme, getCurrentTheme } from './themes';
import AuraWebsite from './components/AuraWebsite';
import ThemeSidebar from './components/ThemeSidebar';

function App() {
  const [currentTheme, setCurrentTheme] = useState(getCurrentTheme());
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Apply theme on mount and when theme changes
  useEffect(() => {
    applyTheme(currentTheme);
  }, [currentTheme]);

  const handleThemeChange = (themeKey) => {
    setCurrentTheme(themeKey);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-canvas text-text transition-all duration-300">
      {/* Main Website Content */}
      <AuraWebsite 
        currentTheme={currentTheme} 
        onSidebarToggle={toggleSidebar}
      />
      
      {/* Theme Sidebar */}
      <ThemeSidebar 
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
        currentTheme={currentTheme} 
        onThemeChange={handleThemeChange}
        setCurrentTheme={setCurrentTheme}
        themes={themes}
      />
    </div>
  );
}

export default App;
