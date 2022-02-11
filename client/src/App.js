import * as React from "react";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import { styled } from "@mui/system";
import Header from "./components/Header";
const MyContainer = styled(Container, {})`
  margin-top: 1rem;
  background-color: red;
`;

export default function App() {
  return (
    <>
      <Navbar />
      <MyContainer maxWidth="xl">
        <Header />
      </MyContainer>
    </>
  );
}
