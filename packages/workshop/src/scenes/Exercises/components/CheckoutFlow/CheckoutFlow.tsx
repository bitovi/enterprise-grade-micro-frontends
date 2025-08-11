import type { FC } from "react";

import { Accordion, Alert, Anchor, Code, Grid, Image, List, Text, Title } from "@mantine/core";
import { CodeHighlight } from "@mantine/code-highlight";
import { IconInfoCircle } from "@tabler/icons-react";

import ExerciseLayout from "../../shared/components/ExerciseLayout";

import shipping from "./assets/shipping.png";
import payment from "./assets/payment.png";

const readLogin = `import { readLocalStorageValue } from "@mantine/hooks";

// ...

const isLoggedIn = readLocalStorageValue<boolean>({ key: "logged-in" });`;

const setLogin = `const [, setIsLoggedIn] = useLocalStorage({
    key: "logged-in",
    defaultValue: false,
});

const handleLoginSuccess = () => {
  setIsLoggedIn(true);

  // TODO: navigate to shop
};
`;

const newShared = `"@mantine/notifications": {
  requiredVersion: false,
  singleton: true,
},`;

const CheckoutFlow: FC = () => {
  return (
    <ExerciseLayout
      title="Checkout Flow"
      previous="../exercise-5"
      next="../exercise-7"
      slides="https://davidnic11.github.io/workshop-enterprise-grade-micro-frontends/06-shared-routes-with-module-federation?clicks=6"
    >
      <Text>
        We have a catalog but no way to purchase any of our items, so it's high time we addressed that. The application
        needs two parts.
      </Text>
      <List py="lg">
        <List.Item>User authentication</List.Item>
        <List.Item>The checkout flow</List.Item>
      </List>
      <Text>
        You may continue from your work on the previous exercise, or check out a clean branch using the command below.
      </Text>
      <CodeHighlight my="lg" code="git checkout soln/setting-up-routes" />
      <Title py="xl" order={2}>
        User Authentication
      </Title>
      <Text>
        Users should only be able to view the shop when authenticated. To achieve this, we must implement an
        authentication check before allowing access to the shop. Users who are not authenticated should be redirected to
        the login page.
      </Text>
      <Accordion>
        <Accordion.Item value="Hint">
          <Accordion.Control>Need a hint?</Accordion.Control>
          <Accordion.Panel>
            Check out this slide for how to handle{" "}
            <Anchor
              target="_new"
              href="https://davidnic11.github.io/workshop-enterprise-grade-micro-frontends/06-complex-layouts-with-react-router?clicks=3"
            >
              complex layouts with react router.
            </Anchor>
          </Accordion.Panel>
          <Accordion.Panel></Accordion.Panel>
        </Accordion.Item>
      </Accordion>
      <Title my="md" order={3}>
        Part One
      </Title>
      <Text>
        Add the following code to the <Code>Layout</Code> in the shell application to check if a user is authenticated.
      </Text>
      <CodeHighlight my="lg" code={readLogin} />
      <Text>
        If the user is authenticated they can continue onto the shop, otherwise they should be redirected to the{" "}
        <Code>/login</Code> route.
      </Text>
      <Title order={3} py="md">
        Part Two
      </Title>
      <Text>
        The login micro-frontend (MFE) should be loaded into the <Code>Login</Code> scene in the shell application (
        <Code>src/scenes/Login</Code>) and be rendered at the <Code>/login</Code> route.
      </Text>
      <Text pt="md">
        To facilitate the login process, the login MFE (<Code>profile/login</Code>) accepts an{" "}
        <Code>onLoginSuccess</Code> prop. In the <Code>Login</Code> scene (the component that loads the login MFE), you
        can add the following code to handle the authentication portion of the requirements. However, you will need to
        add the redirection logic; you can programmatically navigate with React Router using{" "}
        <Anchor target="_blank" href="https://reactrouter.com/en/main/hooks/use-navigate">
          useNavigate.
        </Anchor>
      </Text>

      <CodeHighlight my="lg" code={setLogin} />
      <Text>
        To verifies this works, you can sign in using the login page and sign out using the account page (Clicking the
        user icon in the header). You can also modify the value in local storage, if you're one who likes taking
        advantage of the implementation details.
      </Text>

      <Title py="xl" order={2}>
        The Checkout Flow
      </Title>
      <Text>
        We need to implement a checkout flow to enable users to purchase items from the catalog. This will involve
        consuming and updating the checkout MFE (<Code>order/checkout</Code>). The checkout MFE should be loaded into
        the checkout route via the checkout scene for the shell (<Code>src/scenes/Checkout</Code>). The checkout flow
        can be described as follows.
      </Text>

      <List py="lg" type="ordered">
        <List.Item>
          The user visits/navigates to <Code>/order</Code>, where they are shown their order summary and a form to input
          their shipping information.
        </List.Item>
        <List.Item>
          After entering their shipping information and pressing “continue”, the user is moved on to{" "}
          <Code>order/checkout</Code> where they are still able to view their order summary but the form is now a
          payment form.
        </List.Item>
      </List>
      <Grid my="md">
        <Grid.Col span={{ sm: 12, md: 6 }}>
          <Image src={shipping} />
        </Grid.Col>
        <Grid.Col span={{ sm: 12, md: 6 }}>
          <Image src={payment} />
        </Grid.Col>
      </Grid>
      <Title order={3} py="md">
        Part Three
      </Title>
      <Text>
        A lot of the UI is in place, but the infrastructure for the checkout flow is in your hands. To achieve this
        flow, you'll need to:
      </Text>
      <Title order={4} py="md">
        Step One
      </Title>
      <Text>
        Update the shell application to load and defer the <Code>/order</Code> route to the
        <Code>order/checkout</Code> MFE.
        <Accordion>
          <Accordion.Item value="Hint">
            <Accordion.Control>Need a hint?</Accordion.Control>
            <Accordion.Panel>
              Check out this slide for how to handle{" "}
              <Anchor
                target="_new"
                href="https://davidnic11.github.io/workshop-enterprise-grade-micro-frontends/06-paths-in-depth?clicks=5"
              >
                deferring routes for micro-frontends.
              </Anchor>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Text>
      <Text pt="md">
        The checkout MFE has two components that will be used in the checkout flow, <Code>Shipping</Code> and{" "}
        <Code>Payment</Code>. These components are already imported in the <Code>Checkout.tsx</Code> file.
      </Text>
      <Title order={4} py="md">
        Step Two
      </Title>
      <Text>
        Update the <Code>Checkout</Code> component in <Code>checkout/src/scenes/Checkout/Checkout.tsx</Code> file to
        handle the layout and subroutes. The needed components are already imported in the file. The layout (
        <Code>Layout</Code>) should wrap <Code>Shipping</Code> and <Code>Payment</Code>.
      </Text>
      <Title order={4} py="md">
        Step Three
      </Title>
      <Text>
        Update the <Code>Layout</Code> component in{" "}
        <Code>checkout/src/scenes/Checkout/components/Layout/Layout.tsx</Code> to render the proper view for the app.
        You will need to utilize the <Code>Outlet</Code> component to accomplish this.
      </Text>
      <Title order={4} py="md">
        Step Four
      </Title>
      <Text>
        Update the <Code>useCheckout</Code> hook and implement:
        <List>
          <List.Item>
            <Code>navigateToCheckout</Code> - Should navigate the user from shipping to the payment section
          </List.Item>
          <List.Item>
            <Code>checkout</Code> - There is already some code in this function, at the bottom, implement the needed
            routing logic to return to the shop
          </List.Item>
        </List>
      </Text>
      <Title order={4} py="md">
        Step Five
      </Title>
      <Text>
        Pass the functions from <Code>useCheckout</Code> to <Code>Shipping</Code> and <Code>Payment</Code>
      </Text>
      <Text mt="md">Once completed, you should be able to navigate from shop through checkout and back again.</Text>
      <Alert my="lg" icon={<IconInfoCircle />} title="Want more user feedback on checkout?">
        The current UX doesn't give our users any notice. The existing code in <Code>useCheckout</Code> helps fix this.
        Add this code to the shell and order shared config.
        <CodeHighlight code={newShared}></CodeHighlight>
      </Alert>
    </ExerciseLayout>
  );
};

export default CheckoutFlow;
