import React from 'react';
import { useTheme } from '../../hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="btn btn-ghost btn-circle">
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
}