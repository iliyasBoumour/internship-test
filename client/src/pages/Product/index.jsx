import {
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../redux/actions/productActions";
import Button from "../../components/Button";
import { ImgCont } from "./style";
import { addToCart } from "../../redux/actions/cartActions";

const Index = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading, error, product } = useSelector(
    (state) => state.currentProduct
  );
  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch]);
  const addProdToCart = () => {
    dispatch(addToCart(id, 1));
  };
  return (
    <Grid container spacing={2} sx={{ overflow: "hidden" }}>
      {loading ? (
        <h1>loading...</h1>
      ) : error ? (
        <p style={{ paddingTop: "2rem" }}>{error}</p>
      ) : (
        <>
          <Grid item md={7} lg={6}>
            <ImgCont>
              <img src={product.image} alt={product.name} />
            </ImgCont>
          </Grid>
          <Grid container item md={5} lg={6}>
            <Grid item sm={7} md={12} lg={7}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <Typography variant="h3" component="h1">
                  {product.name}
                </Typography>
                <Typography variant="h6" component="p">
                  {product.description}
                </Typography>
                <Typography sx={{ mb: 1 }} variant="h6" component="h1">
                  price: ${product.price}
                </Typography>
              </Box>
            </Grid>
            <Grid item sm={5} md={12} lg={5}>
              <Card sx={{ margin: "auto", width: "fit-content", p: 3 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    in stock : {product.inStock}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "center" }}>
                  <Button
                    disabled={product.inStock == 0}
                    onclick={addProdToCart}
                    value={"Add To Cart"}
                  />
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default Index;
