import React from "react";
import { Flex, Icon, Text, Stack, Button } from "@chakra-ui/react";
import { GiCheckedShield } from "react-icons/gi";

const Premium: React.FC = () => {
  return (
    <Flex
      direction='column'
      bg='white'
      borderRadius={4}
      cursor='pointer'
      p='12px'
      border='1px solid'
      borderColor='gray.300'
    >
      <Flex mb={2}>
        <Icon as={GiCheckedShield} fontSize={26} color='brand.100' mt={2} />
        <Stack spacing={1} fontSize='9pt' pl={2}>
          <Text fontWeight={600}>Reddit Premium</Text>
          <Text>The best Reddit experience, with monthly Coins</Text>
        </Stack>
      </Flex>
      <Button
        height='30px'
        bg='white'
        color='brand.100'
        border='1px solid'
        borderColor='brand.100'
        _hover={{
          bg: "brand.100",
          color: "white",
        }}
      >
        Try Now
      </Button>
    </Flex>
  );
};
export default Premium;
