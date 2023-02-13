import { Button, Flex } from "@chakra-ui/react";
import React from "react";

type ImageUploadProps = {};

const ImageUpload: React.FC<ImageUploadProps> = () => {
  return (
    <Flex justify='center' align='center' width='100%'>
      <Flex
        justify='center'
        align='center'
        p={20}
        border='1px dashed'
        borderColor='gray.200'
        width='100%'
        borderRadius={4}
      >
        <Button variant='outline' height='28px' onClick={() => {}}>
          Upload
        </Button>
      </Flex>
    </Flex>
  );
};
export default ImageUpload;
