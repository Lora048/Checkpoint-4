import { Flex, Text, Divider, Icon, useDisclosure } from "@chakra-ui/react";

import { RiLightbulbFlashLine } from "react-icons/ri";
import { useState, useEffect } from "react";

import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineConsoleSql, AiOutlineHtml5 } from "react-icons/ai";
import {
  DiJavascript1,
  DiCss3Full,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di";
import { SiExpress } from "react-icons/si";

import { CloseIcon } from "@chakra-ui/icons";
import backendAPI from "../services/backendAPI";
import DeleteConfirmModal from "./DeleteConfirmModal";

export default function SkillCard({ techno }) {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const [isSignUp, setIsSignUp] = useState(
    JSON.parse(localStorage.getItem("isUserLoggedIn"))
  );
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("isUserLoggedIn"))) {
      backendAPI
        .get("/api/auth/sessionControl")
        .then((res) => {
          if (res.data.sessionExpired === false) {
            setIsSignUp(true);
          }
        })
        .catch((err) => console.error(err));
    }
  }, []);
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
    {
      id: 4,
      icone: DiJavascript1,
    },
    {
      id: 6,
      icone: AiOutlineHtml5,
    },
    {
      id: 7,
      icone: DiCss3Full,
    },
    {
      id: 8,
      icone: SiExpress,
    },
    {
      id: 9,
      icone: DiNodejsSmall,
    },
    {
      id: 10,
      icone: DiReact,
    },
  ];

  return (
    <Flex justify="flex-end" direction="column" width="30%" height="10rem">
      <Flex direction="column" alignItems="flex-end">
        {isSignUp ? (
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
        ) : null}

        {techno.id < 10 ? (
          <Text fontWeight="semibold" color="gray">
            0{techno.id}
          </Text>
        ) : (
          <Text fontWeight="semibold" color="gray">
            {techno.id}
          </Text>
        )}
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
