import { Navbar, Text } from '@mantine/core';
import React from 'react';

type NavigationProps = {
  opened: boolean;
};

function Navigation({ opened }: NavigationProps) {
  return (
    <Navbar padding="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 300, lg: 400 }}>
      <Text>Aggregate and filter turnip prices from Reddit posts</Text>
    </Navbar>
  );
}

export default Navigation;
