import { Link, useNavigate } from "react-router-dom";
import {
  Flex,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuDivider,
  Divider,
} from "@chakra-ui/react";

import { useState, useEffect } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import PropTypes from "prop-types";
import { BiLogOut, BiUser } from "react-icons/bi";
// import backendAPI from "../services/backendAPI";
// import { getListforAnId } from "../../services/ProfileProUtils";
import HeaderDrawer from "./HeaderDrawer";
import "../styles/header.css";

export default function Header({
  isSticky = false,
  isStickyWhite = false,
  // employer,
  // freelancer,
}) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isSignUp] = useState(
    JSON.parse(localStorage.getItem("isUserLoggedIn"))
  );
  const [data] = useState();

  const navigate = useNavigate();

  const logout = () => {
    navigate("/logout");
  };

  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // useEffect(() => {
  //   if (JSON.parse(localStorage.getItem("isUserLoggedIn"))) {
  //     backendAPI
  //       .get("/api/auth/sessionControl")
  //       .then((res) => {
  //         if (res.data.sessionExpired === false) {
  //           setIsSignUp(true);
  //           setData(res);
  //         }
  //       })
  //       .catch((err) => console.error(err));
  //   }
  // }, []);

  return (
    <Flex
      className={
        (isSticky && scrollPosition > 50) || isStickyWhite
          ? "active"
          : "not-active"
      }
      position={isSticky || isStickyWhite ? "fixed" : "relative"}
      paddingX={{ base: "2%", lg: "5%" }}
      paddingY="30px"
      bgColor={((isSticky && scrollPosition > 50) || isStickyWhite) && "white"}
      w={isSticky || isStickyWhite ? "100vw" : "100vp"}
      zIndex="999"
    >
      <Flex w="100%" alignItems="center" justify="space-between">
        <Link to="/">
          <Text
            color={
              (isSticky && scrollPosition > 50) || isStickyWhite
                ? "purple.dark"
                : "white"
            }
            textAlign="left"
            fontWeight="bold"
            lineHeight="15px"
            fontSize="xl"
            marginLeft={{ base: "1rem", lg: "2rem" }}
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
        <Flex
          justify="space-between"
          align="center"
          w="100%"
          display={{ base: "none", md: "flex" }}
        >
          <Flex
            justify="space-between"
            width="30rem"
            marginLeft={{ base: "6rem", lg: "20rem", xl: "35rem" }}
          >
            <Link to="/">
              <Divider
                orientation="horizontal"
                opacity="100"
                marginBottom="5px"
                border="1px"
                borderColor="white"
              />
              <Text
                color={
                  (isSticky && scrollPosition > 50) || isStickyWhite
                    ? "purple.dark"
                    : "white"
                }
                fontWeight="bold"
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
            <Link to="/a-propos">
              <Divider
                orientation="horizontal"
                opacity="100"
                marginBottom="5px"
                border="1px"
                borderColor="white"
              />
              <Text
                color={
                  (isSticky && scrollPosition > 50) || isStickyWhite
                    ? "purple.dark"
                    : "white"
                }
                fontWeight="bold"
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
            <Link to="/le-projet">
              <Divider
                orientation="horizontal"
                opacity="100"
                marginBottom="5px"
                border="1px"
                borderColor="white"
              />
              <Text
                color={
                  (isSticky && scrollPosition > 50) || isStickyWhite
                    ? "purple.dark"
                    : "white"
                }
                fontWeight="bold"
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
            <Link to="/le-projet">
              <Divider
                orientation="horizontal"
                opacity="100"
                marginBottom="5px"
                border="1px"
                borderColor="white"
              />
              <Text
                color={
                  (isSticky && scrollPosition > 50) || isStickyWhite
                    ? "purple.dark"
                    : "white"
                }
                fontWeight="bold"
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
          {isSignUp === true ? (
            <Menu>
              <MenuButton
                as={Button}
                rounded="full"
                variant="unstyled"
                color="purple.average"
                cursor="pointer"
                minW="0"
                _hover={{ color: "pink.light" }}
              >
                <ChevronDownIcon />
              </MenuButton>
              <MenuList marginLeft="150px">
                <MenuGroup title="PROFIL" color="purple.dark">
                  <MenuItem
                    icon={<BiUser />}
                    onClick={() => {
                      if (data.data.userRole === "freelancer") {
                        navigate(`/profil/${data.data.roleId}`);
                      }
                      if (data.data.userRole === "employer") {
                        navigate(`/profil-employer/${data.data.roleId}`);
                      }
                      if (data.data.userRole === "coordinator") {
                        navigate(`/profil-coordinator/${data.data.roleId}`);
                      }
                    }}
                  >
                    DASHBOARD
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem
                    onClick={logout}
                    color="pink.light"
                    icon={<BiLogOut />}
                  >
                    DÉCONNEXION
                  </MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          ) : (
            <Flex
              justify="space-between"
              align="center"
              gap={{ base: "8px", lg: "16px" }}
            >
              <Link to="/login">
                <Button
                  variant={
                    (isSticky && scrollPosition > 50) || isStickyWhite
                      ? "outline_Purple"
                      : "outline_White_Purple"
                  }
                >
                  CONNEXION
                </Button>
              </Link>
              <Link to="/register">
                <Button
                  variant="solid_PrimaryColor"
                  borderColor={
                    isSticky && scrollPosition <= 50 ? "white" : "pink.light"
                  }
                >
                  INSCRIPTION
                </Button>
              </Link>
            </Flex>
          )}
        </Flex>
        <HeaderDrawer />
      </Flex>
    </Flex>
  );
}

Header.propTypes = {
  isSticky: PropTypes.bool.isRequired,
  isStickyWhite: PropTypes.bool.isRequired,
};
