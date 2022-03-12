import { MantineNumberSize, Navbar, Text } from '@mantine/core';
import React from 'react';

type NavigationProps = {
  padding: MantineNumberSize;
  hiddenBreakpoint: MantineNumberSize;
  hidden: boolean;
  width: {
    sm: number;
    lg: number;
  };
};

function Navigation({ ...navbarProps }: NavigationProps) {
  return (
    <Navbar {...navbarProps}>
      <Text>Aggregate and filter turnip prices from Reddit posts</Text>
    </Navbar>
  );
}

export default Navigation;
