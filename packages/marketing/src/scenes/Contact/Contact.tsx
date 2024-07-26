import type { FC } from "react";

import { Anchor, Container, Image, Stack, Text, Title } from "@mantine/core";

const Contact: FC = () => {
  return (
    <Container sx={{ maxWidth: "760px", align: "center", padding: "20px" }}>
      <Stack>
        <Title order={2}>Contact Us</Title>
        <Text>
          Acme Store is proudly brought to you by the friendly devs at{" "}
          <Anchor href="https://bitovi.com/" target="bitovi.com">
            <Image
              src="https://www.bitovi.com/hubfs/limbo-generated/imgs/logos/bitovi-logo-23.svg"
              sx={{ height: "14px", width: "auto", display: "inline" }}
            />
          </Anchor>
          .
        </Text>
        <Title order={3}>Questions?</Title>
        <Text>
          Send us email at{" "}
          <Anchor href="mailto:support@bitovi.com">support@bitovi.com</Anchor>{" "}
          with any questions or suggestions.
        </Text>
      </Stack>
    </Container>
  );
};

export default Contact;
