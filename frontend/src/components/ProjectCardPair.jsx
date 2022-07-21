import {
  Box,
  Flex,
  Text,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Image,
  Link,
} from "@chakra-ui/react";
import FormProjet from "./FormProjet";

export default function ProjectCardPair({ projet }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      w={{ base: "100%" }}
      maxW="100vh"
      display="flex"
      // justifyContent={{ base: "center" }}
      alignItems="center"
      pt={{ base: "8rem", lg: "11rem" }}
    >
      <Flex justify="space-between">
        <Flex
          // width={{ base: "80%", lg: "40%" }}
          // marginRight={{ base: "0", lg: "3rem" }}
          margin="auto"
          marginLeft="1rem"
        >
          <Image
            borderRadius="2px"
            src={projet.image}
            height={{ base: "50vh", lg: "100%" }}
            width={{ base: "100vh", lg: "100%" }}
          />
          <Flex direction="column" marginLeft="2rem">
            <Flex align="center" justify="space-between" width="34rem">
              <Text
                textAlign="left"
                fontSize={{ base: "35px", lg: "78px" }}
                marginBottom={{ base: "1rem", lg: "0" }}
              >
                {projet.nom}
              </Text>
              <Button onClick={onOpen} marginBottom={{ base: "1rem", lg: "0" }}>
                Modifier
              </Button>
            </Flex>
            <Text textAlign="left">{projet.description}</Text>
            <Text textAlign="left">
              Accéder au site :{" "}
              <Link isExternal href={projet.lien}>
                {projet.nom}
              </Link>
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modifier le projet</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormProjet
              onOpen={onOpen}
              isOpen={isOpen}
              onClose={onClose}
              projet={projet}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
