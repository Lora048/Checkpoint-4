import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import fondMobile from "../assets/background-mobile.png";
import Header from "../components/Header";
import FormProjet from "../components/FormProjet";
import backendAPI from "../services/backendAPI";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [projets, setProjets] = useState([]);

  useEffect(() => {
    backendAPI.get(`/api/projets`).then((response) => {
      setProjets(response.data);
    });
  }, []);

  return (
    <Box
      bgImage={fondMobile}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPos="center"
    >
      <Header onDark isSticky isStickyWhite={false} />

      {projets.map((projet) => (
        <Box
          w={{ base: "100%" }}
          display="flex"
          justifyContent={{ base: "center", lg: "flex-start" }}
          alignItems="center"
          pt={{ base: "8rem", lg: "11rem" }}
          marginLeft={{ base: "0", lg: "5rem" }}
        >
          <Flex justify="flex-end" direction={{ base: "column", lg: "row" }}>
            <Flex
              direction="column"
              width={{ base: "80%", lg: "40%" }}
              marginRight={{ base: "0", lg: "3rem" }}
              margin="auto"
            >
              <Flex
                align="center"
                justify="space-between"
                height="auto"
                direction="row"
              >
                <Text
                  textAlign="left"
                  fontSize={{ base: "35px", lg: "78px" }}
                  marginBottom={{ base: "1rem", lg: "0" }}
                >
                  {projet.nom}
                </Text>
                <Button
                  onClick={onOpen}
                  marginBottom={{ base: "1rem", lg: "0" }}
                >
                  Modifier
                </Button>
              </Flex>
              <Text textAlign="left">{projet.description}</Text>
            </Flex>
            <Image
              src={projet.image}
              width={{ base: "100%", lg: "60%" }}
              marginTop={{ base: "2rem", lg: "0" }}
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
      ))}
    </Box>
  );
}
