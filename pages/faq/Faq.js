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
import { useRouter } from "next/router";

export default function Faq() {
  const router = useRouter();
  const data = router.query;
  console.log(data.equipo, 'data')
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="container">
      <NavBar />

      <Box textAlign="center" py={10} px={6}>
        <InfoIcon boxSize={"50px"} color={"blue.500"} />
        <Heading as="h2" size="xl" mt={6} mb={2}>
          ¿Cómo conectar al paciente a mi monitor?
        </Heading>
        { data.equipo.toLowerCase().includes("monitor") ?
          <Text color={"gray.500"}>
            Como calibrar el sensor de capnografía de mi monitor:

            Debe realizar la puesta a cero del sensor. Para garantizar la medición del módulo de CO2 con alta precisión, debe realizarse la puesta a cero de acuerdo con las siguientes sugerencias:
            Instalar un nuevo adaptador de vías respiratorias en la sonda antes de la puesta a cero, no es necesario conectar el adaptador de vías respiratorias al circuito del paciente, conecte al monitor y espere a que 10 segundos haga que la sonda se precaliente.
            Abra el menú 【Configuración de CO2】presionando sobre CO2 en la pantalla principal, seleccione el botón【Puesta a cero】, el valor del parametro se reestablecerá a cero.
            Durante el proceso de puesta a cero, el LED verde de la sonda parpadea durante aproximadamente 5 s.
            ADVERTENCIA
            EL proceso de puesta a cero de manera incorrecta y/o no realizar el proceso una vez que se instala el monitor en un quirofano nuevo, provocará resultados falsos de los grados de gas.
          </Text>
        :
          <Text color={"gray.500"}>
            El sensor se coloca normalmente en el dedo índice del paciente y se
            conecta al cable que va con el monitor.Los NO sobre la ubicación de
            los electrodos Pared anterior del tórax superior. Abdomen inferior.
            Electrodos cerca del corazón. Evitar muñecas y tobillos cuando sea
            posible.
          </Text>
        }
        <Button onClick={onOpen} marginTop={"20px"}>
          <Text fontSize="sm">Ver más</Text>
        </Button>
      </Box>

      <Modal onClose={onClose} size="full" isOpen={isOpen}>
        <ModalOverlay />

        <ModalContent alignItems={"center"}>
          <ModalHeader>¿Cómo conectar al paciente a mi monitor?</ModalHeader>
          <ModalCloseButton />
          <ModalBody textAlign={"-webkit-center"}>
          { data.equipo.toLowerCase().includes("monitor") ?
          <Text color={"gray.500"}>
            Como calibrar el sensor de capnografía de mi monitor:
            <br />
            Debe realizar la puesta a cero del sensor. Para garantizar la medición del módulo de CO2 con alta precisión, debe realizarse la puesta a cero de acuerdo con las siguientes sugerencias:
            <br />Instalar un nuevo adaptador de vías respiratorias en la sonda antes de la puesta a cero, no es necesario conectar el adaptador de vías respiratorias al circuito del paciente, conecte al monitor y espere a que 10 segundos haga que la sonda se precaliente.
            <br />Abra el menú 【Configuración de CO2】presionando sobre CO2 en la pantalla principal, seleccione el botón【Puesta a cero】, el valor del parametro se reestablecerá a cero.
            <br />Durante el proceso de puesta a cero, el LED verde de la sonda parpadea durante aproximadamente 5 s.
            <br />ADVERTENCIA
            <br />EL proceso de puesta a cero de manera incorrecta y/o no realizar el proceso una vez que se instala el monitor en un quirofano nuevo, provocará resultados falsos de los grados de gas.
          </Text>
        :
            <Text w={"80%"} color={"gray.500"}>
              El sensor se coloca normalmente en el dedo índice del paciente y
              se conecta al cable que va con el monitor.
              <br /> Los NO sobre la ubicación de los electrodos.
              <br /> Pared anterior del tórax superior.
              <br /> Abdomen inferior.
              <br /> Electrodos cerca del corazón. <br />
              Evitar muñecas y tobillos cuando sea posible.
            </Text>
        }
            <Divider />
            <AspectRatio maxW="860px" maxH={"600px"} ratio={1}>
              <iframe
                title="Operation Video of Patient Monitors - Venus"
                src="https://www.youtube.com/embed/lAglthJXx4o"                
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
