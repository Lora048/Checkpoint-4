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
import backendAPI from "../services/backendAPI";
import FormProjet from "./FormProjet";

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
      justifyContent={{ base: "center" }}
      alignItems="center"
      pt={{ base: "8rem", lg: "11rem" }}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        ml={{ md: "5%", lg: "5%", xl: "3%", "2xl": "8%" }}
      >
        <Flex
          direction="column"
          margin="auto"
          justify="center"
          align="baseline"
          mr={{ base: "4%", md: "5%", lg: "5%", xl: "5%", "2xl": "8%" }}
          ml={{ base: "4%", md: "none" }}
          mb={{ base: "8%", md: "none" }}
        >
          <Flex
            align="center"
            justify="space-between"
            height="auto"
            direction="row"
            width={{ base: "95vw", md: "50vw", lg: "40vw", xl: "40vw" }}
          >
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
        {/* <Box maxWidth="70vw"> */}
        <Image
          borderRadius="2px"
          src={projet.image}
          width={{ md: "35%", lg: "30%", xl: "50%", "2xl": "65%" }}
        />
        {/* </Box> */}
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
