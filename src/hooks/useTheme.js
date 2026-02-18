import { useState, useEffect } from 'react';

// small custom hook to manage light / dark mode state
// stores preference in localStorage and keeps a `data-theme` attribute
// on <html> so that CSS variables can react. Default is dark (per requirements).
export function useTheme() {
  const [theme, setTheme] = useState('dark');

  // initialize once on mount
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') {
      setTheme(stored);
    } else {
      // default to dark regardless of system preference
      setTheme('dark');
    }
  }, []);

  // whenever theme changes update the html attribute & localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return [theme, toggle];
}
