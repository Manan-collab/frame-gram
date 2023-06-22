// import {
//   Flex,
//   Box,
//   FormControl,
//   FormLabel,
//   Input,
//   Checkbox,
//   Stack,
//   Link,
//   Button,
//   Heading,
//   Text,
//   useColorModeValue,
//   ChakraProvider,
// } from "@chakra-ui/react";

// export default function SimpleCard() {
//   return (
//     <ChakraProvider>
//       <Flex
//         minH={"100vh"}
//         align={"center"}
//         justify={"center"}
//         bg={useColorModeValue("#0b090a", "#FFADC3")}
//       >
//         <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
//           <Stack align={"center"}>
//             <Heading fontSize={"4xl"} color={"#dcdcdc"}>Sign in to your account</Heading>
//             <Text fontSize={"lg"} color={"#dcdcdc"}>
//               to enjoy all of our cool <Link color={"blue.400"}>features</Link>{" "}
//               ✌️
//             </Text>
//           </Stack>
//           <Box
//             rounded={"lg"}
//             bg={useColorModeValue("#dcdcdc", "gray.700")}
//             boxShadow={"lg"}
//             p={8}
//           >
//             <Stack spacing={4} color={"gray.700"}>
//               <FormControl id='email' >
//                 <FormLabel>Email address</FormLabel>
//                 <Input type='email' />
//               </FormControl>
//               <FormControl id='password'>
//                 <FormLabel>Password</FormLabel>
//                 <Input type='password' />
//               </FormControl>
//               <Stack spacing={10} color={"gray.700"}>
//                 <Stack
//                   direction={{ base: "column", sm: "row" }}
//                   align={"start"}
//                   justify={"space-between"}
//                 >

//                   <Link color={"blue.400"}>Forgot password?</Link>
//                 </Stack>
//                 <Button
//                   bg={"blue.400"}
//                   color={"white"}
//                   _hover={{
//                     bg: "blue.500",
//                   }}
//                 >
//                   Sign in
//                 </Button>
//               </Stack>
//             </Stack>
//           </Box>
//         </Stack>
//       </Flex>
//     </ChakraProvider>
//   );
// }

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  ChakraProvider,
} from "@chakra-ui/react";
import { useState } from "react";
import LoginCard from "../Login/Login";
import './Sugnup.scss';
import "../../assets/fonts/font.scss";
// import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);

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
            <Heading className='logo-font' fontSize={"4xl"} textAlign={"center"}>
            Frame - Gram
            </Heading>
            <Text fontSize={"lg"} color={"gray.400"}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("gray.900", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4} color={"gray.200"}>
              <HStack>
                <Box>
                  <FormControl id='firstName' isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type='text' />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id='lastName'>
                    <FormLabel>Last Name</FormLabel>
                    <Input type='text' />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id='email' isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type='email' />
              </FormControl>
              <FormControl id='password' isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? "text" : "password"} />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {/* {showPassword ? <ViewIcon /> : <ViewOffIcon />} */}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText='Submitting'
                  size='lg'
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user? <Link color={"blue.400"}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </ChakraProvider>
  );
}
