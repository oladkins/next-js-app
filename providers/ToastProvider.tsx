'use client';

import { ToastContainer } from 'react-toastify';
import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';
import 'react-toastify/dist/ReactToastify.css';

interface ToastProviderProps {
  children: React.ReactNode;
}

export default function ToastProvider({ children }: ToastProviderProps) {
  const { mode } = useContext(ThemeContext);
  return (
    <>
      {children}
      <ToastContainer
        position='top-right'
        autoClose={5000}
        closeOnClick
        pauseOnHover
        theme={mode}
      />
    </>
  );
}
