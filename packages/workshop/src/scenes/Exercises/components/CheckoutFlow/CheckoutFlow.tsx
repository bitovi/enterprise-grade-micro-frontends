import type { FC } from "react";

import { Accordion, Alert, Anchor, Code, Grid, Image, List, Text, Title } from "@mantine/core";
import { CodeHighlight } from "@mantine/code-highlight";
import { IconInfoCircle } from "@tabler/icons-react";

import ExerciseLayout from "../../shared/components/ExerciseLayout";

import shipping from "./assets/shipping.png";
import payment from "./assets/payment.png";
import { Link } from "react-router-dom";

const readLogin = `import { readLocalStorageValue } from "@mantine/hooks";

const Layout: FC = () => {
  const isLoggedIn = readLocalStorageValue<boolean>({ key: "logged-in" });

  if (!isLoggedIn) {
    // ... move user to login
  }

  return (
    // ...
  )
}`;

const setLogin = `
const LoginScene: FC = () => {
  const [, setIsLoggedIn] = useLocalStorage({
    key: "logged-in",
    defaultValue: false,
  });

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    // TODO: navigate to shop
  };
  // ...
}`;

const shellRouteDefer = `<BrowserRouter>
  {/* ... Other Routes ... */}
  <Route path="/order" element={<Layout />}>
    <Route index path="*" element={<Checkout />} />
  </Route>
</BrowserRouter>`;

const checkoutRoutes = `
// other imports
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Shipping from "./components/Shipping";
import Payment from "./components/Payment";

const Checkout: FC = () => {
  return (
    <Routes>
      <Route path="*" element={<Layout />}>
        <Route index element={<Shipping onSubmit={() => {}} />} />
        <Route path="checkout" element={<Payment onSubmit={() => {}} />} />
      </Route>
    </Routes>
  );
};`;

const layoutOutlet = `

const Layout: FC = () => {
  return (
    <Grid align="center">
      <Grid.Col span={{ md: 12, lg: 6 }}>
        <OrderSummary />
      </Grid.Col>
      <Grid.Col span={{ md: 12, lg: 6 }}>
          {/** Replace this placeholder */}
      </Grid.Col>
    </Grid>
  );
};`;

const useCheckoutHook = `import { useNavigate } from "react-router-dom";

export const useCheckout = () => {
  const navigate = useNavigate();

  const navigateToCheckout = () => {
    // Navigate to payment step
  };

  const checkout = () => {    
    // After successful checkout, return to /shop
  };

  return { navigateToCheckout, checkout };
};`;

const wireUpComponents = `const { checkout, navigateToCheckout } = useCheckout();

<Route index element={<Shipping onSubmit={navigateToCheckout} />
<Route path="checkout" element={<Payment onSubmit={checkout} />`;

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
        You may continue from your work on the previous exercise, or check out a clean branch using the command below.
      </Text>
      <CodeHighlight my="lg" code="git checkout soln/setting-up-routes" />
      <Title py="xl" order={2}>
        Objective
      </Title>
      <Text>
        We have a catalog but no way to purchase any of our items, so it's high time we addressed that. In this
        exercise, you'll learn to create protected routes that require authentication before access and configure route
        deferring to delegate entire route trees to remote applications. The application needs two main parts to
        complete the checkout experience:
      </Text>
      <List py="lg">
        <List.Item>User authentication</List.Item>
        <List.Item>The checkout flow</List.Item>
      </List>
      <Title py="xl" order={2}>
        User Authentication
      </Title>
      <Text>
        Users should only be able to view the shop when authenticated. To achieve this, we must implement an
        authentication check before allowing access to the shop. Users who are not authenticated should be redirected to
        the login page.
      </Text>

      <Title my="md" order={3}>
        Authentication Guard
      </Title>
      <Text>
        Add the following code to the <Code>Layout</Code> in the shell application to check if a user is authenticated.
      </Text>
      <CodeHighlight my="lg" code={readLogin} />
      <Text>
        If the user is authenticated they can continue onto the shop, otherwise they should be redirected to the{" "}
        <Code>/login</Code> route.
      </Text>
      <Accordion my="lg">
        <Accordion.Item value="Hint">
          <Accordion.Control>Stuck? Click here for a helpful hint!</Accordion.Control>
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
      <Title order={3} py="md">
        Login Integration
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
        the checkout route via the checkout scene for the shell (<Code>src/scenes/Checkout</Code>).
      </Text>
      <Alert title="Module Federation Configuration and Async Imports" icon={<IconInfoCircle />} my="xl">
        Recall how to configure module federation between remotes and hosts from{" "}
        <Anchor component={Link} to="../exercise-1">
          the previous section
        </Anchor>
        . Also check out the cheat sheet for quick reminders for things like port numbers and associated MFEs. As a
        quick reminder for new micro-frontends:
        <List py="lg">
          <List.Item>Create the types for the modules and namespaces for the projects and MFEs</List.Item>
          <List.Item>Update the types of the MFEs to be consumed</List.Item>
          <List.Item>Expose the MFEs in their respective projects</List.Item>
          <List.Item>Consume the MFEs in the shell application</List.Item>
          <List.Item>Add any shared modules</List.Item>
          <List.Item>Import and use the MFEs</List.Item>
        </List>
        Additionally, don't forget the only way to handle async imports with React is to use <Code>React.lazy</Code> and{" "}
        <Code>Suspense</Code>.
      </Alert>
      <Text>The checkout flow can be described as follows.</Text>

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
        Building the Checkout Infrastructure
      </Title>
      <Text>
        A lot of the UI is in place, but the infrastructure for the checkout flow is in your hands. To achieve this
        flow, you'll need to:
      </Text>
      <Title order={4} py="md">
        Configure Route Deferring
      </Title>
      <Text>
        First, update the shell application to defer the entire <Code>/order</Code> route to the{" "}
        <Code>order/checkout</Code> MFE. This allows the checkout micro-frontend to handle all routing under{" "}
        <Code>/order</Code>, including sub-routes like <Code>/order/checkout</Code>.
      </Text>
      <Text pt="md">
        The shell will need to create a "base route" and load the MFE with a wildcard to catch all sub-routes:
      </Text>
      <CodeHighlight my="lg" code={shellRouteDefer} />
      <Accordion my="lg">
        <Accordion.Item value="Hint">
          <Accordion.Control>Need a hint?</Accordion.Control>
          <Accordion.Panel>
            Check out this slide for how to handle{" "}
            <Anchor
              target="_new"
              href="https://davidnic11.github.io/workshop-enterprise-grade-micro-frontends/06-shared-routes-with-module-federation?clicks=3"
            >
              deferring routes for micro-frontends.
            </Anchor>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
      <Title order={4} py="md">
        Set Up Checkout Routes
      </Title>
      <Text>
        Next, configure the routing within the checkout MFE. Update the <Code>Checkout</Code> component in{" "}
        <Code>order/src/scenes/Checkout/Checkout.tsx</Code> to handle the layout and sub-routes. The{" "}
        <Code>Shipping</Code> and <Code>Payment</Code> components are already imported and ready to use.
      </Text>
      <CodeHighlight my="lg" code={checkoutRoutes} />
      <Title order={4} py="md">
        Connect the Layout
      </Title>
      <Text>
        Update the <Code>Layout</Code> component in <Code>order/src/scenes/Checkout/components/Layout/Layout.tsx</Code>{" "}
        to render the appropriate child components. Use the <Code>Outlet</Code> component from React Router to display
        either the shipping or payment form.
      </Text>
      <CodeHighlight my="lg" code={layoutOutlet} />
      <Title order={4} py="md">
        Implement Navigation Logic
      </Title>
      <Text>
        Update the <Code>useCheckout</Code> hook to handle navigation between steps and completion. You'll need to
        implement two key functions:
      </Text>
      <List my="md">
        <List.Item>
          <Code>navigateToCheckout</Code> - Moves users from the shipping form to the payment form
        </List.Item>
        <List.Item>
          <Code>checkout</Code> - Processes the final payment and returns users to the shop
        </List.Item>
      </List>
      <CodeHighlight my="lg" code={useCheckoutHook} />
      <Title order={4} py="md">
        Wire Up the Components
      </Title>
      <Text>
        Finally, pass the navigation functions from <Code>useCheckout</Code> to the <Code>Shipping</Code> and{" "}
        <Code>Payment</Code> components so they can trigger the appropriate actions when users interact with the forms.
      </Text>
      <CodeHighlight my="lg" code={wireUpComponents} />
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
