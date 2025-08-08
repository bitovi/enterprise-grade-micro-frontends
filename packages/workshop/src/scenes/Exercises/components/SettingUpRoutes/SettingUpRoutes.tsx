import type { FC } from "react";

import { Alert, Anchor, Code, List, Text, Title } from "@mantine/core";
import { CodeHighlight } from "@mantine/code-highlight";
import { IconInfoCircle } from "@tabler/icons-react";

import ExerciseLayout from "../../shared/components/ExerciseLayout";
import { Link } from "react-router-dom";

const SettingUpRoutes: FC = () => {
  return (
    <ExerciseLayout
      title="Setting Up Routes"
      next="../exercise-6"
      previous="../exercise-3"
      slides="https://davidnic11.github.io/workshop-enterprise-grade-micro-frontends/06-complex-layouts-with-react-router?clicks=3"
    >
      <Text>
        You may continue from your work on the previous exercise, or check out a clean branch using the command below.
      </Text>
      <CodeHighlight my="lg" code="git checkout soln/adding-more-micro-frontends" />
      <Text>
        We have several pages left to set up for our application. Let's take a moment to wire up the following MFEs with
        their respective routes. Add the <Code>Route</Code>s to the <Code>App.tsx</Code> file in the shell application.
        Each MFE should maintain the site's layout.
      </Text>
      <Alert title="Module Federation Configuration" icon={<IconInfoCircle />} my="xl">
        Recall how to configure module federation between remotes and hosts from{" "}
        <Anchor component={Link} to="../exercise-1">
          the previous section
        </Anchor>
        . Also check out the cheat sheet for quick reminders for things like port numbers and associated MFEs.
      </Alert>
      <List py="lg" type="ordered">
        <List.Item>
          <Code>marketing/about</Code> at <Code>/about</Code>
          <List>
            <List.Item>
              You can load this in to the <Code>About</Code> scene in <Code>src/scenes/About</Code>
            </List.Item>
          </List>
        </List.Item>
        <List.Item>
          <Code>marketing/contact</Code> at <Code>/contact</Code>
          <List>
            <List.Item>
              You can load this in to the <Code>Contact</Code> scene in <Code>src/scenes/Contact</Code>
            </List.Item>
          </List>
        </List.Item>
        <List.Item>
          <Code>profile/account</Code> at <Code>/account</Code>
          <List>
            <List.Item>
              We haven't worked in the profile package yet, it will needs its module federation plugin configured
            </List.Item>
            <List.Item>
              The types for profile have already been added to <Code>shared-types</Code>
            </List.Item>
            <List.Item>
              You can load this in to the <Code>Account</Code> scene in <Code>src/scenes/Account</Code>
            </List.Item>
          </List>
        </List.Item>
      </List>
      <Text>
        Once added, you should be able to navigate to each page using the header. The account page can be reached by
        clicking on the user icon.
      </Text>

      <Title order={2} py="xl">
        Viewing Catalog Items
      </Title>
      <Text pt="md">
        Currently, there is no way to view the details of the items in the catalog list. Let's fix that. Create a
        dynamic segment under the <Code>/shop</Code>
        route so that <Code>shop/item/1</Code> and <Code>shop/item/2</Code> render the <Code>catalog/item</Code> MFE.
      </Text>
      <Alert title="Some Helpful Links" icon={<IconInfoCircle />} my="xl">
        You will need to use <Code>useParams</Code> to complete this section you can either check out{" "}
        <Anchor target="_new" href="https://reactrouter.com/6.30.1/hooks/use-params">
          the official docs
        </Anchor>{" "}
        or revisit the{" "}
        <Anchor
          target="_new"
          href="https://davidnic11.github.io/workshop-enterprise-grade-micro-frontends/06-paths-in-depth?clicks=6"
        >
          slides.
        </Anchor>
      </Alert>
      {/*  */}
      <Text pt="md">
        After setting up the routes, update the <Code>CatalogItem</Code> component in
        <Code>catalog/src/scene/CatalogItem</Code> to use the dynamic path segment instead of the currently hard-coded
        id variable.
      </Text>
    </ExerciseLayout>
  );
};

export default SettingUpRoutes;
