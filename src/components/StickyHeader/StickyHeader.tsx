// import React from 'react';
// import { useState } from 'react';
// import {
//   ActionIcon,
//   AppShell,
//   Badge,
//   Burger,
//   Button,
//   ColorScheme,
//   ColorSchemeProvider,
//   Container,
//   Group,
//   Header,
//   Image,
//   MantineProvider,
//   MediaQuery,
//   Navbar,
//   Space,
//   Text,
//   ThemeIcon,
//   useMantineColorScheme,
//   useMantineTheme,
// } from '@mantine/core';
// import { test } from '../../services/fetchData';
// import turnipIconSvg from '../../assets/turnip-icon.svg';
// import { Sun, MoonStars } from 'tabler-icons-react';

// export function ActionToggle() {
//   const { colorScheme, toggleColorScheme } = useMantineColorScheme();

//   return (
//     <Group position="center" my="xl">
//       <ActionIcon
//         onClick={() => toggleColorScheme()}
//         size="lg"
//         sx={(theme) => ({
//           backgroundColor:
//             theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
//           color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
//         })}
//       >
//         {colorScheme === 'dark' ? <Sun size={18} /> : <MoonStars size={18} />}
//       </ActionIcon>
//     </Group>
//   );
// }

// function StickyHeader() {
//   const [opened, setOpened] = useState(false);
//   const theme = useMantineTheme();

//   const [colorScheme, setColorScheme] = useState<ColorScheme>('light');

//   const themeColor = document.querySelector("meta[name='theme-color']");
//   themeColor?.setAttribute('content', colorScheme === 'dark' ? '#1A1B1E' : '#FFFFFF');

//   return (
//     <Header height={70} padding="md">
//       <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
//         <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
//           <Burger
//             opened={opened}
//             onClick={() => setOpened((o) => !o)}
//             size="sm"
//             color={theme.colors.gray[6]}
//             mr="xl"
//           />
//         </MediaQuery>
//         {/* <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
//                 </MediaQuery> */}

//         <Group>
//           <ThemeIcon
//             size={'xl'}
//             sx={(theme) => ({
//               backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[0] : '#fff',
//             })}
//           >
//             <Image width={35} src={turnipIconSvg} alt="turnip" />
//           </ThemeIcon>

//           <Text size="xl" weight={'bold'}>
//             Turnip Stalker
//           </Text>
//           <Badge>{'1.2.0'}</Badge>
//         </Group>
//         <ActionToggle />
//       </div>
//     </Header>
//   );
// }

// export default StickyHeader;
export {}
