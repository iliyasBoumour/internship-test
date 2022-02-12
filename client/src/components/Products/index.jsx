import React from "react";
import { Grid, useMediaQuery, Box, Typography } from "@mui/material";
import Product from "../product";
const products = [
  {
    id: 1,
    name: "msi",
    categorie: "laptop",
    image: "/images/1.png",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, excepturi",
  },
  {
    id: 2,
    name: "msi",
    categorie: "laptop",
    image: "/images/1.png",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, excepturi",
  },
  {
    id: 3,
    name: "msi",
    categorie: "laptop",
    image: "/images/1.png",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, excepturi",
  },
  {
    id: 4,
    name: "msi",
    categorie: "laptop",
    image: "/images/1.png",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, excepturi",
  },
  {
    id: 5,
    name: "msi",
    categorie: "laptop",
    image: "/images/1.png",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, excepturi",
  },
  {
    id: 6,
    name: "msi",
    categorie: "laptop",
    image: "/images/1.png",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, excepturi",
  },
  {
    id: 7,
    name: "msi",
    categorie: "laptop",
    image: "/images/1.png",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, excepturi",
  },
];
const index = () => {
  return (
    <Box sx={{ marginTop: "4rem" }}>
      <Typography
        align="center"
        variant="h2"
        component="h1"
        sx={{ marginBottom: "3rem" }}
      >
        Our Products
      </Typography>
      <Grid container spacing={3}>
        {products.map((p) => (
          <Grid key={p.id} item xs={12} sm={6} md={4} lg={3}>
            <Product {...p} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default index;
