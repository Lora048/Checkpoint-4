import {
  Box,
  Text,
  Divider,
  Button,
  FormLabel,
  Flex,
  Input,
  Textarea,
} from "@chakra-ui/react";

import { FiArrowRight } from "react-icons/fi";
import fondMobile from "../assets/background-mobile.png";
import Header from "../components/Header";

export default function Contact() {
  return (
    <Box
      bgImage={fondMobile}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPos="center"
    >
      <Header onDark isSticky isStickyWhite={false} />
      <Box pt={{ base: "8rem", lg: "11rem" }} pb="3rem">
        <Box
          textAlign="left"
          ml={{ base: "1.5rem", lg: "3rem" }}
          mr={{ base: "1.5rem", lg: "0" }}
        >
          <Text
            color="gray"
            fontSize={{ base: "50px", lg: "64px" }}
            lineHeight={{ base: "3rem", lg: "5rem" }}
            mb={{ base: "2rem", lg: "0" }}
          >
            Prêt à échanger sur un projet ?
          </Text>
          <Text
            color="gray"
            fontSize={{ base: "30px", lg: "40px" }}
            lineHeight={{ base: "3rem", md: "5rem" }}
          >
            Contactez moi par mail
          </Text>
          <Button
            bgColor="transparent"
            color="gray"
            fontSize={{ base: "20px", lg: "30px" }}
            lineHeight={{ base: "3rem" }}
            rightIcon={<FiArrowRight />}
            py="0"
            my="O"
            _active={{
              bg: "transparent",
            }}
            _focus={{
              bg: "transparent",
            }}
          >
            loraperrichon@gmail.com
          </Button>
        </Box>
        <Divider
          ml="40%"
          width="60%"
          borderColor="gray"
          border="1px"
          opacity="30%"
          mt={{ base: "5rem", lg: "10rem" }}
          mb="3rem"
        />
        <Box textAlign="right" mr="3rem">
          <Text
            color="gray"
            fontSize={{ base: "30px", lg: "40px" }}
            ml={{ base: "1rem", lg: "2rem" }}
          >
            Remplissez ce formulaire
          </Text>
          <Flex justify="flex-end">
            <Flex
              justify="space-between"
              align="stretch"
              width="50vw"
              height="25rem"
              direction="column"
              mt="2rem"
            >
              <FormLabel color="gray">Prénom</FormLabel>
              <Input placeholder="Prénom" />
              <FormLabel color="gray">Nom</FormLabel>
              <Input placeholder="Nom" />
              <FormLabel color="gray">E-mail</FormLabel>
              <Input placeholder="E-mail" />
              <FormLabel color="gray">Votre demande</FormLabel>
              <Textarea placeholder="Votre demande" />
              <Button
                border="solid 0.5px"
                color="gray"
                borderColor="gray"
                variant="outline"
                mt="1.5rem"
                type="submit"
              >
                Envoyer votre demande
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
