import React from "react";
import {
  Grid,
  useMediaQuery,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
} from "@mui/material";
import Button from "../Button";
import { ImgCont } from "./style";
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
const index = () => {
  const dataD = [data.slice(0, 2), data.slice(2)];
  return (
    <Grid container sx={{ marginTop: "1rem" }}>
      <Grid
        item
        md={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 6,
          py: 4,
          px: 2,
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" component="h1">
          Welcome To Our Store
        </Typography>
        <Typography sx={{ color: "#646262" }} variant="body2" component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quia
          aliquid labore expedita suscipit. Dolorum, nostrum iusto labore autem
          magni modi suscipit sed consectetur, iste commodi enim vitae quam
          accusantium?
        </Typography>
        <Button value={"All Collections"} />
      </Grid>
      <Grid container={true} item md={8}>
        {dataD.map((t, i) => (
          <Grid
            key={i}
            item
            xs={6}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            {t.map((c) => (
              <ImgCont key={c.id}>
                <Typography variant="h5" component="h2">
                  {c.name}
                </Typography>
                <img src={c.image} alt={c.name} />
              </ImgCont>
            ))}
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default index;
