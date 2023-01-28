import { Button, Flex, Image } from "@chakra-ui/react";
import React from "react";

const OAuthButtons: React.FC = () => {
  return (
    <Flex direction='column' width='100%' mb={2}>
      <Button variant='oauth' mb={2}>
        <Image
          alt='Google Logo'
          src='images/googlelogo.png'
          height='20px'
          mr={4}
        />
        Continue with Google
      </Button>
      <Button variant='oauth'>Some other provider</Button>
    </Flex>
  );
};
export default OAuthButtons;
