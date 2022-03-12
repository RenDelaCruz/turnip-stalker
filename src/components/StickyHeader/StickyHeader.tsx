import {
  Burger,
  Container,
  createStyles,
  Group,
  Header,
  Image,
  MantineNumberSize,
  MediaQuery,
  Text,
  ThemeIcon,
  useMantineTheme,
} from '@mantine/core';
import React, { Dispatch, SetStateAction } from 'react';
import turnipIconSvg from '../../assets/turnip-icon.svg';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const useStyles = createStyles(theme => ({
  spacedHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

type StickyHeaderProps = {
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
  height: number;
  padding: MantineNumberSize;
};

function StickyHeader({ opened, setOpened, ...headerProps }: StickyHeaderProps) {
  const theme = useMantineTheme();
  const { classes } = useStyles();

  return (
    <Header {...headerProps}>
      <Container className={classes.spacedHeader} fluid>
        <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
          <Burger
            opened={opened}
            onClick={() => setOpened(o => !o)}
            size='sm'
            color={theme.colors.gray[6]}
          />
        </MediaQuery>
        <Group spacing='xs'>
          <MediaQuery smallerThan={350} styles={{ display: 'none' }}>
            <ThemeIcon
              size={'xl'}
              sx={theme => ({
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[0] : '#fff',
              })}
            >
              <Image width={35} src={turnipIconSvg} alt='turnip' />
            </ThemeIcon>
          </MediaQuery>
          <Text size='xl' weight={'bold'}>
            Turnip Stalker
          </Text>
        </Group>
        <ThemeToggle />
      </Container>
    </Header>
  );
}

export default StickyHeader;
