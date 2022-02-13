import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import Product from "../product";
const Index = () => {
  const { loading, error, products } = useSelector((state) => state.products);
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
        {loading ? (
          <h1>loading...</h1>
        ) : error ? (
          <p>{error}</p>
        ) : (
          products.map((p) => (
            <Grid key={p._id} item xs={12} sm={6} md={4} lg={3}>
              <Product {...p} />
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default Index;
