// src/components/Layout/Layout.js

import React from "react";
import { Box } from "@chakra-ui/react";

import Footer from "../src/components/Footer/index.tsx";

const Layout = ({ children }) => {
  return (
    <Box>
      <Box as="main" minHeight="calc(100vh - 200px)">
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
