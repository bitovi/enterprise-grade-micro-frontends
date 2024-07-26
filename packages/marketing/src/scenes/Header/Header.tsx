import type { FC } from "react";

import { Divider, Flex } from "@mantine/core";

import HomeLink from "./components/HomeLink";
import Search from "./components/Search";
import Links from "./components/Links";
import Shortcuts from "./components/Shortcuts";

const Header: FC = () => {
  return (
    <Flex component="header" py="md" align="center" justify="center" bg="dark">
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
  );
};

export default Header;
