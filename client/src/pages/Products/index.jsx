import React from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import Product from "../../components/product";

const data = [
  {
    id: 1,
    name: "laptop",
    image: "/images/1.png",
  },
  {
    id: 2,
    name: "laptop",
    image: "/images/1.png",
  },
  {
    id: 3,
    name: "laptop",
    image: "/images/1.png",
  },
  {
    id: 4,
    name: "laptop",
    image: "/images/1.png",
  },
];
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
  const style = { width: "80%", margin: "auto" };
  const isDesktop = useMediaQuery("(min-width:600px)");
  return (
    <Grid container spacing={3}>
      <Grid item sm={3} sx={isDesktop || style}>
        <List component="nav">
          {data.map((c, i) => (
            <ListItem button divider>
              <ListItemText
                sx={{ textAlign: "center", textTransform: "capitalize" }}
                primary={c.name}
              />
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid container={true} item sm={9}>
        <Grid container spacing={3}>
          {products.map((p) => (
            <Grid key={p.id} item xs={12} md={6} lg={4}>
              <Product {...p} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default index;
