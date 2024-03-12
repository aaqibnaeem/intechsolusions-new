import React from "react";
import { Home } from "./pages";
import "./App.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const App: React.FC = () => {
  const theme = extendTheme({
    colors: {
      custom: {
        primary: "#33354A",
        secondary: "#FFE1D5 ",
        tertiary: "#D5EDFF",
        white: "#FFFFFF",
      },
    },
  });
  return (
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  );
};

export default App;
