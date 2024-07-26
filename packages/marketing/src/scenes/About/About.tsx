import type { FC } from "react";

import { Container, List, ListItem, Stack, Title, Text } from "@mantine/core";

const About: FC = () => {
  return (
    <Container p="md">
      <Stack>
        <Title>About Acme Store</Title>

        <Text>
          We are a department store specializing in the finest selection of
          affordable menswear and women's clothing, jewelry, and electronics for
          the modern sophisticate.
        </Text>

        <Title order={3}>Mission and Vision:</Title>
        <Text>
          Mission: To provide our customers with high-quality products at
          affordable prices, while delivering exceptional customer service.
        </Text>

        <Text>
          Vision: To become the go-to destination for fashion-forward
          individuals seeking stylish and affordable products.
        </Text>

        <Title order={3}>Core Values:</Title>

        <List>
          <ListItem>
            <Text fw={700}>Quality: </Text>
            We are committed to offering only the best products to our
            customers.
          </ListItem>
          <ListItem>
            <Text fw={700}>Affordability: </Text>
            We believe that everyone deserves to look and feel their best
            without breaking the bank.
          </ListItem>

          <ListItem>
            <Text fw={700}>Customer Service: </Text>
            We strive to provide a personalized and enjoyable shopping
            experience for every customer.
          </ListItem>
        </List>
        <Title order={3}>Team:</Title>
        <Text>
          Our team consists of dedicated professionals who are passionate about
          fashion and customer satisfaction. From our knowledgeable sales
          associates to our friendly customer service representatives, we are
          here to help you find the perfect items for your wardrobe.
        </Text>
      </Stack>
    </Container>
  );
};

export default About;
