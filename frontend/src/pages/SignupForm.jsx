/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate, Link, useSearchParams } from "react-router-dom";
import {
  Stack,
  Text,
  Button,
  FormControl,
  Input,
  Divider,
  Flex,
  Heading,
  useToast,
  Box,
} from "@chakra-ui/react";
import backendAPI from "../services/backendAPI";
import "../App.css";
import Header from "../components/Header";
import fondMobile from "../assets/background-mobile.png";

const signupForm = () => {
  const [signupFirstname, setSignupFirstname] = useState("");
  const [signupLastname, setSignupLastname] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupPasswordRepeat, setSignupPasswordRepeat] = useState("");

  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = () => {
    backendAPI
      .post("/api/auth/register", {
        firstname: signupFirstname,
        lastname: signupLastname,
        email: signupEmail,
        password: signupPassword,
      })
      .catch((error) => {
        console.warn(error);
        if (error) {
          toast({
            title:
              "Une erreur est survenue lors de la création de votre compte.",
            status: "error",
            duration: 7000,
            position: "bottom-right",
            isClosable: true,
          });
          console.warn(error);
        }
      })
      .then((response) => {
        if (response) {
          toast({
            title: "Vous avez bien créé votre compte.",
            description: "Bienvenue chez nous !",
            status: "success",
            duration: 7000,
            position: "bottom-right",
            isClosable: true,
          });
        }
      })
      .then(() => {
        backendAPI
          .post("/api/auth/login", {
            email: signupEmail,
            password: signupPassword,
          })
          .then((newresponse) => {
            if (newresponse.status === 200) {
              window.localStorage.setItem("isUserLoggedIn", true);
            }

            if (newresponse) {
              toast({
                title: "Connexion Réussie",
                description: "Bienvenue sur votre compte !",
                status: "success",
                duration: 7000,
                position: "bottom-right",
                isClosable: true,
              });
            }

            if (
              newresponse.data.type !== "freelancer" ||
              newresponse.data.type !== "employer" ||
              newresponse.data.type !== "coordinator"
            ) {
              navigate("/");
            }
            if (newresponse.data.type === "freelancer") {
              return newresponse.data.profil
                ? navigate(`/profil/${newresponse.data.fkId}`)
                : navigate(`/welcome-pro/${newresponse.data.fkId}`);
            }
            if (newresponse.data.type === "employer") {
              navigate(`/profil-employer/${newresponse.data.fkId}`);
            }
            if (newresponse.data.type === "coordinator") {
              return newresponse.data.profil
                ? navigate(`/profil-coordinator/${newresponse.data.fkId}`)
                : navigate(`/welcome-coordo/${newresponse.data.fkId}`);
            }
            return null;
          })
          .catch((error) => {
            if (error) {
              toast({
                title: "Une erreur est survenue lors de la connexion",
                status: "error",
                duration: 7000,
                position: "bottom-right",
                isClosable: true,
              });
            }
            console.warn(error);
          });
      });
  };

  return (
    <Box
      bgImage={fondMobile}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPos="center"
    >
      <Header onDark={false} isSticky={false} isStickyWhite />
      <Flex alignItems="center" paddingTop="80px">
        <Flex
          className="signupForm"
          bgColor="white"
          maxWidth={{ base: "100vw", md: "482px" }}
          m="auto"
          alignItems="center"
          boxShadow="0px 1px 1px 0px rgb(185 184 184 / 75%)"
          marginTop={{ base: "0", md: "100px" }}
          marginBottom={{ base: "0", md: "30px" }}
          borderRadius="25px"
          padding={{ base: "0", md: "30px", lg: "40px" }}
        >
          <Stack
            className="noAccount"
            spacing={8}
            w={{ base: "100vw", md: "90vw", lg: "90vw" }}
            maxWidth={{ base: "100vw", md: "482px" }}
            margin={{ base: "20px", md: "auto" }}
          >
            <Heading
              as="h2"
              textAlign="center"
              fontSize="1.4rem"
              fontWeight="700"
            >
              Inscription administrateur
            </Heading>
            <FormControl>
              <Input
                type="text"
                id="signupFirstname"
                name="Prénom"
                placeholder="Prénom"
                value={signupFirstname}
                onChange={(e) => setSignupFirstname(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <Input
                type="text"
                id="signupLastname"
                name="Nom"
                placeholder="Nom"
                value={signupLastname}
                onChange={(e) => setSignupLastname(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <Input
                type="text"
                id="signupEmail"
                name="Email"
                placeholder="Email"
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <Input
                type="password"
                id="signupPassword"
                name="Mot de passe"
                placeholder="Mot de passe"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <Input
                type="password"
                id="signupPasswordRepeat"
                name="Retapez votre mot de passe"
                placeholder="Retapez votre mot de passe"
                value={signupPasswordRepeat}
                onChange={(e) => setSignupPasswordRepeat(e.target.value)}
              />
            </FormControl>
            <Button
              color="white"
              bgColor="#FAB8BA"
              type="button"
              onClick={() => handleSubmit()}
            >
              S'inscrire
            </Button>

            <Divider />
            <Text textAlign="center">
              Vous avez déjà un compte ?&nbsp;
              <Link to="/login">
                <Text
                  color="#342c50"
                  _hover={{ textDecoration: "none", color: "#FAB8BA" }}
                >
                  Se connecter
                </Text>
              </Link>
            </Text>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default signupForm;
