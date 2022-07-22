import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast,
  Button,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import backendAPI from "../services/backendAPI";

export default function FormSkill({ onClose }) {
  const toast = useToast();

  const [nom, setNom] = useState("");
  const [niveau, setNiveau] = useState("");
  const [projetId, setProjetId] = useState(0);

  const createSkill = (e) => {
    e.preventDefault();
    backendAPI
      .post(`/api/projet/${projetId}/techno`, {
        nom,
        niveau,
        projetId,
      })
      .then((response) => {
        if (response) {
          toast({
            title: "La compétence a bien été créé.",
            status: "success",
            duration: 7000,
            position: "bottom-right",
            isClosable: true,
          });
          onClose();
        }
      })
      .catch((error) => {
        if (error) {
          toast({
            title: "Veuillez renseigner tous les champs obligatoires",
            status: "error",
            duration: 7000,
            position: "bottom-right",
            isClosable: true,
          });
        }
        console.warn(error);
      });
  };

  return (
    <FormControl>
      <FormLabel>Compétence</FormLabel>
      <Input
        placeholder="Compétence"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      />
      <FormLabel>Niveau</FormLabel>
      <Textarea
        placeholder="Niveau"
        value={niveau}
        onChange={(e) => setNiveau(e.target.value)}
      />
      <FormLabel>Projet</FormLabel>
      <Input
        placeholder="Projet"
        value={projetId}
        onChange={(e) => setProjetId(e.target.value)}
      />

      <Box marginTop="1rem">
        <Button type="submit" onClick={createSkill}>
          Sauvegarder les informations
        </Button>

        <Button bgColor="transparent" onClick={onClose}>
          Annuler
        </Button>
      </Box>
    </FormControl>
  );
}
