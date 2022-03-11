import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import React from 'react';
import { MoonStars, Sun } from 'tabler-icons-react';

export function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  // Update browser meta theme-color on button toggle
  const themeColor = document.querySelector("meta[name='theme-color']");
  themeColor?.setAttribute('content', colorScheme === 'dark' ? '#1A1B1E' : '#FFFFFF');

  return (
    <ActionIcon
      variant='outline'
      color={colorScheme === 'dark' ? '' : 'gray'}
      onClick={() => toggleColorScheme()}
      size='lg'
      // sx={(theme) => ({
      //   backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      //   color: theme.colorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[6],
      // })}
    >
      {colorScheme === 'dark' ? <Sun size={18} /> : <MoonStars size={18} />}
    </ActionIcon>
  );
}

export default ThemeToggle;
