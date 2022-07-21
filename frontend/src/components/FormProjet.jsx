import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast,
  Button,
  Box,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import backendAPI from "../services/backendAPI";

export default function FormProjet({ isOpen, onClose, projet }) {
  const toast = useToast();

  const [nom, setNom] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [lien, setLien] = useState("");
  const [projetId, setProjetId] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    setNom(projet.nom);
    setDescription(projet.description);
    setDate(projet.date);
    setLien(projet.lien);
    setProjetId(projet.id);
    setImage(projet.image);
  }, [isOpen]);

  const updateProject = (e) => {
    e.preventDefault();
    backendAPI
      .put(`/api/projet/${projetId}`, {
        nom,
        description,
        date,
        lien,
        image,
      })
      .then((response) => {
        if (response) {
          toast({
            title: "Le projet a bien été modifié.",
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
      <FormLabel>Nom du projet</FormLabel>
      <Input
        placeholder="Nom du projet"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      />
      <FormLabel>Description</FormLabel>
      <Textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <FormLabel>Date du projet</FormLabel>
      <Input
        placeholder="Date du projet (MM/AAAA)"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <FormLabel>Lien vers projet</FormLabel>
      <Input
        placeholder="Lien vers projet"
        value={lien}
        onChange={(e) => setLien(e.target.value)}
      />
      <FormLabel>Illustration</FormLabel>
      <Input
        placeholder="Illustration"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Box marginTop="1rem">
        <Button type="submit" onClick={updateProject}>
          Sauvegarder les informations
        </Button>
        <Button bgColor="transparent" onClick={onClose}>
          Annuler
        </Button>
      </Box>
    </FormControl>
  );
}
