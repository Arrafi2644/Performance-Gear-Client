import React, { createContext, useState, useEffect } from 'react';

// Create the ThemeContext
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Set the default theme from localStorage or default to light
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // Update the theme in localStorage and the document class
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  // Toggle the theme
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
