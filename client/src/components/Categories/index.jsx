import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import Button from "../Button";
import { useSelector } from "react-redux";
import { ImgCont } from "./style";
import Loading from "../Loading";
import { SimpleLink } from "../../styles";

const Index = () => {
  const { loading, error, categories } = useSelector(
    (state) => state.categories
  );
  const navigate = useNavigate();

  const dataD = [categories.slice(0, 2), categories.slice(2)];
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

        <Button
          onclick={() => {
            navigate(`/shop/0`);
          }}
          value={"All Collections"}
        />
      </Grid>
      {loading ? (
        <Loading />
      ) : error ? (
        <Loading message={error} />
      ) : (
        <Grid container={true} item md={8}>
          {dataD.map((t, i) => (
            <Grid
              key={i}
              item
              xs={6}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              {t.map((c) => (
                <SimpleLink key={c._id} to={`/shop/${c._id}`}>
                  <ImgCont>
                    <Typography variant="h5" component="h2">
                      {c.name}
                    </Typography>
                    <img src={c.image} alt={c.name} />
                  </ImgCont>
                </SimpleLink>
              ))}
            </Grid>
          ))}
        </Grid>
      )}
    </Grid>
  );
};

export default Index;
