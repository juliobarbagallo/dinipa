import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import { Box, Heading, Text } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
export default function Faq() {
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
      </Box>

      <Footer />
    </div>
  );
}
