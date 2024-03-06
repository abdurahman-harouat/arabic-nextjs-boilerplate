'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { BsMoonStars, BsSun } from 'react-icons/bs';

import { Button } from '../ui/button';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <BsSun className="rotate-0 scale-125 transition-all dark:-rotate-90 dark:scale-0" />
      <BsMoonStars className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-125" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
