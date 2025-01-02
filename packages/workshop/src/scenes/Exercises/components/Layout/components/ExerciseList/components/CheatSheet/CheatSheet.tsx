import { Button, List, Modal, Title, Table, Text, Box } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const CheatSheet = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal
        size="xl"
        opened={opened}
        onClose={close}
        title={<Title order={2}>Enterprise Grade Micro Frontends Cheat Sheet</Title>}
      >
        <CheatSheetContent />
      </Modal>
      <Button w="90%" my="lg" onClick={open}>
        Open Cheat Sheet
      </Button>
    </>
  );
};

export default CheatSheet;

const teams = [
  { name: "Shell", url: "http://localhost:3000", mfes: [] },
  { name: "Marketing", url: "http://localhost:3004", mfes: ["about", "contact", "footer", "header"] },
  { name: "Catalog", url: "http://localhost:3001", mfes: ["catalog-item", "catalog-list", "filter", "search"] },
  { name: "Profile", url: "http://localhost:3003", mfes: ["account", "login"] },
  { name: "Order", url: "http://localhost:3002", mfes: ["cart", "checkout"] },
];

const CheatSheetContent = () => {
  return (
    <div>
      <Text sx={{ fontWeight: "bold" }}>Team & MFE Info</Text>
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
      <Box py="lg">
        <Text sx={{ fontWeight: "bold" }}>Helpful Links</Text>
        <List>
          <List.Item>Deployed Project</List.Item>
          <List.Item>
            Slides
            <List>
              <List.Item>Section 1</List.Item>
            </List>
          </List.Item>
        </List>
      </Box>
    </div>
  );
};
