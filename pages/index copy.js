import Link from "next/link";
import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/Home.module.css";
import { equipos } from "../assets/data";

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  SimpleGrid,
  Container,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import ProductList from "../components/ProductList";

export const getStaticProps = async () => {
  return {
    props: {
      equiposList: equipos,
    },
  };
};

export default function Home(equiposList) {
  // console.log(equiposList.equiposList);

  return (
    <div className={styles.container}>
      <Head>
        <title>Dinpa Medical</title>
        <meta name="description" content="Generated by Dinipa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* chakra starts */}

        <Center>
          {/* <Stack direction={["column", "row"]} spacing="24px"> */}
          <Wrap spacing="30px">
            {equiposList.equiposList.map((equipo) => (
              <WrapItem key={equipo.id}>
                <Box
                  role={"group"}
                  p={6}
                  maxW={"330px"}
                  w={"full"}
                  bg={useColorModeValue("white", "gray.800")}
                  boxShadow={"2xl"}
                  rounded={"lg"}
                  pos={"relative"}
                  zIndex={1}
                >
                  <Box
                    rounded={"lg"}
                    // mt={-12}
                    pos={"relative"}
                    height={"230px"}
                    _after={{
                      transition: "all .3s ease",
                      content: '""',
                      w: "full",
                      h: "full",
                      pos: "absolute",
                      top: 5,
                      left: 0,
                      // backgroundImage: `url(${IMAGE})`,
                      backgroundImage: `url(${equipo.imagen})`,
                      filter: "blur(15px)",
                      zIndex: -1,
                    }}
                    _groupHover={{
                      _after: {
                        filter: "blur(20px)",
                      },
                    }}
                  >
                    <Image
                      rounded={"lg"}
                      height={230}
                      width={282}
                      objectFit={"cover"}
                      // src={IMAGE}
                      src={equipo.imagen}
                    />
                  </Box>
                  <Stack pt={10} align={"center"}>
                    <Link href="/equipo/[id]" as={`/equipo/${equipo.id}`}>
                      <Heading
                        cursor={"pointer"}
                        fontSize={"2xl"}
                        fontFamily={"body"}
                        fontWeight={500}
                      >
                        <a> {equipo.nombre}</a>
                      </Heading>
                    </Link>
                    <Stack direction={"row"} align={"center"}>
                      <Text fontWeight={800} fontSize={"xl"}>
                        $57
                      </Text>
                      <Text textDecoration={"line-through"} color={"gray.600"}>
                        $199
                      </Text>
                    </Stack>
                  </Stack>
                </Box>
              </WrapItem>
            ))}
          </Wrap>
        </Center>

        {/* </Stack> */}
        {/* chakra ends */}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://dinipamedical.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/logo.png" alt="Dinipa Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
