import React from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  GridItem,
  HStack,
  Input,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Home: React.FC = () => {
  return (
    <Stack p="20px" bg="custom.primary">
      <Navbar />
      <Stack
        w="full"
        bg="white"
        borderRadius="30px"
        justifyContent="end"
        alignItems="center"
        pb={10}
      >
        <Hero />
        <Box w="full" h="100px"></Box>
        <HStack gap={5} lineHeight={"40px"}>
          <Text
            color="custom.primary"
            textAlign="right"
            fontWeight="500"
            fontSize="48px"
          >
            Features <br />
            at a glance
          </Text>
          <Divider h="80px" orientation="vertical" borderWidth="2px" />
          <Text maxW="600px" lineHeight={5}>
            Explore our software's highlights swiftly. Unveil essential tools,
            functions, and capabilities efficiently. Get acquainted with our
            features effortlessly.
          </Text>
        </HStack>
        <Box w="full" h="100px"></Box>
        <Stack w="100%" p={10}>
          <Grid
            h="600px"
            templateRows="repeat(12, 1fr)"
            templateColumns="repeat(12, 1fr)"
            gap={4}
          >
            <GridItem rowSpan={4} colSpan={8}>
              <VStack
                h="100%"
                w="100%"
                align="center"
                justify="center"
                bg="custom.tertiary"
                borderRadius={20}
                p={20}
              >
                <Text fontWeight={600} fontSize="x-large" mb={3}>
                  Scalability
                </Text>
                <UnorderedList>
                  <ListItem>
                    Tailored software solutions scalable to businesses of all
                    sizes.
                  </ListItem>
                </UnorderedList>
              </VStack>
            </GridItem>
            <GridItem rowSpan={4} colSpan={4}>
              <VStack
                h="100%"
                w="100%"
                align="center"
                justify="center"
                bg="custom.secondary"
                borderRadius={20}
                p={20}
              >
                <Text fontWeight={600} fontSize="x-large" mb={3}>
                  Reliability
                </Text>
                <UnorderedList>
                  <ListItem>
                    Dependable performance for uninterrupted operations.
                  </ListItem>
                </UnorderedList>
              </VStack>
            </GridItem>
            <GridItem borderRadius={20} rowSpan={4} colSpan={4}>
              <VStack
                h="100%"
                w="100%"
                align="center"
                justify="center"
                bg="custom.secondary"
                borderRadius={20}
                p={20}
              >
                <Text fontWeight={600} fontSize="x-large" mb={3}>
                  Flexibility
                </Text>
                <UnorderedList>
                  <ListItem>
                    Adaptable features to meet specific needs.
                  </ListItem>
                </UnorderedList>
              </VStack>
            </GridItem>
            <GridItem borderRadius={20} rowSpan={4} colSpan={8}>
              <VStack
                h="100%"
                w="100%"
                align="center"
                justify="center"
                bg="custom.tertiary"
                borderRadius={20}
                p={20}
              >
                <Text fontWeight={600} fontSize="x-large" mb={3}>
                  Security
                </Text>
                <UnorderedList>
                  <ListItem>Robust data protection and compliance.</ListItem>
                </UnorderedList>
              </VStack>
            </GridItem>
            <GridItem borderRadius={20} rowSpan={4} colSpan={8}>
              <VStack
                h="100%"
                w="100%"
                align="center"
                justify="center"
                bg="custom.tertiary"
                borderRadius={20}
                p={20}
              >
                <Text fontWeight={600} fontSize="x-large" mb={3}>
                  Support
                </Text>
                <UnorderedList>
                  <ListItem>
                    Responsive customer assistance and analytics.
                  </ListItem>
                </UnorderedList>
              </VStack>
            </GridItem>
            <GridItem borderRadius={20} rowSpan={4} colSpan={4}>
              <VStack
                h="100%"
                w="100%"
                align="center"
                justify="center"
                bg="custom.secondary"
                borderRadius={20}
                p={20}
              >
                <Text fontWeight={600} fontSize="x-large" mb={3}>
                  Accessibility
                </Text>
                <UnorderedList>
                  <ListItem>
                    Cloud-based deployment and cost-effectiveness.
                  </ListItem>
                </UnorderedList>
              </VStack>
            </GridItem>
          </Grid>
        </Stack>
      </Stack>
      <VStack py={20} px={10} align="start">
        <Text fontSize={24} fontWeight={700} color="custom.white">
          Do you have any questions? <br />
          Write to us, we will respond propmptly
        </Text>
        <HStack>
          <Input
            bg="cutom.white"
            color="custom.primary"
            placeholder="Email"
            type="email"
            width="300px"
          />
          <Button
            _hover={{
              backgroundColor: "custom.tertiary",
              color: "custom.primary",
            }}
            bg="custom.primary"
            color="custom.white"
          >
            Submit
          </Button>
        </HStack>
      </VStack>
    </Stack>
  );
};

export default Home;
