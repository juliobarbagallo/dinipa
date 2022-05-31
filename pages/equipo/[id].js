import { equipos, equiposDb } from "../../assets/data";

import Link from "next/link";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from "@chakra-ui/react";
import {
  BsWhatsapp,
  BsQuestionCircle,
  BsCart3,
  BsInfoCircle,
} from "react-icons/bs";
import { SiReadthedocs } from "react-icons/si";
import { VscReport } from "react-icons/vsc";
// import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
// import { MdLocalShipping } from "react-icons/md";

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
                {/* <Text
                  color={useColorModeValue("gray.900", "gray.400")}
                  fontWeight={300}
                  fontSize={"2xl"}
                >
                  $350.00 USD
                </Text> */}
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
                <VStack spacing={{ base: 4, sm: 6 }}>
                  {/* <Text
                    color={useColorModeValue("gray.500", "gray.400")}
                    fontSize={"2xl"}
                    fontWeight={"300"}
                  >
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore
                  </Text> */}
                  <Text fontSize={"lg"}>{equipo.descripcion}</Text>
                </VStack>
                <Box>
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
                </Box>
                <Box>
                  {/* <Text
                    fontSize={{ base: "16px", lg: "18px" }}
                    color={useColorModeValue("yellow.500", "yellow.300")}
                    fontWeight={"500"}
                    textTransform={"uppercase"}
                    mb={"4"}
                  >
                    Detalles del producto
                  </Text> */}

                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <List spacing={2}>
                      <Link href="/whatsapp/Whatsapp">
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
                        href="https://drive.google.com/file/d/1r5gsCCi7masKtG6whlmhFq86R9ry9qqW/view"
                        passHref={true}
                      >
                        <ListItem cursor={"pointer"}>
                          <Text as={"span"} fontWeight={"bold"} fontSize={"30"}>
                            <SiReadthedocs />
                          </Text>{" "}
                          <a target="_blank" rel="noreferrer">
                            Manual de Usaurio
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
                      <Link href="/More/MoreInfo">
                        <ListItem cursor={"pointer"}>
                          <Text as={"span"} fontWeight={"bold"} fontSize={"30"}>
                            <BsInfoCircle />
                          </Text>{" "}
                          Más información
                        </ListItem>
                      </Link>
                      {/* <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Water resistance:
                      </Text>{" "}
                      5 bar (50 metres / 167 feet){" "}
                    </ListItem> */}
                    </List>
                  </SimpleGrid>
                </Box>
              </Stack>

              {/* <Button
                rounded={"none"}
                w={"full"}
                mt={8}
                size={"lg"}
                py={"7"}
                bg={useColorModeValue("gray.900", "gray.50")}
                color={useColorModeValue("white", "gray.900")}
                textTransform={"uppercase"}
                _hover={{
                  transform: "translateY(2px)",
                  boxShadow: "lg",
                }}
              >
                Add to cart
              </Button> */}

              {/* <Stack
                direction="row"
                alignItems="center"
                justifyContent={"center"}
              >
                <MdLocalShipping />
                <Text>2-3 business days delivery</Text>
              </Stack> */}
            </Stack>
          </SimpleGrid>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
