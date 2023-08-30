import { ConfigProvider } from "antd";
import CreateButton from "components/CreateButton";
import { ActionsProvider } from "contexts/useActions/useActions";
import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { antdTheme } from "styles/antd";

import GlobalStyles from "styles/global";
import theme from "styles/theme";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { isAuthenticated } from "utils/auth";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const isUserInAuthRoute =
    router.pathname.includes("cadastro") || router.pathname.includes("login");

  useEffect(() => {
    console.log(!isAuthenticated() && !isUserInAuthRoute);
    if (!isAuthenticated() && !isUserInAuthRoute) {
      router.push("/login");
    }
  }, [router.pathname]);

  return (
    <ThemeProvider theme={theme}>
      <ConfigProvider theme={antdTheme}>
        <GoogleOAuthProvider clientId="565071068532-8lg1vid392gasasgfuv8mmd5qju5c8eo.apps.googleusercontent.com">
          <ActionsProvider>
            <Head>
              <title>habiting</title>
              <link rel="shortcut icon" href="/img/leaf-fill.svg" />
              <link rel="apple-touch-icon" href="/img/leaf-fill.svg" />
              <link rel="manifest" href="/manifest.json" />
              <meta name="theme-color" content="#06092B" />
              <meta
                name="description"
                content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
              />
            </Head>
            <GlobalStyles />
            <Component {...pageProps} />
            <CreateButton />
          </ActionsProvider>
        </GoogleOAuthProvider>
      </ConfigProvider>
    </ThemeProvider>
  );
}

export default App;
