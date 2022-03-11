import {
  Badge,
  Burger,
  Group,
  Header,
  Image,
  MediaQuery,
  Text,
  ThemeIcon,
  useMantineTheme,
} from '@mantine/core';
import React, { Dispatch, SetStateAction } from 'react';
import turnipIconSvg from '../../assets/turnip-icon.svg';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

type StickyHeaderProps = {
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
};

function StickyHeader({ opened, setOpened }: StickyHeaderProps) {
  const theme = useMantineTheme();

  return (
    <Header height={70} padding="md">
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>

        <Group>
          <ThemeIcon
            size={'xl'}
            sx={(theme) => ({
              backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[0] : '#fff',
            })}
          >
            <Image width={35} src={turnipIconSvg} alt="turnip" />
          </ThemeIcon>

          <Text size="xl" weight={'bold'}>
            Turnip Stalker
          </Text>
          <Badge>{'1.2.0'}</Badge>
        </Group>
        <ThemeToggle />
      </div>
    </Header>
  );
}

export default StickyHeader;
