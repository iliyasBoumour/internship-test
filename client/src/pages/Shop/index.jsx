import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import Product from "../../components/product";
import { useParams } from "react-router-dom";
import { getCategories } from "../../redux/actions/categoryActions";
import { getProducts } from "../../redux/actions/productActions";
import { SimpleLink } from "../../styles";
import Loading from "../../components/Loading";

const Index = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { categories, products } = useSelector((state) => state);
  React.useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  React.useEffect(() => {
    dispatch(getProducts(id));
  }, [dispatch, id]);

  const style = { width: "80%", margin: "auto" };
  const isDesktop = useMediaQuery("(min-width:600px)");
  return (
    <Grid container spacing={3}>
      <Grid item sm={3} sx={isDesktop ? {} : style}>
        <List component="nav">
          {categories.loading == true ? (
            <Loading />
          ) : categories.error ? (
            <Loading message={categories.error} />
          ) : (
            categories.categories.map((c) => (
              <SimpleLink key={c._id} to={`/shop/${c._id}`}>
                <ListItem
                  button
                  divider
                  sx={id == c._id ? { background: "#000", color: "#fff" } : {}}
                >
                  <ListItemText
                    sx={{ textAlign: "center", textTransform: "capitalize" }}
                    primary={c.name}
                  />
                </ListItem>
              </SimpleLink>
            ))
          )}
        </List>
      </Grid>
      <Grid container={true} item sm={9}>
        <Grid container spacing={3}>
          {products.loading == true ? (
            <Loading />
          ) : products.error ? (
            <Loading message={products.error} />
          ) : (
            products.products.map((p) => (
              <Grid key={p._id} item xs={12} md={6} lg={4}>
                <Product {...p} />
              </Grid>
            ))
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Index;
