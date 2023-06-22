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
  ChakraProvider,
} from "@chakra-ui/react";
import { IMAGES } from "../../assets/images/images";
import "../../assets/fonts/font.scss";
import "./Login.scss";
import axios from "../../connections/axios";
import { BaseSyntheticEvent } from "react";

export default function SimpleCard() {
  const clickFn = async (e: BaseSyntheticEvent) => {
    const data = new FormData(e.target);
    console.log([...Array.from(data.entries())]);
    const date = [...Array.from(data.entries())];
    try {
      const res = await axios.post("http://localhost:3000/auth/login", {
        email: date[0][1],
        password: date[1][1],
      });

      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <ChakraProvider>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("#0b090a", "#0b090a")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading
              className='logo-font'
              fontSize={"4xl"}
              textAlign={"center"}
            >
              Frame - Gram
            </Heading>
            <Text fontSize={"lg"} color={"gray.400"}>
              new to our website? <Link color={"blue.400"}>join here</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("gray.900", "gray.900")}
            boxShadow={"lg"}
            p={8}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                clickFn(e);
              }}
            >
              <Stack spacing={4} color={"gray.200"}>
                <FormControl>
                  <FormLabel>Email address</FormLabel>
                  <Input type='email' name='email' />
                </FormControl>
                <FormControl id='password'>
                  <FormLabel>Password</FormLabel>
                  <Input type='password' name='password' />
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  >
                    <Link color={"blue.400"}>Forgot password?</Link>
                  </Stack>
                  <Button
                    type='submit'
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Sign in
                  </Button>
                </Stack>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
    </ChakraProvider>
  );
}
