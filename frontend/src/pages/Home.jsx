import { Box, Image, Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import fondMobile from "../assets/background-mobile.png";
import Header from "../components/Header";
import backendAPI from "../services/backendAPI";
import ProjectCardPair from "../components/ProjectCardPair";
import ProjectCardImPair from "../components/ProjectCardImpair";
import banniere from "../assets/Hello4.png";

export default function Home() {
  const [projets, setProjets] = useState([]);

  useEffect(() => {
    backendAPI.get(`/api/projets`).then((response) => {
      setProjets(response.data);
    });
  }, []);

  return (
    <Box bgImage={fondMobile} bgRepeat="no-repeat" bgSize="cover" width="100vw">
      <Header onDark isSticky isStickyWhite={false} />
      <Flex justify="center">
        <Image
          src={banniere}
          pt="8rem"
          width={{ base: "100%", lg: "80%" }}
          borderRadius="10px"
        />
      </Flex>

      {projets.map((projet) =>
        projet.id % 2 === 0 ? (
          <ProjectCardPair projet={projet} />
        ) : (
          <ProjectCardImPair projet={projet} />
        )
      )}
    </Box>
  );
}
