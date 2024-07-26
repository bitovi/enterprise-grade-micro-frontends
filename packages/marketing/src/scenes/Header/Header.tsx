import type { FC, ReactNode } from "react";

import { Divider, Flex } from "@mantine/core";

import HomeLink from "./components/HomeLink";
import Search from "./components/Search";
import Links from "./components/Links";
import Shortcuts from "./components/Shortcuts";

/// Leave separate - these are temporary
import { MantineProvider } from "@mantine/core";
import { emotionTransform, MantineEmotionProvider } from "@mantine/emotion";
///

const Header: FC = () => {
  return (
    <TempWrapper>
      <Flex
        component="header"
        py="md"
        align="center"
        justify="center"
        bg="dark"
      >
        <Flex
          justify="space-between"
          align="center"
          w={{ sm: "sm", md: 800, lg: 1330, xl: 1400 }}
        >
          <HomeLink />
          <Links />
          <Flex gap="md">
            <Search />
            <Divider orientation="vertical" />
            <Shortcuts />
          </Flex>
        </Flex>
      </Flex>
    </TempWrapper>
  );
};

export default Header;

const TempWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <MantineProvider stylesTransform={emotionTransform}>
      <MantineEmotionProvider>{children}</MantineEmotionProvider>
    </MantineProvider>
  );
};
