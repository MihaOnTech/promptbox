import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { SessionProvider } from "next-auth/react";

const theme = createTheme({
  palette: {
    background: {
      default: "#2c2c2c",
    },
    text: {
      primary: "#f0f0f0",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
  <SessionProvider session={pageProps.session}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  </SessionProvider>
  );
}

export default MyApp;
