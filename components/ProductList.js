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
} from "@chakra-ui/react";

export default function ProductList(props) {
  const backGround = useColorModeValue("white", "gray.800");
  return (
    <Center>
      <Wrap spacing="30px" ml={"90px"}>
        {props.equiposList.map((equipo) => (
          <WrapItem key={equipo.id}>
            <Center>
              <Box
                role={"group"}
                p={6}
                maxW={"330px"}
                w={"full"}
                bg={backGround}
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
            </Center>
          </WrapItem>
        ))}
      </Wrap>
    </Center>
  );
}
