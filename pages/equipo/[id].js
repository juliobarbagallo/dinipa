import { equipos } from "../../assets/data";
import Link from "next/link";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import {
  Box,  
  Container,
  Stack,
  Text,
  Image,
  Flex,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
} from "@chakra-ui/react";
import {
  BsWhatsapp,
  BsQuestionCircle,
  BsCart3,
} from "react-icons/bs";
import { SiReadthedocs } from "react-icons/si";
import { VscReport } from "react-icons/vsc";
import { GrCatalog } from "react-icons/gr";
import { TiArrowBack } from "react-icons/ti";

export const getStaticProps = async ({ params }) => {
  const equipo = equipos.filter((equipo) => equipo.id === params.id);
  return {
    props: {
      equipo: equipo[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = equipos.map((equipo) => ({
    params: {
      id: equipo.id,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export default function Equipo({ equipo }) {
  console.log(equipo, '  EQUIPO')
  return (
    <div className="container">
      <NavBar />
      <main className="main">
        <Container maxW={"7xl"}>
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 18, md: 24 }}
          >
            <Flex>
              <Image
                rounded={"md"}
                alt={"product image"}
                src={equipo.imagen}
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={{ base: "100%", sm: "400px", lg: "500px" }}
              />
            </Flex>
            <Stack spacing={{ base: 6, md: 10 }}>
              <Box as={"header"}>
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
                >
                  {equipo.nombre}
                </Heading>
              </Box>

              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={"column"}
                divider={
                  <StackDivider
                    borderColor={useColorModeValue("gray.200", "gray.600")}
                  />
                }
              >
                {/* <VStack spacing={{ base: 4, sm: 6 }}>
                  <Text fontSize={"lg"}>{equipo.descripcion}</Text>
                </VStack> */}
                {/* <Box>
                  <Text
                    fontSize={{ base: "16px", lg: "18px" }}
                    color={useColorModeValue("yellow.500", "yellow.300")}
                    fontWeight={"500"}
                    textTransform={"uppercase"}
                    mb={"4"}
                  >
                    Caracteristicas
                  </Text>

                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <List spacing={2}>
                      <ListItem>Sistema de operación intuitivo</ListItem>
                      <ListItem>
                        Nueve modos de infusión: flujo, dosificación, V-T, R-T,
                        relevo, rampa, intermitente, carga dosis y secuencial
                      </ListItem>{" "}
                      <ListItem>
                        Librería con los medicamentos más usados
                      </ListItem>
                      <ListItem>
                        Memoria de última programación e historial de eventos
                      </ListItem>
                    </List>
                    <List spacing={2}>
                      <ListItem>Transmisión de datos wifi (opcional)</ListItem>
                      <ListItem>Función de valoración</ListItem>
                      <ListItem>Bolo manual y bolo automático</ListItem>
                      <ListItem>Modo de purga automática</ListItem>
                    </List>
                  </SimpleGrid>
                </Box> */}
                <Box>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <List spacing={2}>
                      <Link
                        href={{
                          pathname: "/whatsapp/Whatsapp",
                          query: {equipo: equipo.nombre},
                        }}
                      >
                        <ListItem cursor={"pointer"}>
                          <Text as={"span"} fontWeight={"bold"} fontSize={"30"}>
                            <BsWhatsapp />
                          </Text>{" "}
                          <a>Whatsapp</a>
                        </ListItem>
                      </Link>
                      <Link href="/faq/Faq">
                        <ListItem cursor={"pointer"}>
                          <Text as={"span"} fontWeight={"bold"} fontSize={"30"}>
                            <BsQuestionCircle />
                          </Text>{" "}
                          Preguntas frecuentes
                        </ListItem>
                      </Link>
                      <Link
                        href={equipo.Manual}
                        passHref={true}
                      >
                        <ListItem cursor={"pointer"}>
                          <Text as={"span"} fontWeight={"bold"} fontSize={"30"}>
                            <SiReadthedocs />
                          </Text>{" "}
                          <a target="_blank" rel="noreferrer">
                            Manual de Usuario
                          </a>
                        </ListItem>
                      </Link>
                    </List>
                    <List spacing={2}>
                      <Link href="/Report/Report">
                        <ListItem cursor={"pointer"}>
                          <Text as={"span"} fontWeight={"bold"} fontSize={"30"}>
                            <VscReport />
                          </Text>{" "}
                          Reportar inconveniente
                        </ListItem>
                      </Link>
                      <Link href="/Request/Request">
                        <ListItem cursor={"pointer"}>
                          <Text as={"span"} fontWeight={"bold"} fontSize={"30"}>
                            <BsCart3 />
                          </Text>{" "}
                          Pedidos
                        </ListItem>
                      </Link>                      
                      <Link
                        href={equipo.catalogo}
                        passHref={true}
                      >
                        <ListItem cursor={"pointer"}>
                          <Text as={"span"} fontWeight={"bold"} fontSize={"30"}>
                            <GrCatalog />
                          </Text>{" "}
                          <a target="_blank" rel="noreferrer">
                            Descripción del equipo
                          </a>
                        </ListItem>
                      </Link>              
                    </List>               
                  </SimpleGrid>                          
                </Box>
                <List>
                  <Link
                        href="/"                        
                      >
                        <ListItem cursor={"pointer"}>
                          <Text as={"span"} fontWeight={"bold"} fontSize={"30"}>
                            <TiArrowBack />
                          </Text>{" "}                        
                            Volver al listado.                          
                        </ListItem>
                      </Link></List>   
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
