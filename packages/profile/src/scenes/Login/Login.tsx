import type { FC } from "react";

import backgroundImage from "../../../assets/pexels-gustavo-fring-6050428.jpg";
import {
  Button,
  Container,
  Flex,
  Title,
  Text,
  PasswordInput,
  Stack,
  TextInput,
} from "@mantine/core";

import { createStyles } from "@mantine/emotion";

export interface LoginProps {
  onLoginSuccess?: () => void;
}

const Login: FC<LoginProps> = ({ onLoginSuccess }) => {
  const { classes } = useStyles();

  return (
    <Container className={classes.loginPage}>
      <div className={classes.background} />
      <div className={classes.backgroundScreen} />

      <Flex
        direction="column"
        wrap="nowrap"
        align="center"
        justify="center"
        className={classes.loginCentered}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onLoginSuccess?.();
          }}
        >
          <Stack>
            <Title order={2}>Our treasures, your style</Title>
            <Text>Shop our exclusive collections now</Text>
            <TextInput placeholder="User name" />
            <PasswordInput placeholder="Password" />
            <Button type="submit">Login</Button>
          </Stack>
        </form>
      </Flex>
    </Container>
  );
};

export default Login;

const useStyles = createStyles((theme) => ({
  background: {
    color: "#ffffff33",
    position: "fixed",
    height: "100%",
    width: "100%",
    left: 0,
    top: 0,
    backgroundSize: "100% auto",
    backgroundClip: "border-box",
    zIndex: -2,
    backgroundImage: `url(${backgroundImage})`,
  },
  backgroundScreen: {
    backgroundColor: "#ffffffdd",
    zIndex: -1,
    position: "fixed",
    height: "100%",
    width: "100%",
    left: 0,
    top: 0,
    content: "'\\00A0'", // Adding escaped Unicode space character
  },
  loginCentered: {
    zIndex: 10,
    height: "100vh",
  },
}));
