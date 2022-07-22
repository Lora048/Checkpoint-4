import { Flex, Text, Divider, Icon, useDisclosure } from "@chakra-ui/react";

import { RiLightbulbFlashLine } from "react-icons/ri";

import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { CloseIcon } from "@chakra-ui/icons";
import DeleteConfirmModal from "./DeleteConfirmModal";

export default function SkillCard({ techno }) {
  const { onOpen, isOpen, onClose } = useDisclosure();

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
      <Flex direction="column" alignItems="flex-end">
        <Icon
          my="0.8rem"
          w="0.5rem"
          h="0.5rem"
          as={CloseIcon}
          color="gray"
          onClick={onOpen}
          cursor="pointer"
          _hover={{ color: "#FAB8BA" }}
        />
        <Text fontWeight="semibold" color="gray">
          0{techno.id}
        </Text>
      </Flex>

      <Divider borderColor="gray" ml="50%" width="50%" border="2px" />
      <Flex justify="flex-end">
        {icons.map((icon) =>
          techno.id === icon.id ? (
            <Icon my="0.8rem" w="2rem" h="2rem" color="gray" as={icon.icone} />
          ) : null
        )}
      </Flex>
      <Text
        color="gray"
        fontWeight="semibold"
        fontSize={{ base: "sm", md: "md" }}
      >
        {techno.nom}
      </Text>
      <DeleteConfirmModal
        onOpen={onOpen}
        isOpen={isOpen}
        onClose={onClose}
        techno={techno}
      />
    </Flex>
  );
}
