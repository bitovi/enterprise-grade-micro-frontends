import { Divider, Flex, Skeleton } from "@mantine/core";

const FilterSkeleton = () => {
  return (
    <Flex gap="md" h={600} direction="column" justify="space-between" p="md">
      <Skeleton h={30} />
      <Skeleton h={30} />
      <Skeleton h={30} />
      <Skeleton h={30} />
      <Skeleton h={30} />
      <Skeleton h={30} />
      <Divider />
      <Skeleton h={60} />
    </Flex>
  );
};

export default FilterSkeleton;
