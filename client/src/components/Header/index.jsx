import { Header, ImgCont, TextCont, OneGrid } from "./style";
import { Grid, useMediaQuery, Typography } from "@mui/material";

const index = () => {
  const isDesktop = useMediaQuery("(min-width:900px)");
  return (
    <Header>
      <Grid container sx={{ height: "100%" }}>
        <OneGrid item md={8}>
          <ImgCont>
            <img src="/images/1.png" alt="1" />
          </ImgCont>
          <TextCont sx={{ flex: 1, px: 1 }}>
            <Typography align="center" variant="h4" component="h2">
              The New Way To Display Product by iliyas
            </Typography>
          </TextCont>
        </OneGrid>
        {isDesktop && (
          <OneGrid item right xs={4}>
            <TextCont sx={{ flex: 2, padding: "1rem", px: 3 }}>
              <Typography variant="h4" component="h2">
                Déjà plusieurs millions de clients ont rejoint IB shop à
                volonté.
              </Typography>
            </TextCont>
            <ImgCont sx={{ flex: 1.3 }}>
              <img src="/images/2.png" alt="2" />
            </ImgCont>
          </OneGrid>
        )}
      </Grid>
    </Header>
  );
};

export default index;
