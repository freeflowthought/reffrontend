import "../styles/globals.css";
import { AppProps } from "next/app";
import { StoreContext, store } from "../store/index";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { Inspector, InspectParams } from "react-dev-inspector";
import React from "react";
const InspectorWrapper =
  process.env.NODE_ENV === "development" ? Inspector : React.Fragment;

function MyApp({ Component, pageProps }:AppProps) {
  // @ts-ignore
  const Layout = Component.Layout || (({ children }) => children);
  return (
    <InspectorWrapper
      keys={["control", "shift", "z"]}
      disableLaunchEditor={false}
    >
      <StoreContext.Provider value={store}>
        <ChakraProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </StoreContext.Provider>
    </InspectorWrapper>
  );
}

export default MyApp;
