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
      alignItems="center"
      pt={{ lg: "11rem" }}
      marginLeft="2rem"
    >
      <Flex justify="space-between">
        <Flex direction={{ base: "column-reverse", lg: "row" }}>
          <Image
            borderRadius="2px"
            src={projet.image}
            width={{ lg: "30%", xl: "50%", "2xl": "65%" }}
          />
          <Flex
            direction="column"
            marginLeft={{ md: "5%", lg: "5%", xl: "8%" }}
            marginRight={{ md: "5%", lg: "5%", xl: "8%" }}
          >
            <Flex align="center" justify="space-between">
              <Text
                color="gray"
                textAlign="left"
                fontSize={{ lg: "78px" }}
                marginBottom={{ lg: "0" }}
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
