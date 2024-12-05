import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme] = useState('dark');

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return { theme };
};
