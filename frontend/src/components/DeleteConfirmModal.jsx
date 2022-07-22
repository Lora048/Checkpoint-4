import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Heading,
  useToast,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import backendAPI from "../services/backendAPI";

export default function DeleteConfirmModalAnnoncement({
  isOpen,
  onClose,
  techno,
}) {
  const toast = useToast();

  return (
    <Modal size="xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent borderRadius="0px 0px 21px 21px">
        <ModalHeader
          paddingY="30px"
          color="#FAB8BA"
          fontWeight="600"
          fontSize="lg"
          bgColor="#FAFAFA"
        >
          Supprimer la compétence
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody paddingY="30px">
          <Heading
            as="h4"
            fontSize="20px"
            fontWeight="700"
            color="#FAB8BA"
            mb="20px"
          >
            Êtes vous sur de vouloir supprimer la compétence ?
          </Heading>
          <Text color="gray">
            Une fois la compétence supprimée, elle sera définitivement supprimée
            du site et ses informations ne seront pas récupérées.
          </Text>
        </ModalBody>

        <ModalFooter
          w="100%"
          gap="30px"
          alignItems="center"
          justifyContent="center"
          m="auto"
        >
          <Button
            variant="outline"
            borderColor="#FAB8BA"
            color="#FAB8BA"
            onClick={() => {
              onClose();
              backendAPI
                .delete(`/api/techno/${techno.id}`)
                .then(() =>
                  toast({
                    title: `Compétence supprimée avec succès`,
                    status: "success",
                    position: "bottom-right",
                    duration: 7000,
                    isClosable: true,
                  })
                )
                .catch((e) =>
                  toast({
                    title: e.message,
                    status: "error",
                    position: "bottom-right",
                    duration: 7000,
                    isClosable: true,
                  })
                );
            }}
          >
            Confirmer
          </Button>
          <Button color="#FAB8BA" mr={3} onClick={onClose} variant="link">
            Annuler
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

DeleteConfirmModalAnnoncement.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
