// We will be using the recoil state management library as we want the
// utility to open the modal outside the modal component itself
// E.g: Log In, Sign Up and trying to upvote while not signed in
// triggers the Modal.
// So we require a Global state. Which will allow us to open this Modal
// from anywhere in the app.
import { authModalState } from "@/src/atoms/authModalAtom";
import { auth } from "@/src/firebase/clientApp";
import {
  Flex,
  Text,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState } from "recoil";
import AuthInputs from "./AuthInputs";
import OAuthButtons from "./OAuthButtons";

const AuthModal: React.FC = () => {
  const [modalState, setModalState] = useRecoilState(authModalState);
  const [user, loading, error] = useAuthState(auth);

  const handleClose = () => {
    setModalState((prev) => ({ ...prev, open: false }));
    //enclosed in (parantheses) as parser cant recognize
    //object literal vs. function definition
  };

  useEffect(() => {
    if (user) handleClose();
    console.log("user", user);
  }, [user]);

  return (
    // We use <> </> React fragments to avoid <div> wrappers
    <>
      <Modal isOpen={modalState.open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign='center'>
            {modalState.view === "login" && "Login"}
            {modalState.view === "signup" && "Sign Up"}
            {modalState.view === "resetPassword" && "Reset Password"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            pb={6}
          >
            <Flex
              direction='column'
              justify='center'
              align='center'
              width='70%'
            >
              <OAuthButtons />
              <Text fontWeight={700} color='gray.500'>
                OR
              </Text>
              <AuthInputs />
              {/* <ResetPassword /> */}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default AuthModal;
