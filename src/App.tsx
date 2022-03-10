import React from 'react';
import './App.css';
import { useState } from 'react';
import { AppShell, Burger, Button, Container, Group, Header, Image, MantineProvider, MediaQuery, Navbar, Space, Text, useMantineTheme } from '@mantine/core';
import { test } from './feed/service';


test()
function App() {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();


  return (
    <AppShell
      navbarOffsetBreakpoint='sm'
      fixed
      header={
        <Header height={70} padding='md'>
          {/* Handle other responsive styles with MediaQuery component or createStyles function */}
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <Image
              width={35}
              src='./turnip-icon.svg'
              alt='turnip'
            />
            <Space w='xs' />
            <Text size='xl' weight={'bold'}>Turnip Stalker</Text>
            <Container />
            <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size='sm'
                color={theme.colors.gray[6]}
                mr='xl'
              />
            </MediaQuery>
          </div>
        </Header>
      }
      navbar={
        <Navbar
          padding='md'
          hiddenBreakpoint='sm'
          hidden={!opened}
          width={{ sm: 300, lg: 400 }}
        >
          <Text>Aggregate and filter turnip prices from Reddit posts</Text>
        </Navbar>
      }
    >
      <Text>Resize app to see responsive navbar in action</Text>
      <Button>
        Settings
      </Button>
    </AppShell>
  );
}

export default App;
