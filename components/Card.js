import Link from "next/link";
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Stack,
  Image,
  WrapItem,
} from "@chakra-ui/react";

function Card(props) {
  const backGround = useColorModeValue("white", "gray.800");
  return (
<WrapItem key={props.equipo.id}>
            <Center>
            <Link href="/equipo/[id]" as={`/equipo/${props.equipo.id}`}>
              <Box
                cursor={"pointer"}
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
                    src={props.equipo.imagen}
                  />
                </Box>
                <Stack pt={10} align={"center"}>                  
                    <Heading
                      cursor={"pointer"}
                      fontSize={"2xl"}
                      fontFamily={"body"}
                      fontWeight={500}
                    >
                      <a> {props.equipo.nombre}</a>
                    </Heading>
                </Stack>
              </Box>
              </Link>
            </Center>
          </WrapItem>
  );
}

export default Card;