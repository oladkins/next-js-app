'use client';
import React, { createContext, ReactNode, useState } from 'react';

type ThemeContextType = {
  mode: 'light' | 'dark';
  toggle: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  mode: 'dark',
  toggle: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  let storageTheme;

  if (typeof window !== 'undefined') {
    storageTheme = localStorage.getItem('theme');
  }

  const [mode, setMode] = useState<'dark' | 'light'>(
    storageTheme ? JSON.parse(storageTheme) : 'dark',
  );
  const toggle = async () => {
    await setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
    localStorage.setItem('theme', JSON.stringify(mode === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
