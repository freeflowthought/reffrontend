import { Box, BoxProps } from "@chakra-ui/react";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface LayoutProps extends BoxProps {}

export const Layout = ({ children, ...restProps }: LayoutProps) => {
  return (
    <Box {...restProps}>
      <Header />
      <Box p={4}>{children}</Box>
      <Footer />
    </Box>
  );
};

Layout.displayName = "Layout";
