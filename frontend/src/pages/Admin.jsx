import { Box, Image, Flex, Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import fondMobile from "../assets/background-mobile.png";
import Header from "../components/Header";
import banniere from "../assets/Hello4.png";

export default function Admin() {
  return (
    <Box
      bgImage={fondMobile}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPos="center"
      height="100vw"
    >
      <Header onDark isSticky isStickyWhite={false} />
      <Flex justify="center" pt="8rem">
        <Image src={banniere} width="90%" borderRadius="10px" />
      </Flex>
      <Flex justify="space-around" mt="5rem">
        <Button
          leftIcon={<AddIcon />}
          size="lg"
          width="15rem"
          variant="ghost"
          colorScheme="blackAlpha"
        >
          PROJET
        </Button>
        <Button
          leftIcon={<AddIcon />}
          size="lg"
          width="15rem"
          variant="ghost"
          colorScheme="blackAlpha"
        >
          COMPETENCE
        </Button>
        <Button
          leftIcon={<AddIcon />}
          size="lg"
          width="15rem"
          variant="ghost"
          colorScheme="blackAlpha"
        >
          CLIENT
        </Button>
      </Flex>
    </Box>
  );
}
