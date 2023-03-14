import { Box, Flex, Icon, MenuItem, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import CreateCommunityModal from "../../Modal/CreateCommunity/CreateCommunityModal";
import { GrAdd } from "react-icons/gr";
import { useRecoilValue } from "recoil";
import { CommunityState } from "@/src/atoms/communitiesAtom";
import MenuListItem from "./MenuListItem";
import { FaReddit } from "react-icons/fa";
type CommunitiesProps = {};

const Communities: React.FC<CommunitiesProps> = () => {
  const [isOpen, setOpenModal] = useState(false);
  const mySnippets = useRecoilValue(CommunityState).mySnippets;
  return (
    <>
      <CreateCommunityModal
        isOpen={isOpen}
        handleClose={() => setOpenModal(false)}
      />
      <Box mt={3} mb={4}>
        <Text pl={3} mb={1} fontSize='7pt' fontWeight={500} color='gray.500'>
          MODERATING
        </Text>
        {mySnippets
          .filter((snippet) => snippet.isModerator)
          .map((snippet) => (
            <MenuListItem
              key={snippet.communityId}
              icon={FaReddit}
              displayText={`r/${snippet.communityId}`}
              link={`/r/${snippet.communityId}`}
              iconColor='brand.100'
              imageURL={snippet.imageURL}
            />
          ))}
      </Box>

      <Box mt={3} mb={4}>
        <Text pl={3} mb={1} fontSize='7pt' fontWeight={500} color='gray.500'>
          MY COMMUNITIES
        </Text>
        <MenuItem
          width='100%'
          fontSize='10pt'
          _hover={{ bg: "gray.100" }}
          onClick={() => {
            setOpenModal(true);
          }}
        >
          <Flex align='center'>
            <Icon fontSize={20} mr={2} as={GrAdd} />
            Create Community
          </Flex>
        </MenuItem>
        {mySnippets.map((snippet) => (
          <MenuListItem
            key={snippet.communityId}
            icon={FaReddit}
            displayText={`r/${snippet.communityId}`}
            link={`/r/${snippet.communityId}`}
            iconColor='brand.100'
            imageURL={snippet.imageURL}
          />
        ))}
      </Box>
    </>
  );
};
export default Communities;
