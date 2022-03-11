import {
  AppShell,
  Button,
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  Text,
} from '@mantine/core';
import React, { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import StickyHeader from '../StickyHeader/StickyHeader';
import './App.css';

// test()
function App() {
  const [opened, setOpened] = useState(false);
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles>
        <AppShell
          navbarOffsetBreakpoint="sm"
          fixed
          header={<StickyHeader opened={opened} setOpened={setOpened} />}
          navbar={<Navigation opened={opened} />}
        >
          <Text>Resize app to see responsive navbar in action</Text>
          <Button>Settings</Button>
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
