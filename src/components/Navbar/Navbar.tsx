//  Flex component is a div from Chakra UI which has flex
//  properties enabled

import { auth } from "@/src/firebase/clientApp";
import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import RightContent from "./RightContent/RightContent";
import SearchInput from "./SearchInput";

const Navbar: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <Flex bg='white' height='44px' padding='6px 12px'>
      <Flex align='center'>
        <Image alt='reddit-face' src='/images/redditFace.svg' height='30px' />
        <Image
          alt='reddit-text'
          src='/images/redditText.svg'
          height='46px'
          display={{ base: "none", md: "unset" }}
        />
      </Flex>
      <SearchInput />
      {/* <Directory /> */}
      <RightContent user={user} />
    </Flex>
  );
};
export default Navbar;
