import { Link } from "react-router-dom";

import {
  Drawer,
  DrawerCloseButton,
  DrawerHeader,
  useDisclosure,
  DrawerOverlay,
  Box,
  IconButton,
  Text,
  Flex,
  DrawerContent,
  DrawerBody,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useRef } from "react";

export default function HeaderDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <Box display={{ base: "flex", md: "none", lg: "none" }}>
      <IconButton
        ref={btnRef}
        onClick={onOpen}
        aria-label="Open-Menu"
        icon={<HamburgerIcon />}
      />
      <Drawer
        closeOnEsc
        closeOnOverlayClick={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent>
          <Flex align="center">
            <DrawerCloseButton />
            <DrawerHeader>
              <Link to="/le-projet">
                <Text
                  textAlign="left"
                  fontWeight="bold"
                  fontSize="xl"
                  _hover={{
                    bgImage:
                      "linear-gradient(to right, #f2366f 33%, #a423ad 33%, #a7197f 66%, #4d1582 66%)",
                    bgSize: "306% 100%",
                    bgPosition: "100% 0",
                    transition: "2s background-position",
                    animation: "moveGradient2 4s alternate infinite",
                    bgClip: "text",
                  }}
                >
                  LORA PERRICHON
                </Text>
              </Link>
            </DrawerHeader>
          </Flex>

          <DrawerBody w="100%">
            <Flex direction="column" align="flex-start" w="100%" gap="16px">
              <Link to="/le-projet" w="-webkit-fill-available%">
                <Text
                  color="purple.dark"
                  w="100%"
                  align="left"
                  _hover={{
                    bgImage:
                      "linear-gradient(to right, #f2366f 33%, #a423ad 33%, #a7197f 66%, #4d1582 66%)",
                    bgSize: "306% 100%",
                    bgPosition: "100% 0",
                    transition: "2s background-position",
                    animation: "moveGradient2 4s alternate infinite",
                    bgClip: "text",
                  }}
                >
                  PROJETS
                </Text>
              </Link>
              <Link to="/le-projet" w="-webkit-fill-available%">
                <Text
                  color="purple.dark"
                  w="100%"
                  align="left"
                  _hover={{
                    bgImage:
                      "linear-gradient(to right, #f2366f 33%, #a423ad 33%, #a7197f 66%, #4d1582 66%)",
                    bgSize: "306% 100%",
                    bgPosition: "100% 0",
                    transition: "2s background-position",
                    animation: "moveGradient2 4s alternate infinite",
                    bgClip: "text",
                  }}
                >
                  A PROPOS
                </Text>
              </Link>
              <Link to="/le-projet" w="-webkit-fill-available%">
                <Text
                  color="purple.dark"
                  w="100%"
                  align="left"
                  _hover={{
                    bgImage:
                      "linear-gradient(to right, #f2366f 33%, #a423ad 33%, #a7197f 66%, #4d1582 66%)",
                    bgSize: "306% 100%",
                    bgPosition: "100% 0",
                    transition: "2s background-position",
                    animation: "moveGradient2 4s alternate infinite",
                    bgClip: "text",
                  }}
                >
                  BLOG
                </Text>
              </Link>
              <Link to="/le-projet" w="-webkit-fill-available%">
                <Text
                  color="purple.dark"
                  w="100%"
                  align="left"
                  _hover={{
                    bgImage:
                      "linear-gradient(to right, #f2366f 33%, #a423ad 33%, #a7197f 66%, #4d1582 66%)",
                    bgSize: "306% 100%",
                    bgPosition: "100% 0",
                    transition: "2s background-position",
                    animation: "moveGradient2 4s alternate infinite",
                    bgClip: "text",
                  }}
                >
                  CONTACT
                </Text>
              </Link>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
