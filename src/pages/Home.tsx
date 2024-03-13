import React from "react";
import { Box, Divider, HStack, Stack, Text } from "@chakra-ui/react";
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
      </Stack>
    </Stack>
  );
};

export default Home;
