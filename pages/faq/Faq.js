import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { AspectRatio } from "@chakra-ui/react";
// import { useState } from "react";

export default function Faq() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  //   const [size, setSize] = useState("full");

  //   const handleSizeClick = (newSize) => {
  //     setSize(newSize);
  //     onOpen();
  //   };
  return (
    <div className="container">
      <NavBar />

      <Box textAlign="center" py={10} px={6}>
        <InfoIcon boxSize={"50px"} color={"blue.500"} />
        <Heading as="h2" size="xl" mt={6} mb={2}>
          ¿Cómo conectar al paciente a mi monitor?
        </Heading>
        <Text color={"gray.500"}>
          El sensor se coloca normalmente en el dedo índice del paciente y se
          conecta al cable que va con el monitor.Los NO sobre la ubicación de
          los electrodos Pared anterior del tórax superior. Abdomen inferior.
          Electrodos cerca del corazón. Evitar muñecas y tobillos cuando sea
          posible.
        </Text>
        <Button onClick={onOpen}>
          <Text fontSize="sm">Ver más</Text>
        </Button>
      </Box>

      <Modal onClose={onClose} size="full" isOpen={isOpen}>
        <ModalOverlay />

        <ModalContent alignItems={"center"}>
          <ModalHeader>¿Cómo conectar al paciente a mi monitor?</ModalHeader>
          <ModalCloseButton />
          <ModalBody textAlign={"-webkit-center"}>
            <Text w={"40%"} color={"gray.500"}>
              El sensor se coloca normalmente en el dedo índice del paciente y
              se conecta al cable que va con el monitor.
              <br /> Los NO sobre la ubicación de los electrodos.
              <br /> Pared anterior del tórax superior.
              <br /> Abdomen inferior.
              <br /> Electrodos cerca del corazón. <br />
              Evitar muñecas y tobillos cuando sea posible.
            </Text>
            <Divider />
            <AspectRatio maxW="860px" maxH={"600px"} ratio={1}>
              <iframe
                title="Operation Video of Patient Monitors - Venus"
                src="https://www.youtube.com/embed/lAglthJXx4o"
                // src="https://www.youtube.com/embed/QhBnZ6NPOY0"
                allowFullScreen
              />
            </AspectRatio>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Footer />
    </div>
  );
}
