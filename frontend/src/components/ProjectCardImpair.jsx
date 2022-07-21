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
      display="flex"
      justifyContent={{ base: "center", lg: "flex-end" }}
      alignItems="center"
      pt={{ base: "8rem", lg: "11rem" }}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        ml={{ md: "5%", lg: "5%", xl: "8%", "2xl": "20%" }}
      >
        <Flex
          direction="column"
          margin="auto"
          justify="flex-end"
          mr={{ base: "4%", md: "5%", lg: "5%", xl: "8%", "2xl": "8%" }}
          ml={{ base: "4%", md: "none" }}
          mb={{ base: "8%", md: "none" }}
        >
          <Flex
            align="center"
            justify="space-between"
            height="auto"
            direction="row"
          >
            <Text
              color="gray"
              textAlign="left"
              fontSize={{ base: "35px", lg: "78px" }}
              marginBottom={{ base: "1rem", lg: "0" }}
            >
              {projet.nom}
            </Text>
            <Button
              onClick={onOpen}
              size="md"
              bg="transparent"
              border="solid 0.5px"
              color="gray"
              mt="1rem"
              _hover={{
                bgColor: "transparent",
                color: "#FAB8BA",
              }}
              marginBottom={{ base: "1rem", lg: "0" }}
            >
              Modifier
            </Button>
          </Flex>
          <Text color="gray" textAlign="left">
            {projet.description}
          </Text>
          <Text color="gray" textAlign="left">
            Accéder au site :{" "}
            <Link isExternal href={projet.lien}>
              {projet.nom}
            </Link>
          </Text>
        </Flex>
        <Image
          borderRadius="2px"
          src={projet.image}
          width={{ base: "100vw", md: "45%", lg: "40%", xl: "65%" }}
        />
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
