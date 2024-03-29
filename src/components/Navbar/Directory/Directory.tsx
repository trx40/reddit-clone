import { authModalState } from "@/src/atoms/authModalAtom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Flex,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { TiHome } from "react-icons/ti";
import Communities from "./Communities";
import useDirectory from "@/src/hooks/useDirectory";

const Directory: React.FC = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const { directoryState, toggleMenuOpen } = useDirectory();

  useEffect(() => {
    console.log(directoryState);
  }, [directoryState]);
  return (
    <Menu isOpen={directoryState.isOpen}>
      <MenuButton
        cursor='pointer'
        padding='0px 6px'
        borderRadius={4}
        mr={2}
        ml={{ base: 0, md: 2 }}
        onClick={() => toggleMenuOpen()}
        _hover={{ outline: "1px solid", outlineColor: "gray.200" }}
      >
        <Flex
          align='center'
          justify='space-between'
          width={{ base: "auto", lg: "200px" }}
        >
          <Flex align='center'>
            {directoryState.selectedMenuItem.imageURL ? (
              <Image
                src={directoryState.selectedMenuItem.imageURL}
                borderRadius='full'
                boxSize='24px'
                mr={2}
                alt='Community Icon'
              />
            ) : (
              <Icon
                fontSize={24}
                mr={{ base: 1, md: 2 }}
                as={directoryState.selectedMenuItem.icon}
                color={directoryState.selectedMenuItem.iconColor}
              />
            )}
            <Flex display={{ base: "none", lg: "flex" }}>
              <Text fontWeight={600} fontSize='10pt'>
                {directoryState.selectedMenuItem.displayText}
              </Text>
            </Flex>
          </Flex>
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList>
        <Communities />
      </MenuList>
    </Menu>
  );
};
export default Directory;
