import {
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import Button from "../../components/Button";
import { ImgCont } from "./style";

const product = {
  id: 1,
  name: "msi",
  image: "/images/1.png",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae fugit cum sunt magnam nisi, quidem vel sed accusamus placeat alias. Asperiores optio, esse eaque excepturi illo eveniet repudiandae voluptas sed.",
  inStock: 10,
  price: 12.99,
};

const index = () => {
  return (
    <Grid container spacing={2} sx={{ overflow: "hidden" }}>
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
              <Button value={"Add To Cart"} />
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default index;
