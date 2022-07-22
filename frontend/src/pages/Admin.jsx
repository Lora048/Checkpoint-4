import {
  Box,
  Image,
  Flex,
  Button,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import fondMobile from "../assets/background-mobile.png";
import Header from "../components/Header";
import banniere from "../assets/Hello4.png";
import FormProjet from "../components/FormProjet";

export default function Admin() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bgImage={fondMobile}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPos="center"
      height="100vw"
    >
      <Header onDark isSticky isStickyWhite={false} />
      <Flex justify="center" pt="8rem">
        <Image src={banniere} width="90%" borderRadius="10px" />
      </Flex>
      <Flex justify="space-around" mt="5rem">
        <Button
          leftIcon={<AddIcon />}
          size="lg"
          width="15rem"
          variant="ghost"
          colorScheme="blackAlpha"
          onClick={onOpen}
        >
          PROJET
        </Button>
        <Button
          leftIcon={<AddIcon />}
          size="lg"
          width="15rem"
          variant="ghost"
          colorScheme="blackAlpha"
        >
          COMPETENCE
        </Button>
        <Button
          leftIcon={<AddIcon />}
          size="lg"
          width="15rem"
          variant="ghost"
          colorScheme="blackAlpha"
        >
          CLIENT
        </Button>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ajouter un projet</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormProjet onOpen={onOpen} isOpen={isOpen} onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
