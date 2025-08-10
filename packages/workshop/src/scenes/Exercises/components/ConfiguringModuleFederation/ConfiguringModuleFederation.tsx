import type { FC } from "react";

import { Code, Flex, Image, List, Text, Title, Table, Alert, Anchor } from "@mantine/core";

import { CodeHighlight, CodeHighlightTabs } from "@mantine/code-highlight";

import ExerciseLayout from "../../shared/components/ExerciseLayout";

import { IconInfoCircle } from "@tabler/icons-react";

import current from "./assets/current-app.png";
import goal from "./assets/goal-app.png";
import { Link } from "react-router-dom";

const headerExposed = `export default defineConfig({
  // ... other configs
  moduleFederation: {
     options: {
        name: "marketing",
        filename: "remoteEntry.js",
        exposes: {
          "./header": "./src/scenes/Header/index.ts",
        },
      },
    }
});`;

const buildConfig = `export default defineConfig({
  // ... other plugins
  moduleFederation: {
    options: {
      // plugin options
    },
  },
});`;

const shellConfig = `export default defineConfig({
  moduleFederation: {
    options: {
      name: "shell-application",
      remotes: {
        marketing: "marketing@http://localhost:3004/remoteEntry.js",
      },
    }
  }
});`;

const shellFinal = `export default defineConfig({
  moduleFederation: {
    options: {
      name: "shell-application",
      remotes: {
        marketing: "marketing@http://localhost:3004/remoteEntry.js",
      },
      shared: {
        react: {
          requiredVersion: "^18.2.0",
          singleton: true,
          eager: true,
        },
        "react-dom": {
          requiredVersion: "^18.2.0",
          singleton: true,
          eager: true,
        },
        "react-router-dom": {
          requiredVersion: "^6.23.1",
          singleton: true,
        },
      },
    },
  },
})`;

const headerFinal = `export default defineConfig({
  moduleFederation: {
    options: {
      name: "marketing",
      filename: "remoteEntry.js",
      exposes: {
        "./header": "./src/scenes/Header/index.ts",
      },
      shared: {
        react: {
          requiredVersion: "^18.2.0",
          singleton: true,
          eager: true,
        },
        "react-dom": {
          requiredVersion: "^18.2.0",
          singleton: true,
          eager: true,
        },
        "react-router-dom": {
          requiredVersion: "^6.23.1",
          singleton: true,
        },
      },
    },
  },
})`;

const layoutHeader = `// ...imports 

import { Suspense, lazy } from "react";

const Header = lazy(() => import("marketing/header"));

const Layout: FC = () => {
  return (
    <Flex sx={{ flex: 1 }} direction="column" justify="space-between">
      <Suspense>
        <Header />
      </Suspense>
      <Flex w="100%" sx={{ flex: 1 }} py="xl" component="main">
        <Container fluid w={{ sm: "sm", md: 800, lg: 1330, xl: 1400 }}>
          <Outlet />
        </Container>
      </Flex>
       <Box component="footer" c="white" py="lg" bg="dark">
        footer
      </Box>
    </Flex>
  );
};

export default Layout;`;

const teams = [
  // { name: "Shell", url: "http://localhost:3000", mfes: [] },
  { name: "Marketing", url: "http://localhost:3004", mfes: ["about", "contact", "footer", "header"] },
  { name: "Catalog", url: "http://localhost:3001", mfes: ["catalog-item", "catalog-list", "filter", "search"] },
  { name: "Profile", url: "http://localhost:3003", mfes: ["account", "login"] },
  { name: "Order", url: "http://localhost:3002", mfes: ["cart", "checkout"] },
];

const indexDTs = `import type { FC } from "react";

export namespace Marketing {
  export type Header = FC;
}`;

const updatedHeader = `
// ... imports
import type { Marketing } from 'shared-types'

const Header: Marketing.Header = () => {
  // ... rest of code stays the same
}`;

const remotesDTs = `declare module "marketing/header" {
  import type { FC } from "react";

  export default function Header(): ReturnType<FC>;
}`;

const shared = `
 const shared = {
        react: {
          requiredVersion: "^18.2.0",
          singleton: true,
          eager: true,
        },
        "react-dom": {
          requiredVersion: "^18.2.0",
          singleton: true,
          eager: true,
        },
        "react-router-dom": {
          requiredVersion: "^6.23.1",
          singleton: true,
        },
    }`;

const ConfiguringModuleFederation: FC = () => {
  return (
    <ExerciseLayout
      title="Configuring Module Federation"
      slides="https://davidnic11.github.io/workshop-enterprise-grade-micro-frontends/05-project-configuration"
      next="../exercise-2"
      previous="../set-up"
    >
      <Text>Start by checking out this branch</Text>
      <CodeHighlight my="lg" lang="sh" code="git checkout exercise/configuring-module-federation" />
      <Text>
        Go ahead and do a little bit of poking around to get familiar with the project. Inside packages there are six
        projects, the four team projects:
      </Text>
      <List py="lg">
        <List.Item>
          <Code>catalog</Code>
        </List.Item>
        <List.Item>
          <Code>marketing</Code>
        </List.Item>
        <List.Item>
          <Code>order</Code>
        </List.Item>
        <List.Item>
          <Code>profile</Code>
        </List.Item>
      </List>
      <Text>
        All contain micro-frontends for their respective team. While
        <Code>shared-types</Code> is where all the shared types will go and <Code>shell</Code> is the project's shell
        application.
      </Text>
      <Text pt="md">
        Each of the packages except <Code>shared-types</Code> house component logic and have the same file structure.
        The most important files and directories to know about are:
        <List py="lg">
          <List.Item>
            <Code>rsbuild.config.ts</Code> - The project's build configuration file
          </List.Item>
          <List.Item>
            <Code>src/</Code> - all application logic
          </List.Item>
          <List.Item>
            <Code>src/scenes/</Code> - contains all the micro-frontends the project will expose
          </List.Item>
        </List>
      </Text>
      <Title py="xl" order={2}>
        Objective
      </Title>
      <Text>
        Currently our project looks a little barren, if you start the application (<Code>npm start</Code>) you should
        see the makings of an application with placeholders. The goal of this exercise is to remove the placeholders and
        load in the actual micro-frontends.
      </Text>
      <Flex my="lg" direction={{ sm: "column", md: "row" }} align="center" justify="center" gap="xl">
        <Image flex="initial" src={current} miw={0} />
        <Image flex="initial" src={goal} miw={0} />
      </Flex>
      <Title py="xl" order={2}>
        Exercise
      </Title>
      <Text>
        Using module federation, pull the Header, Footer, Filter, and CatalogList into the <Code>/shop</Code> section of
        the shell application. The table below is provided as a reference to help you out throughout the exercise, it
        can also be found in the Cheat Sheet for the workshop underneath the exercise list.
      </Text>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Team</Table.Th>
            <Table.Th>Project URL</Table.Th>
            <Table.Th>Associated MFEs</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {teams.map(({ name, url, mfes }) => (
            <Table.Tr key={name}>
              <Table.Td>{name}</Table.Td>
              <Table.Td>{url}</Table.Td>
              <Table.Td>
                <List>
                  {mfes.map((mfe) => (
                    <List.Item key={mfe}>{mfe}</List.Item>
                  ))}
                </List>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
      <Title py="xl" order={3}>
        Adding the Header
      </Title>
      <Text>Let's look at adding the Header together. To add the Header we will need to: </Text>
      <List py="lg">
        <List.Item>Create the types for the modules and namespaces for the projects and MFEs</List.Item>
        <List.Item>Update the types of the Header to be consume the new types</List.Item>
        <List.Item>Expose the Header in the marketing project</List.Item>
        <List.Item>Consume the Header in the shell application</List.Item>
        <List.Item>Add any shared modules</List.Item>
        <List.Item>Import the Header and render it</List.Item>
      </List>
      <Title py="xl" order={4}>
        Creating the Types
      </Title>
      <Text>
        There are two types we need to add in order to have a typesafe integration - the remote import declaration and
        the type of the Header. All shared types should go into the <Code>shared-types</Code> package under their
        respected team name. The Header is under the marketing team, so we will be adding our types to{" "}
        <Code>shared-types/src/marketing</Code>.
        <Alert title="A Quick Note on Finding MFE Types" icon={<IconInfoCircle />} my="xl">
          The best way to determine the shape of each micro-frontend is to check the <Code>scene</Code> that the project
          is in. In the case of the Header, its scene is <Code>marketing/scenes/header</Code>, and if we check{" "}
          <Code>Header.tsx</Code> we see that the Header is a react component that doesn't take any props.
        </Alert>
      </Text>
      <Text pt="md">
        Starting with <Code>index.d.ts</Code>, which is where our Header type definition will live, the Header is a
        react component that doesn't take any props, so we can update the file to include:
      </Text>
      <CodeHighlightTabs
        my="lg"
        code={[{ fileName: "shared-types/marketing/index.d.ts", language: "ts", code: indexDTs }]}
      />
      <Text>
        Next we will need to add the Header types for its dynamic import. To do this, we need to update the
        <Code>remotes.d.ts</Code> file.
      </Text>
      <CodeHighlightTabs
        my="lg"
        code={[{ fileName: "shared-types/marketing/remotes.d.ts", language: "ts", code: remotesDTs }]}
      />
      <Title py="xl" order={4}>
        Consuming the Types
      </Title>
      <Text>Now the Header needs to be updated to consume the new types.</Text>
      <CodeHighlightTabs
        my="lg"
        code={[{ fileName: "marketing/src/scenes/Header/Header.tsx", language: "ts", code: updatedHeader }]}
      />
      <Text>With this, the typing portion is done and we can move to configuring Module Federation.</Text>
      <Title py="xl" order={4}>
        Exposing the Header
      </Title>
      <Text>
        To expose the Header we need to update the marketing team's Module Federation plugin. Since we're using RSBuild,
        Module Federation can be configured in the <Code>rsbuild.config.ts</Code> file.
      </Text>
      <CodeHighlightTabs
        my="lg"
        code={[{ fileName: "marketing/rsbuild.config.ts", language: "ts", code: headerExposed }]}
      />
      <Title py="xl" order={4}>
        Consuming the Header
      </Title>
      <Text>
        Likewise, to consume the Header we need to update the shell team's Module Federation plugin. Since the shell
        application will consume the Header.
      </Text>
      <CodeHighlightTabs my="lg" code={[{ fileName: "shell/rsbuild.config.ts", language: "ts", code: shellConfig }]} />
      <Title py="xl" order={4}>
        Sharing Modules
      </Title>
      <Text>
        The next step is to determine if there are any modules that need to be shared between the two projects. We will
        be going over the specfics of what makes a good shared module in the next section; however, in a react project
        with React Router, at a minimum you will need <Code>react</Code>, <Code>react-dom</Code>, and{" "}
        <Code>react-router-dom</Code>. The configuration for sharing the modules needs to be added to the Module
        Federation config of both teams.
      </Text>
      <CodeHighlightTabs
        my="lg"
        code={[{ fileName: "marketing/rsbuild.config.ts", language: "ts", code: headerFinal }]}
      />
      <CodeHighlightTabs my="lg" code={[{ fileName: "shell/rsbuild.config.ts", language: "ts", code: shellFinal }]} />
      <Title py="xl" order={4}>
        Importing and Rendering the Header
      </Title>
      <Text>
        Now that Module Federation is fully configured, we can import and render the Header. The Header can be placed in{" "}
        <Code>shell/src/components/Layout/Layout.tsx</Code> where the "header" placeholder is.
      </Text>
      <Alert title="Don't forget Suspense!" icon={<IconInfoCircle />} my="xl">
        The only way to handle dynamic imports with React is to use <Code>React.lazy</Code> and <Code>Suspense</Code>.
      </Alert>
      <CodeHighlightTabs
        my="lg"
        code={[{ fileName: "shell/src/components/Layout/Layout.tsx", language: "ts", code: layoutHeader }]}
      />
      <Text>
        With that, the Header is fully loaded, running the project again we can now see the Header in its rightful spot.
      </Text>
      <Title py="xl" order={3}>
        On to the Rest
      </Title>
      The Footer, CatalogList, and Filter all need the same treatment we just gave the Header. As a reminder you'll need
      to:
      <List py="lg">
        <List.Item>Create the types for the modules and namespaces for the projects and MFEs</List.Item>
        <List.Item>Update the types of the MFEs to be consumed</List.Item>
        <List.Item>Expose the MFEs in their respective projects</List.Item>
        <List.Item>Consume the MFEs in the shell application</List.Item>
        <List.Item>Add any shared modules</List.Item>
        <List.Item>Import and use the MFEs</List.Item>
      </List>
      <Text pt="md">
        The Footer's placeholder is located in the same Layout file as the Header. The Filter and CatalogList's
        placeholders are located in the Shop scene in the shell (<Code>shell/src/scenes/Shop/Shop.tsx</Code>).
      </Text>
    </ExerciseLayout>
  );
};

export default ConfiguringModuleFederation;
