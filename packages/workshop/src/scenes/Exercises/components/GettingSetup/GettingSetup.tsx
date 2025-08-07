import type { FC } from "react";

import { Title, Text, List, Anchor, Code, Alert } from "@mantine/core";
import { CodeHighlight } from "@mantine/code-highlight";
import { IconInfoCircle } from "@tabler/icons-react";

import ExerciseLayout from "../../shared/components/ExerciseLayout";

const GettingSetup: FC = () => {
  return (
    <ExerciseLayout title="Getting Setup" next="../exercise-1">
      <Text>
        This workshop makes a couple assumptions about your development environment. Firstly you have node (v22+), npm
        and git setup on your computer. If you don't - no worries - the following links will help you out:
      </Text>
      <List py="lg">
        <List.Item>
          <Anchor href="https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/">npm & node</Anchor>
        </List.Item>
        <List.Item>
          <Anchor href="https://git-scm.com/book/en/v2/Getting-Started-Installing-Git">git</Anchor>
        </List.Item>
      </List>
      <Text>Once npm, node, and git are installed, go ahead and install nx.</Text>
      <CodeHighlight my="lg" lang="sh" code="npm i -g nx" />
      <Title py="xl">Repo Setup</Title>
      <Text>
        The materials for this workshop are in the following GitHub{" "}
        <Anchor href="https://github.com/bitovi/enterprise-grade-micro-frontends">
          Repo (Enterprise Grade Micro Frontends)
        </Anchor>
        .
      </Text>
      <CodeHighlight
        my="lg"
        lang="sh"
        code="git clone https://github.com/bitovi/enterprise-grade-micro-frontends.git"
      />
      <Text pt="lg">
        Once cloned, checkout out the <Code>main</Code> branch and open the project in your IDE of choice - although
        this will be written with vscode in mind - and install the project dependencies.
      </Text>
      <Alert title="A Quick Note on the setup Script" icon={<IconInfoCircle />} my="xl">
        This executes a shell script that will initialize all the needed environment variables. If you are using
        windows, please be sure to execute this in bash or something sh compatible
      </Alert>
      <CodeHighlight my="lg" lang="sh" code={`npm run setup:local \nnpm install`} />
      <Text>Once installed, run the following command.</Text>
      <CodeHighlight my="lg" lang="sh" code="npm run start" />
      <Text>
        you should see the application opened with a “Hello - Nice to meet you!” message. Once you see the message you
        can go ahead and kill the dev server.
      </Text>
      <Title py="xl" order={2}>
        Nx
      </Title>
      <Text>
        Let's talk about Nx. We won't be covering how to use nx apart from what we need to run our application. This
        workshop is in a package-base nx project. A package is any project located in the packages directory.
      </Text>
      <Text pt="md">To run a command in a single package you can use the following pattern</Text>
      <CodeHighlight my="lg" code={`nx run <package-name>:<npm-script-name>`} />
      <Text>
        Try running the dev command in the <Code>workshop</Code> package and navigate the the url. Look familiar? (You
        should see “Hello - Nice to meet you!”)
      </Text>
      <Text pt="md">
        You can also run multiple project commands of the same name using run-many instead of run using the following
        pattern.
      </Text>
      <Alert title="A Quick Note on run-many" icon={<IconInfoCircle />} my="xl">
        run-many only runs three processes by default. To run more than three, you can add the parallel flag to run more
        than that <Code>{`--parallel=<number-you-want-to-run>`}</Code>
      </Alert>
      <CodeHighlight my="lg" code={`nx run-many -t <command>`} />
      <Text>Try running the dev command with run-many and parallel set to 6</Text>

      <Text pt="md">If you got this far, congrats! You're all setup!</Text>
    </ExerciseLayout>
  );
};

export default GettingSetup;
