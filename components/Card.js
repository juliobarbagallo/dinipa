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

function Card(props) {
  const backGround = useColorModeValue("white", "gray.800");
  let boxBg = useColorModeValue("white !important", "#111c44 !important");
  let secondaryBg = useColorModeValue("gray.50", "whiteAlpha.100");
  let mainText = useColorModeValue("gray.800", "white");
  let iconBox = useColorModeValue("gray.100", "whiteAlpha.200");
  let iconColor = useColorModeValue("brand.200", "white");
  return (
<WrapItem key={props.equipo.id}>
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
                    backgroundImage: `url(${props.equipo.imagen})`,
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
                    src={props.equipo.imagen}
                  />
                </Box>
                <Stack pt={10} align={"center"}>
                  <Link href="/equipo/[id]" as={`/equipo/${props.equipo.id}`}>
                    <Heading
                      cursor={"pointer"}
                      fontSize={"2xl"}
                      fontFamily={"body"}
                      fontWeight={500}
                    >
                      <a> {props.equipo.nombre}</a>
                    </Heading>
                  </Link>
                  {/* <Stack direction={"row"} align={"center"}>
                    <Text fontWeight={800} fontSize={"xl"}>
                      $57
                    </Text>
                    <Text textDecoration={"line-through"} color={"gray.600"}>
                      $199
                    </Text>
                  </Stack> */}
                </Stack>
              </Box>
            </Center>
          </WrapItem>
  );
}

export default Card;