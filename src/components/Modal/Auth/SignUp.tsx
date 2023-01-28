import { authModalState } from "@/src/atoms/authModalAtom";
import { Input, Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";

const SignUp: React.FC = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onSubmit = () => {};

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //update form state
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        required
        name='email'
        type='email'
        placeholder='Email'
        mb={2}
        onChange={onChange}
        fontSize='10pt'
        _placeholder={{ color: "gray.500" }}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        bg='gray.50'
      />
      <Input
        required
        name='password'
        type='password'
        placeholder='Password'
        mb={2}
        onChange={onChange}
        fontSize='10pt'
        _placeholder={{ color: "gray.500" }}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        bg='gray.50'
      />
      <Input
        required
        name='password'
        type='password'
        placeholder='Confirm password'
        mb={2}
        onChange={onChange}
        fontSize='10pt'
        _placeholder={{ color: "gray.500" }}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        bg='gray.50'
      />
      <Button width='100%' height='36px' mb={2} mt={2} type='submit'>
        Sign Up
      </Button>
      <Flex fontSize='9pt' justifyContent='center'>
        <Text mr={1}>Already a user?</Text>
        <Text
          color='blue.500'
          fontWeight={700}
          cursor='pointer'
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              view: "login",
            }))
          }
        >
          LOG IN
        </Text>
      </Flex>
    </form>
  );
};
export default SignUp;
