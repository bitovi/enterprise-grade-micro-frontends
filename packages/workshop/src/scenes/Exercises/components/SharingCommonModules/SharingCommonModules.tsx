import type { FC } from "react";

import { Accordion, Text, Code, Anchor } from "@mantine/core";
import { CodeHighlight } from "@mantine/code-highlight";

import ExerciseLayout from "../../shared/components/ExerciseLayout";

const additional = `const addition =  {
        "@mantine/core": {
          requiredVersion: "^7.10.2",
          singleton: true,
        },
        "@mantine/emotion": {
          requiredVersion: "^7.10.2",
          singleton: true,
        },
        "@tanstack/react-query": {
          requiredVersion: "^5.48.0",
          singleton: true,
        },
}`;

const SharingCommonModules: FC = () => {
  return (
    <ExerciseLayout
      title="Sharing Common Modules"
      previous="../exercise-1"
      next="../exercise-3"
      slides="https://davidnic11.github.io/workshop-enterprise-grade-micro-frontends/05-shared-configuration"
    >
      <Text>
        You may continue from your work on the previous exercise, or check out a clean branch using the command below.
      </Text>
      <CodeHighlight my="lg" code="git checkout soln/configuring-module-federation" />

      <Text>
        These applications have some dependencies that are good candidates for sharing via Module Federation. Create a
        list of libraries you think should be shared and configure the Module Federation plugin to share them. Once
        added, run the application to ensure everything still works.
      </Text>
      <Text pt="md">
        Be prepared to discuss why the library is a good candidate for sharing and why you chose the sharing
        configuration (singleton, eager, etc.) you did for each library.
      </Text>
      <Anchor
        mt="lg"
        target="_new"
        href="https://davidnic11.github.io/workshop-enterprise-grade-micro-frontends/05-shared-configuration"
      >
        Link to Slides for the shared modules
      </Anchor>
      <Accordion py="lg">
        <Accordion.Item value="additional">
          <Accordion.Control>Here are some additional libraries we can share</Accordion.Control>
          <Accordion.Panel>
            <CodeHighlight code={additional} />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
      <Text>
        Once added go ahead and remove the <Code>TempWrapper</Code>s from the Header, Footer, Catalog List and Filter
      </Text>
    </ExerciseLayout>
  );
};

export default SharingCommonModules;
