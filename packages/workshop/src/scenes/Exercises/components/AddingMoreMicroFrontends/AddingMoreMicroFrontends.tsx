import type { FC } from "react";

import { Alert, Anchor, Code, Image, List, Text } from "@mantine/core";
import { CodeHighlight } from "@mantine/code-highlight";
import { IconInfoCircle } from "@tabler/icons-react";
import { Link } from "react-router-dom";

import ExerciseLayout from "../../shared/components/ExerciseLayout";

import header from "./assets/completed-header.png";

const AddingMoreMicroFrontends: FC = () => {
  return (
    <ExerciseLayout
      title="Adding More Micro-Frontends"
      next="../exercise-5"
      previous="../exercise-3"
      slides="https://davidnic11.github.io/workshop-enterprise-grade-micro-frontends/05-project-configuration"
    >
      <Text>
        Looking at the current shop vs the final product, our Header is missing a couple of key features for our users –
        the cart and the search bar.
      </Text>
      <Image my="lg" src={header} />
      <Text>
        Both features are MFEs the Header needs to consume. You may continue from your work on the previous exercise, or
        check out a clean branch using the command below.
      </Text>
      <CodeHighlight my="lg" code="git checkout soln/fault-tolerance" />
      <Alert title="Module Federation Configuration" icon={<IconInfoCircle />} my="xl">
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
      </Alert>

      <Text pt="md">
        Configure the order and catalog projects to expose the cart and search, respectively, along with any additional
        configurations the projects may need. Then, add the two MFEs to the header.{" "}
      </Text>
      <List py="lg">
        <List.Item>
          The cart can be placed in <Code>marketing/src/scenes/Header/components/Shortcuts/Shortcuts.tsx</Code> (Don't
          forget the props!)
        </List.Item>

        <List.Item>
          The search can be placed in <Code>marketing/src/scenes/Header/components/Search/Search.tsx</Code>
        </List.Item>
      </List>
    </ExerciseLayout>
  );
};

export default AddingMoreMicroFrontends;
