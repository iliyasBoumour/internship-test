import * as React from "react";
import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import theme from "./styles/theme";
import Navbar from "./components/Navbar";
// import ScrollTop from "./components/ScrollTop";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Products from "./pages/Products";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <ScrollTop /> */}
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <Router>
          <Navbar />
          <Container
            maxWidth="xl"
            sx={{ overflow: "hidden", marginTop: "calc(64px + 1rem)" }}
          >
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/products/:id" element={<Product />} />
              <Route path="/products" element={<Products />} />
            </Routes>
          </Container>
        </Router>
      </StyledEngineProvider>
    </ThemeProvider>
  );
}
