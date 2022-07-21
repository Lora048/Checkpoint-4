import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Box,
  Stack,
  Button,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Heading,
  useToast,
} from "@chakra-ui/react";
import backendAPI from "../services/backendAPI";
import Header from "../components/Header";
import fondMobile from "../assets/background-mobile.png";

const loginForm = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = () => {
    if (loginEmail && loginPassword) {
      backendAPI
        .post("/api/auth/login", {
          email: loginEmail,
          password: loginPassword,
        })
        .then((response) => {
          if (response) {
            toast({
              title: "Vous êtes bien connecté(e).",
              description: "Content de vous revoir !",
              status: "success",
              duration: 7000,
              position: "bottom-right",
              isClosable: true,
            });
            if (response.status === 200) {
              window.localStorage.setItem("isUserLoggedIn", true);
            }
          }
          if (
            response.data.type !== "freelancer" ||
            response.data.type !== "employer" ||
            response.data.type !== "coordinator"
          ) {
            navigate("/");
          }
          if (response.data.type === "freelancer") {
            window.localStorage.setItem("role", "freelancer");
            return response.data.profil
              ? navigate(`/profil/${response.data.fkId}`)
              : navigate(`/register-onboarding-pro/${response.data.fkId}`);
          }
          if (response.data.type === "employer") {
            window.localStorage.setItem("role", "employer");
            navigate(`/profil-employer/${response.data.fkId}`);
          }
          if (response.data.type === "coordinator") {
            window.localStorage.setItem("role", "coordinator");
            return response.data.profil
              ? navigate(`/profil-coordinator/${response.data.fkId}`)
              : navigate(`/register-onboarding-coordo/${response.data.fkId}`);
          }
          return null;
        })
        .catch((error) => {
          if (error) {
            toast({
              title: "Une erreur est survenue lors de la connexion.",
              description: `${error.response.data.message}`,
              status: "error",
              duration: 7000,
              position: "bottom-right",
              isClosable: true,
            });
          }
          console.warn(error);
        });
    }
  };

  return (
    <Box
      bgImage={fondMobile}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPos="center"
    >
      <Header onDark={false} isSticky={false} isStickyWhite />
      <Flex alignItems="center" paddingY="50px">
        <Flex
          className="loginForm"
          bgColor="white"
          maxWidth={{ base: "100vw", md: "482px" }}
          m="auto"
          alignItems="center"
          boxShadow="0px 1px 1px 0px rgb(185 184 184 / 75%)"
          marginTop={{ base: "0", md: "100px" }}
          marginBottom={{ base: "0", md: "30px" }}
          borderRadius="25px"
          padding={{ base: "0", md: "20px", lg: "25px" }}
        >
          <Stack
            className="loginConnexion"
            spacing={12}
            w={{ base: "100vw", md: "90vw", lg: "90vw" }}
            maxWidth={{ base: "100vw", md: "482px" }}
            margin={{ base: "20px", md: "auto" }}
          >
            <Heading
              as="h2"
              textAlign="center"
              fontSize="1.4rem"
              fontWeight="700"
              color="#D59491"
            >
              Connexion au dashboard administrateur
            </Heading>
            <FormControl>
              <FormLabel htmlFor="loginEmail" fontWeight="600" color="#D59491">
                Pseudo
              </FormLabel>
              <Input
                type="text"
                id="loginEmail"
                name="Pseudo ou Email"
                placeholder="Email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel
                htmlFor="loginPassword"
                fontWeight="600"
                color="#D59491"
              >
                Mot de passe
              </FormLabel>
              <Input
                type="password"
                id="loginPassword"
                name="Mot de passe"
                placeholder="Mot de passe"
                color="#D59491"
                value={loginPassword}
                onChange={(e) => {
                  setLoginPassword(e.target.value);
                }}
              />
            </FormControl>

            <Button
              colorScheme="gray"
              variant="ghost"
              type="button"
              color="#D59491"
              onClick={handleSubmit}
            >
              Se connecter
            </Button>

            <Link to="/register">
              <Button
                padding="10px"
                w="100%"
                fontWeight="500"
                bgColor="transparent"
                borderRadius="4px"
                color="#FCC3C1"
                border="2px solid"
                borderColor="#FCC3C1"
                _hover={{ bgColor: "#FCC3C1", color: "white" }}
              >
                Pas encore inscrit ?
              </Button>
            </Link>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default loginForm;
