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
import { useState, useEffect } from "react";
import FormProjet from "./FormProjet";
import backendAPI from "../services/backendAPI";

export default function ProjectCardPair({ projet }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSignUp, setIsSignUp] = useState(
    JSON.parse(localStorage.getItem("isUserLoggedIn"))
  );

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("isUserLoggedIn"))) {
      backendAPI
        .get("/api/auth/sessionControl")
        .then((res) => {
          if (res.data.sessionExpired === false) {
            setIsSignUp(true);
          }
        })
        .catch((err) => console.error(err));
    }
  }, []);
  return (
    <Box
      display="flex"
      alignItems="center"
      pt={{ base: "8rem", lg: "11rem" }}
      marginLeft={{ base: "0", lg: "2rem" }}
      pb="3rem"
    >
      <Flex justify="space-between">
        <Flex direction={{ base: "column-reverse", md: "row" }}>
          <Image
            borderRadius="2px"
            src={projet.image}
            width={{ md: "45%", lg: "30%", xl: "50%", "2xl": "65%" }}
          />
          <Flex
            direction="column"
            marginLeft={{ base: "4%", md: "5%", lg: "5%", xl: "8%" }}
            marginRight={{ base: "4%", md: "5%", lg: "5%", xl: "8%" }}
            mb={{ base: "8%", md: "none" }}
          >
            <Flex align="baseline" justify="space-between">
              <Text
                color="gray"
                textAlign="left"
                fontSize={{ base: "35px", lg: "78px" }}
                marginBottom={{ base: "1rem", lg: "0" }}
              >
                {projet.nom}
              </Text>
              {isSignUp ? (
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
              ) : null}
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
