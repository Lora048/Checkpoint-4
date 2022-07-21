import { Flex, Text, Divider, Icon } from "@chakra-ui/react";

import { RiLightbulbFlashLine } from "react-icons/ri";

export default function SkillCard({ techno }) {
  return (
    <Flex justify="flex-end" direction="column" width="30%" height="10rem">
      <Text fontWeight="semibold" color="gray">
        0{techno.id}
      </Text>

      <Divider borderColor="gray" ml="60%" width="40%" border="2px" />
      <Flex justify="flex-end">
        <Icon
          my="0.8rem"
          w="2rem"
          h="2rem"
          color="gray"
          as={RiLightbulbFlashLine}
        />
      </Flex>
      <Text color="gray" fontWeight="semibold">
        {techno.nom}
      </Text>
    </Flex>
  );
}
