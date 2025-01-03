import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const DarkModeToggle = () => {
  // State to store the dark mode preference (with a fallback to `light`)
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null);

  // Effect to check for localStorage and set the initial theme
  useEffect(() => {
    // Check if the window object is available (client-side check)
    if (typeof window !== 'undefined') {
      // Get initial theme preference from localStorage or default to light mode
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        setIsDarkMode(true);
      } else if (savedTheme === 'light') {
        setIsDarkMode(false);
      } else {
        // Use the system preference if no saved theme is found
        setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
      }
    }
  }, []);

  // Effect to apply the theme to the HTML element and update localStorage
  useEffect(() => {
    if (isDarkMode !== null) {
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  }, [isDarkMode]);

  // Toggle the dark mode
  const toggleDarkMode = () => {
    if (isDarkMode !== null) {
      setIsDarkMode(!isDarkMode);
    }
  };

  // Return loading state while the theme preference is being set
  if (isDarkMode === null) {
    return null; // Optionally, show a loading spinner or placeholder
  }

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full  focus:outline-none"
    >
      {isDarkMode ? <FaSun size={24} /> : <FaMoon className="text-white" size={24} />}
    </button>
  );
};

export default DarkModeToggle;
