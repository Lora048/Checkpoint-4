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
  // const [data] = useState();

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
      w={isSticky || isStickyWhite ? "100%" : "100vp"}
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
            marginLeft={{
              base: "10rem",
              lg: "20rem",
              xl: "35rem",
              "2xl": "52rem",
            }}
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
                  color: "#FAB8BA",
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
                  color: "#FAB8BA",
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
                  color: "#FAB8BA",
                }}
              >
                BLOG
              </Text>
            </Link>
            <Link to="/contact">
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
                  color: "#FAB8BA",
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
                <ChevronDownIcon color="white" />
              </MenuButton>
              <MenuList marginLeft="150px">
                <MenuGroup title="PROFIL" color="purple.dark">
                  <MenuItem
                    icon={<BiUser />}
                    onClick={() => {
                      navigate(`/dashboard`);
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
                <ChevronDownIcon color="white" />
              </MenuButton>
              <MenuList marginLeft="150px">
                <MenuGroup title="PROFIL" color="purple.dark">
                  <MenuItem
                    icon={<BiUser />}
                    onClick={() => {
                      navigate(`/login`);
                    }}
                  >
                    CONNEXION
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem
                    onClick={() => {
                      navigate(`/register`);
                    }}
                    color="pink.light"
                    icon={<BiLogOut />}
                  >
                    INSCRIPTION
                  </MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
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
