import type { FC } from "react";

import { Code, Image, List, Text } from "@mantine/core";
import { CodeHighlight } from "@mantine/code-highlight";

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
        Looking at the current shop vs the final product, our Header is missing
        a couple of key features for our users – the cart and the search bar.
      </Text>
      <Image my="lg" src={header} />

      <Text>
        Both features are MFEs the Header needs to consume. You may continue
        from your work on the previous exercise, or check out a clean branch
        using the command below.
      </Text>
      <CodeHighlight my="lg" code="git checkout soln/fault-tolerance" />
      <Text pt="md">
        Configure the order and catalog projects to expose the cart and search,
        respectively, along with any additional configurations the projects may
        need. Then, add the two MFEs to the header.{" "}
      </Text>
      <List py="lg">
        <List.Item>
          The cart can be placed in{" "}
          <Code>
            marketing/src/scenes/Header/components/Shortcuts/Shortcuts.tsx
          </Code>
        </List.Item>
        <List.Item>
          The search can be placed in{" "}
          <Code>marketing/src/scenes/Header/components/Search/Search.tsx</Code>
        </List.Item>
      </List>
    </ExerciseLayout>
  );
};

export default AddingMoreMicroFrontends;
