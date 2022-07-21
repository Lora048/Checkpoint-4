import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import fondMobile from "../assets/background-mobile.png";
import Header from "../components/Header";
import backendAPI from "../services/backendAPI";
import ProjectCardPair from "../components/ProjectCardPair";
import ProjectCardImPair from "../components/ProjectCardImpair";

export default function Home() {
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
