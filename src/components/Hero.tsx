import {
  Button,
  Grid,
  GridItem,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import FAIcon from "./FAIcon";

const Hero: React.FC = () => {
  return (
    <>
      <VStack w="100%" textAlign="center" my={10}>
        <Text fontSize="5rem" fontWeight="500" lineHeight="90px" mb={2}>
          All accounting <br /> in one application.
        </Text>
        <VStack w="40%">
          <Text textAlign="justify">
            InTech Solusions provides you a complete range of database
            management software with its unmatched combination of flexibility,
            usability, and productivity.
          </Text>
        </VStack>
      </VStack>
      <Stack w="100%" mt={2}>
        <Grid
          px={10}
          h="400px"
          templateRows="repeat(8, 1fr)"
          templateColumns="repeat(6, 1fr)"
          gap="20px"
        >
          <GridItem
            borderRadius="30px"
            rowSpan={8}
            colSpan={1}
            bg="custom.tertiary"
            overflow="hidden"
            p={4}
          >
            <VStack w="100%" justify="center" align="start" h="100%">
              <FAIcon icon="arrow-right-long" />
              <Text fontSize="12px" w="70%">
                Track your business. And get a clear overview of your accounts,
                payable and cash flow
              </Text>
            </VStack>
          </GridItem>
          <GridItem borderRadius="30px" rowSpan={2} colSpan={4}>
            <HStack w="100%" justifyContent="center">
              <Button
                variant="solid"
                borderRadius="50px"
                bgColor="custom.primary"
                color="custom.white"
                _hover={{
                  bgColor: "custom.tertiary",
                  color: "custom.primary",
                }}
              >
                Contact through Whatsapp
              </Button>
              <Button
                variant="outline"
                borderRadius="50px"
                _hover={{
                  bgColor: "custom.tertiary",
                  color: "custom.primary",
                }}
              >
                Contact through Phone
              </Button>
            </HStack>
          </GridItem>
          <GridItem
            borderRadius="30px"
            rowSpan={8}
            colSpan={1}
            bg="custom.secondary"
            overflow="hidden"
          >
            <VStack
              h="500px"
              w="500px"
              justify="end"
              backgroundImage="url(https://img.freepik.com/free-vector/landscaping-invoice-template-design_742173-4943.jpg?t=st=1710280233~exp=1710283833~hmac=ebe36c38fa47e7e616cbee6d20c94fc3b8db6f5e38106bdff41857b24aed2d5e&w=740)"
              backgroundSize="cover"
              transform="rotate(10deg)"
              bgPosition="left"
              mt={100}
              ml={-100}
            ></VStack>
          </GridItem>
          <GridItem rowSpan={6} colSpan={4}>
            <HStack w="100%" h="100%" gap={5}>
              <VStack
                flex={1}
                borderRadius="30px"
                bg="custom.secondary"
                h="100%"
                align="center"
                justify="center"
                textAlign="center"
              >
                <Text fontWeight="bold" fontSize={18}>
                  100+ <br />
                  Clients
                </Text>
                <Text>
                  People accross the <br /> country trust us.
                </Text>
              </VStack>
              <VStack
                w="380px"
                borderRadius="30px"
                bg="custom.secondary"
                h="100%"
              >
                <Image
                  w="100%"
                  h="100% "
                  objectFit="cover"
                  src="https://img.freepik.com/free-vector/businessman-laptop_603843-770.jpg?t=st=1710280053~exp=1710283653~hmac=ddddcaf01c704197c27eeb81b4c45c9d768ee1f440b2e6241514d632ae4a8349&w=826"
                />
              </VStack>
              <VStack
                flex={1}
                borderRadius="30px"
                bg="custom.tertiary"
                h="100%"
                align="center"
                justify="center"
                textAlign="center"
              >
                <Text fontWeight="bold" fontSize={18}>
                  100+ <br />
                  Clients
                </Text>
                <Text>
                  People accross the <br /> country trust us.
                </Text>
              </VStack>
            </HStack>
          </GridItem>
        </Grid>
      </Stack>
    </>
  );
};

export default Hero;
