import { Box, Text, Divider, Flex, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { BiPaperPlane } from "react-icons/bi";
import fondMobile from "../assets/background-mobile.png";
import Header from "../components/Header";
import SkillCard from "../components/SkillCard";
import ClientCard from "../components/ClientCard";
import backendAPI from "../services/backendAPI";

export default function About() {
  const [technos, setTechnos] = useState([]);
  const [clients, setClients] = useState([]);
  useEffect(() => {
    backendAPI.get(`/api/technos`).then((response) => {
      setTechnos(response.data);
    });
  }, []);

  useEffect(() => {
    backendAPI.get(`/api/clients`).then((response) => {
      setClients(response.data);
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
      <Box pt={{ base: "8rem", lg: "11rem" }}>
        <Box
          textAlign="left"
          ml={{ base: "1.5rem", lg: "3rem" }}
          mr={{ base: "1.5rem", lg: "0" }}
        >
          <Text
            color="gray"
            fontSize={{ base: "50px", lg: "64px" }}
            lineHeight="3rem"
          >
            Faisons connaissance !
          </Text>
          <Flex
            align="baseline"
            mt="2rem"
            w={{ base: "90%", md: "60%", lg: "40%" }}
          >
            <Divider
              width="30px"
              opacity="100"
              borderColor="gray"
              border="1px"
              mr="1.5rem"
            />
            <Text color="gray" mb={{ base: "1.5rem", lg: "2rem" }}>
              Jeune alumni de la Wild Code School, je suis développeuse web.
              Anciennement psychologue du travail, mes acquis dans ce domaine me
              permettent de rapidement cerner les besoins et attentes de mes
              clients. Mon expertise du métier est également un atout pour
              mettre en place de nouveaux process.
            </Text>
          </Flex>
          <Link to="/contact">
            <Button
              rightIcon={<BiPaperPlane />}
              size="md"
              bg="transparent"
              border="solid 0.5px"
              color="gray"
              mt="1rem"
              _hover={{
                bgColor: "transparent",
                color: "#C97E8C",
              }}
            >
              Discutons
            </Button>
          </Link>
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
        <Box textAlign="right" mr={{ base: "2rem", md: "3rem" }}>
          <Text color="gray" fontSize={{ base: "50px", lg: "64px" }} ml="2rem">
            Mes compétences
          </Text>
          <Flex
            justify="space-between"
            width={{ base: "100%", lg: "70%" }}
            ml={{ base: "0", lg: "30%" }}
            align="baseline"
            wrap="wrap"
          >
            {technos.map((techno) => (
              <SkillCard techno={techno} />
            ))}
          </Flex>
        </Box>
        <Divider
          width="60%"
          borderColor="gray"
          border="1px"
          opacity="30%"
          mt={{ base: "5rem", lg: "10rem" }}
          mb="3rem"
        />
        <Box textAlign="left" mr={{ base: "2rem", md: "3rem" }}>
          <Text color="gray" fontSize={{ base: "50px", lg: "64px" }} ml="2rem">
            Clients
          </Text>
          <Flex
            justify="space-between"
            width={{ base: "100%", lg: "70%" }}
            ml={{ base: "0", lg: "30%" }}
            align="baseline"
            wrap="wrap"
          >
            {clients.map((client) => (
              <ClientCard client={client} />
            ))}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
