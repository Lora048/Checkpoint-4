import { Box, Text, Divider, Flex, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { BiPaperPlane } from "react-icons/bi";
import fondMobile from "../assets/background-mobile.png";
import Header from "../components/Header";
import SkillCard from "../components/SkillCard";
import backendAPI from "../services/backendAPI";

export default function About() {
  const [technos, setTechnos] = useState([]);
  useEffect(() => {
    backendAPI.get(`/api/technos`).then((response) => {
      setTechnos(response.data);
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
        <Box textAlign="left" ml="3rem">
          <Text color="gray" fontSize="64px">
            Faisons connaissance !
          </Text>
          <Flex align="center">
            <Divider
              width="30px"
              opacity="100"
              borderColor="gray"
              border="1px"
              mr="1.5rem"
            />
            <Text color="gray">
              Jeune alumni de la Wild Code School, je suis développeuse web.
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
        />
        <Box textAlign="right" mr="3rem">
          <Text color="gray" fontSize="64px">
            Mes compétences
          </Text>
          <Flex justify="space-between" width="70%" ml="30%">
            {technos.map((techno) => (
              <SkillCard techno={techno} />
            ))}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
