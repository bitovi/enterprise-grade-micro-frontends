import type { FC } from "react";

import { Accordion, Alert, Code, List, Table, Text, Title } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";
import { CodeHighlight } from "@mantine/code-highlight";

import ExerciseLayout from "../../shared/components/ExerciseLayout";

const types = `interface BaseCart {
  id: number;
  userId: number;
}

type Product = CatalogItem & { quantity: number }

export interface UserCart extends BaseCart {
  tax: number;
  subTotal: number;
  total: number;
  products: Array<Product>;
}`;

const localStorageHook = `const [cart, setCart] = useLocalStorage<UserCart>({
  key: cartKey,
  defaultValue: newCart,
});
  
// TODO: in Part 2, add the event listener to update the cart state

return cart
`;

const addToCartEvent = `
// shared-types/types/order/index.d.ts
export namespace Order {
  // Other types...

  export interface CatalogItem {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
  }
  
  type AddToCartEvent = { item: CatalogItem };
}
`;

const globalTypeHelp = `declare global {
  interface Window {
    addEventListener<K extends never>(
      type: K,
      listener: (this: Window, ev: never) => void
    );
    removeEventListener<K extends never>(
      type: K,
      listener: (ev: never) => void
    );
    dispatchEvent<K extends never>(ev: never);
  }
}
`;

const addFunction = `export const addToCart = ({
  id,
  name,
  price,
  description,
  imgSrc,
}: CartItem) => {};`;

const useCheckoutUpdates = `import type { UserCart } from "@services/cart";
import { cartKey, newCart } from "@services/cart";
import { useLocalStorage } from "@mantine/hooks";
 
// ...

const useCheckout = () => {

  const [, setCart] = useLocalStorage<UserCart>({ key: cartKey });

  // ...

  const checkout = () => {
    setCart(newCart);

    // rest of checkout
  }

// ...

}
`;

const AddingItemsToCart: FC = () => {
  return (
    <ExerciseLayout
      title="Adding Items to Cart"
      previous="../exercise-6"
      next="../exercise-8"
      slides="https://davidnic11.github.io/workshop-enterprise-grade-micro-frontends/07-eventing-pub-sub"
    >
      <Text>
        With all of our routes set up, it's time to get our MFEs communicating. You may continue from your work on the
        previous exercise, or check out a clean branch using the command below.
      </Text>
      <CodeHighlight my="lg" code="git checkout soln/checkout-flow" />
      <Text pt="md">
        Adding a catalog item to the cart is a cross-team effort.{" "}
        <Text component="span" fw="bold">
          The order team, in charge of the cart, needs to create the cart state, the event type they are expecting, and
          create listeners to respond to any incoming events
        </Text>
        . The catalog team needs to dispatch those events.
      </Text>
      <List py="lg">
        <List.Item>Publisher - catalog team</List.Item>
        <List.Item>Subscriber - order team</List.Item>
      </List>
      <Title order={2} py="xl">
        Cart Shape
      </Title>
      <Alert title="Don't copy these types!" icon={<IconInfoCircle />} mb="xl">
        These types are already in your project, you do not need to copy them over. This is an overview of the Cart
        state shape since you will be implementing some business logic.
      </Alert>
      <Text pt="md">
        The team has already decided on the cart state and added the cart and product types to the repository. They look
        as follows.
      </Text>
      <CodeHighlight code={types} my="lg" />
      <Text>
        The <Code>UserCart</Code> type can be imported using:
      </Text>
      <CodeHighlight my="lg" code={`import type { UserCart } from "@services/cart";`} />
      <Title order={2} py="xl">
        Part 1 - Cart State
      </Title>
      <Alert title="What's up with local storage" icon={<IconInfoCircle />} mb="xl">
        Since there is not a backend associated with this project, we will be putting the cart state in local storage as
        a form of persistence, as opposed to a communication method.
      </Alert>
      <Text>
        The logic that resides in the <Code>useCart</Code> hook currently has a hard-coded cart. Let's start by adding
        the cart state (of type <Code>UserCart</Code>); we want to store it in local storage like the login state. To do
        this, the cart service has a couple of helpers, the <Code>cartKey</Code> and the <Code>newCart</Code>, which
        serve as the local storage key and the default value, respectively.
      </Text>
      <CodeHighlight my="lg" code={`import { cartKey, getTotals, newCart } from "@services/cart";`} />
      <Accordion>
        <Accordion.Item value="hint">
          <Accordion.Control>
            Give it a try using the <Code>useLocalStorage</Code> hook, if you're getting stuck expand this for the code
          </Accordion.Control>
          <Accordion.Panel>
            <CodeHighlight my="lg" code={localStorageHook} />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
      <Title order={2} py="xl">
        Part 2 - Event Listening
      </Title>
      <Text>
        Next, create a custom event listener called <Code>add-to-cart</Code> that listens for an event with the
        following shape (below) and updates the cart state.
      </Text>
      <CodeHighlight my="lg" code={addToCartEvent} />
      <Text>
        The event listener can be typed in the <Code>order</Code> section of the <Code>shared-types</Code>. Below is the
        template for merging to the global <Code>Window</Code> type, replace the <Code>never</Code>s with the correct
        values.
      </Text>
      <CodeHighlight my="lg" code={globalTypeHelp} />
      <Text>The updating cart logic should work as follows:</Text>
      <List py="lg">
        <List.Item>The item should be added if not in the cart's product array.</List.Item>
        <List.Item>If the item is already in the cart's product array, its quantity should be increased.</List.Item>
      </List>
      <Text>
        You can use some helper functions to help implement the add-to-cart logic and create the new product array.
      </Text>
      <CodeHighlight my="lg" code={`import { addToProducts, increaseQuantity, itemInCart } from "./utilities";`} />
      <Table my="xl" withColumnBorders>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Function</Table.Th>
            <Table.Th>Description</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td>
              <Code>itemInCart</Code>
            </Table.Td>
            <Table.Td>
              Returns <Code>true</Code> if the given product exists within the passed in cart
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>
              <Code>increaseQuantity</Code>
            </Table.Td>
            <Table.Td>
              Returns a new <Code>{`Product[]`}</Code> with the quantity of the passed in item id increased
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>
              <Code>addToProducts</Code>
            </Table.Td>
            <Table.Td>
              Returns a new <Code>{`Product[]`}</Code> with the product passed in included
            </Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>
      <Text>To complete the process, update the cart order total using getTotals from the cart service.</Text>
      <CodeHighlight my="lg" code={`import { getTotals } from '@services/cart'`} />
      <Table my="xl" withColumnBorders>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Function</Table.Th>
            <Table.Th>Description</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td>
              <Code>getTotals</Code>
            </Table.Td>
            <Table.Td>
              Returns an object containing the <Code>tax</Code>, <Code>subtotal</Code>, and total for the{" "}
              <Code>cart</Code>
            </Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>
      <Title order={2} py="xl">
        Part 3 - Dispatching
      </Title>
      <Text>
        Next, wire up the “Add to Cart” button in the catalog list and catalog item MFEs. To do this, you can add the
        dispatch logic to the <Code>addToCart</Code> function in <Code>/catalog/src/utilities/cart.ts</Code> file. It
        should look like:
      </Text>
      <CodeHighlight my="lg" code={addFunction} />
      <Text>
        This function can be imported into the <Code>CatalogListItem</Code> (
        <Code>catalog/src/scenes/CatalogList/components/CatalogListItem/CatalogListItem.tsx</Code>) and{" "}
        <Code>Details</Code> (<Code>catalog/src/scenes/CatalogItem/components/Details/Details.tsx</Code>) component
        using the following import alias:
      </Text>
      <CodeHighlight my="lg" code={`import { addToCart } from "@utilities/cart";`} />
      <Text>
        Inside each of these components is a button titled "Add to Cart" with empty <Code>onClick</Code> props. The
        components props can be passed directly to <Code>addToCart</Code>
      </Text>
      <Alert title="To Make it Work With Checkout" icon={<IconInfoCircle />} my="xl">
        <Text>
          To link this cart together with the checkout process, remove the hard-coded id in the{" "}
          <Code>OrderSummary</Code> component in <Code>order/src/shared/components/OrderSummary</Code> component. The{" "}
          <Code>id</Code> can be removed from the <Code>queryKey</Code> array and the <Code>query</Code> function as
          well.
        </Text>
        <Text mt="lg">
          Next, you'll need to update the <Code>useCheckout</Code> hook inside of{" "}
          <Code>order/src/scenes/Checkout/hooks/useCheckout/useCheckout.tsx</Code>
          to reset the cart on checkout. You can accomplish this using the following code:
          <CodeHighlight my="lg" code={useCheckoutUpdates} />
          In practice, this would be retrieved from the backend separately to avoid sharing a state value.
        </Text>
      </Alert>
      <Text>
        Once complete, you should be able to add items to the cart and see the price being reflected in the header. If
        you hover over the cart icon, you should see the items you've added.
      </Text>
    </ExerciseLayout>
  );
};

export default AddingItemsToCart;
