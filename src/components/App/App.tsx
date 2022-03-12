import { AppShell, ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import React, { useState } from 'react';
import Feed from '../Feed/Feed';
import Navigation from '../Navigation/Navigation';
import StickyHeader from '../StickyHeader/StickyHeader';
import './App.css';

function App() {
  const [opened, setOpened] = useState(false);
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        theme={{
          colorScheme: colorScheme,
          primaryColor: 'yellow',
        }}
        withGlobalStyles
      >
        <AppShell
          navbarOffsetBreakpoint='sm'
          fixed
          header={<StickyHeader opened={opened} setOpened={setOpened} height={70} padding='md' />}
          navbar={
            <Navigation
              padding='md'
              hiddenBreakpoint='sm'
              hidden={!opened}
              width={{ sm: 300, lg: 400 }}
            />
          }
        >
          <Feed />
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
