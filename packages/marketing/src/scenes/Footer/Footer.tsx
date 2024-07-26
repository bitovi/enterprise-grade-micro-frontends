import type { FC, ReactNode } from "react";
import type { Marketing } from "shared-types";

import { Flex, Text } from "@mantine/core";

import WorkShopLinks from "./components/WorkshopLinks";
import CompanyLinks from "./components/CompanyLinks";
import BitoviLinks from "./components/BitoviLinks";
import Company from "./components/Company";
import Socials from "./components/Socials";

/// Leave separate - these are temporary
import { MantineProvider } from "@mantine/core";
import { emotionTransform, MantineEmotionProvider } from "@mantine/emotion";
///

const Footer: Marketing.Footer = () => {
  return (
    <TempWrapper>
      <Flex
        w="100%"
        direction="column"
        align="center"
        component="footer"
        p="xl"
        bg="dark"
        c="white"
      >
        <Flex
          justify="space-between"
          w={{ sm: "sm", md: 800, lg: 1330, xl: 1400 }}
        >
          <Company />
          <Flex gap="lg">
            <BitoviLinks />
            <WorkShopLinks />
            <CompanyLinks />
          </Flex>
        </Flex>
        <Flex
          mt="lg"
          pt="lg"
          sx={{ borderTop: "1px solid #868e96" }}
          w={{ sm: "sm", md: 800, lg: 1330, xl: 1400 }}
          justify="space-between"
        >
          <Text c="dimmed" size="sm">
            © 2024 Bitovi All rights reserved.
          </Text>
          <Socials />
        </Flex>
      </Flex>
    </TempWrapper>
  );
};

export default Footer;

const TempWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <MantineProvider stylesTransform={emotionTransform}>
      <MantineEmotionProvider>{children}</MantineEmotionProvider>
    </MantineProvider>
  );
};
