import { Flex } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import React from 'react';

type SearchInputProps = {
    // user: 
};

const SearchInput:React.FC<SearchInputProps> = () => {
    
    return (
        <Flex>
            <Input placeholder='Search' />
        </Flex>
    )
}
export default SearchInput;