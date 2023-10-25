'use client';

import { useEffect } from 'react';

export default function AppHeight() {
  const appHeight = (): void => {
    const doc = document.documentElement;
    doc.style.setProperty('--app-height', `${window.innerHeight}px`);
  };

  useEffect(() => {
    appHeight();
    window.addEventListener('resize', appHeight);

    return () => window.removeEventListener('resize', appHeight);
  }, []);

  return null;
}
