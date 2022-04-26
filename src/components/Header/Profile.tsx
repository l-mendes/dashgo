import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr={4} textAlign="right">
        <Text>Lucas Mendes</Text>
        <Text color="gray.300" fontSize="small">
          luucas.mds@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Lucas Mendes" src="https://github.com/l-mendes.png" />
    </Flex>
  );
}