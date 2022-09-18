import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Textarea,
  useColorModeValue,
  Button
} from "@chakra-ui/react";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import React, { useState } from "react";
import { useRouter } from "next/router";

export default function Whatsapp() {
  const backGround1 = useColorModeValue("gray.50", "gray.800");
  const backGround2 = useColorModeValue("white", "gray.700");
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');  
  const router = useRouter();
  const data = router.query;
  return (
    <div className="container">
      <NavBar />
      <Flex minH={"100vh"} align={"center"} justify={"center"} bg={backGround1}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Box rounded={"lg"} bg={backGround2} boxShadow={"lg"} p={8}>
            <Stack spacing={4}>
              <FormControl id="nombre" isRequired>
                <FormLabel>Nombre y apellido</FormLabel>
                <Input
                  type="text"
                  name="fullname"
                  placeholder="Nombre y apellido"
                  value={fullname}
                  onChange={(e) => {
                    setFullname(e.target.value);
                  }}
                />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email" 
                  name="email"
                  placeholder="Email"
                  value={email}                          
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Mensaje:</FormLabel>
                <Textarea
                  name="message"
                  placeholder="Ingrese su mensaje"
                  rows={6}
                  resize="none"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
                
              </FormControl>

              <Stack spacing={10}>
                  <Button
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                  <a target="_blank" href={`https://api.whatsapp.com/send?phone=+5491152635899&text=%20Hola mi nombre es ${fullname} y mi correo: ${email}. Equipo: ${data.equipo} ${message}`} rel="noopener noreferrer">
                    Abrir Whatsapp
                  </a> 
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
