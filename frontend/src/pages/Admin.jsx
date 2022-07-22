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
import FormSkill from "../components/FormSkill";

export default function Admin() {
  const modal1 = useDisclosure();
  const modal2 = useDisclosure();

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
          onClick={modal1.onOpen}
        >
          PROJET
        </Button>
        <Button
          leftIcon={<AddIcon />}
          size="lg"
          width="15rem"
          variant="ghost"
          colorScheme="blackAlpha"
          onClick={modal2.onOpen}
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
      <Modal isOpen={modal1.isOpen} onClose={modal1.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ajouter un projet</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormProjet
              onOpen={modal1.onOpen}
              isOpen={modal1.isOpen}
              onClose={modal1.onClose}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
      <Modal isOpen={modal2.isOpen} onClose={modal2.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ajouter une compétence</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormSkill
              onOpen={modal2.onOpen}
              isOpen={modal2.isOpen}
              onClose={modal2.onClose}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
