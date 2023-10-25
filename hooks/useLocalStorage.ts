'use client';

import { useState, useEffect, SetStateAction, Dispatch } from 'react';

const useLocalStorage = <T>(defaultValue: T, key: string): [T, Dispatch<SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(() => {
    const stickyValue = typeof window !== 'undefined' ? window.localStorage.getItem(key) : '';
    console.log({ stickyValue });
    return stickyValue ? JSON.parse(stickyValue) : defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
