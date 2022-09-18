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
          
        </Container>
      </main>
      <Footer />
    </div>
  );
}
