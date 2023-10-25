'use client';

import { useEffect } from 'react';

export const useTitle = (title?: string) => {
  useEffect(() => {
    const subTitle = title ? `${title} | ` : '';
    document.title = `${subTitle}chat`;
  }, [title]);
};
