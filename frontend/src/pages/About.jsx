import { Box } from "@chakra-ui/react";

import fondMobile from "../assets/background-mobile.png";
import Header from "../components/Header";

export default function About() {
  return (
    <Box
      bgImage={fondMobile}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPos="center"
    >
      <Header onDark isSticky isStickyWhite={false} />
    </Box>
  );
}
