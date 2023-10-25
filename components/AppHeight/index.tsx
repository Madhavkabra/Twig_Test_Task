'use client';

import { useEffect } from 'react';

export default function AppHeight() {
  const appHeight = (): void => {
    const doc = document.documentElement;
    doc.style.setProperty('--app-height', `${window.innerHeight}px`);
  };

  window.onload = appHeight;

  useEffect(() => {
    window.addEventListener('resize', appHeight);

    return () => window.removeEventListener('resize', appHeight);
  }, []);

  return null;
}
