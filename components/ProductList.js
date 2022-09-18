import Link from "next/link";
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Wrap,
  WrapItem,
  SimpleGrid,
} from "@chakra-ui/react";
import Card from "./Card";

export default function ProductList(props) {
  const backGround = useColorModeValue("white", "gray.800");
  return (
    

        // {props.equiposList.map((equipo) => ())}
      <SimpleGrid columns={[1,2,3]} spacing={5}>
        {props.equiposList.map((equipo, index) => <Card key={index} equipo={equipo} /> )}
        
      </SimpleGrid>
  );
}
