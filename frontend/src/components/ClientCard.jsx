import { Flex, Text, Divider, Icon } from "@chakra-ui/react";

import { RiLightbulbFlashLine } from "react-icons/ri";

import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineConsoleSql } from "react-icons/ai";

export default function ClientCard({ client }) {
  const icons = [
    {
      id: 1,
      icone: RiLightbulbFlashLine,
    },
    {
      id: 2,
      icone: AiOutlineConsoleSql,
    },
    {
      id: 3,
      icone: BsCodeSlash,
    },
  ];
  return (
    <Flex justify="flex-end" direction="column" width="30%" height="10rem">
      <Text fontWeight="semibold" color="gray">
        0{client.id}
      </Text>

      <Divider borderColor="gray" ml="50%" width="50%" border="2px" />
      <Flex justify="flex-end">
        {icons.map((icon) =>
          client.id === icon.id ? (
            <Icon my="0.8rem" w="2rem" h="2rem" color="gray" as={icon.icone} />
          ) : null
        )}
      </Flex>
      <Text
        color="gray"
        fontWeight="semibold"
        fontSize={{ base: "sm", md: "md" }}
      >
        {client.nom}
      </Text>
    </Flex>
  );
}
