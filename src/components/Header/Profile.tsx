import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({showProfileData = true} : ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr={4} textAlign="right">
          <Text>Lucas Mendes</Text>
          <Text color="gray.300" fontSize="small">
            luucas.mds@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Lucas Mendes" src="https://github.com/l-mendes.png" />
    </Flex>
  );
}