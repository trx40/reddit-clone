//  Flex component is a div from Chakra UI which has flex 
//  properties enabled

import { Flex, Image } from '@chakra-ui/react';
import React from 'react';

const Navbar:React.FC = () => {
    
    return (
        <Flex bg="white" height="44px" padding="6px 12px">
            <Flex align="center">
                <Image alt="reddit-face" 
                    src="/images/redditFace.svg" 
                    height="30px" />
                <Image alt="reddit-text" 
                    src="/images/redditText.svg" 
                    height="46px" 
                    display={{ base: "none", md: "unset"}} />
            </Flex>
           {/* <Directory />
           <SearchInput />
           <RightContent />  */}
        </Flex>
    )
}
export default Navbar;