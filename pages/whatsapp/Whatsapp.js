import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

export default function Whatsapp() {
  const backGround1 = useColorModeValue("gray.50", "gray.800");
  const backGround2 = useColorModeValue("white", "gray.700");
  return (
    <div className="container">
      <NavBar />
      <Flex minH={"100vh"} align={"center"} justify={"center"} bg={backGround1}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          {/* <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool <Link color={"blue.400"}>features</Link>{" "}
              ✌️
            </Text>
          </Stack> */}
          <Box rounded={"lg"} bg={backGround2} boxShadow={"lg"} p={8}>
            <Stack spacing={4}>
              <FormControl id="nombre">
                <FormLabel>Nombre</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="apellido">
                <FormLabel>Apellido</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input type="email" />
              </FormControl>

              <Stack spacing={10}>
                {/* <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack> */}
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Abrir Whatsapp
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Footer />
    </div>
  );
}
