import React, { useState } from "react";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Toolbar, Typography, Link, Box, AppBar } from "@mui/material";
import { Burger, Menu } from "./style";
// const MyAppBar = styled(AppBar)
// (({ theme }) => {

//   return {
//     backgroundColor:'aqua',
//     padding: theme.spacing(1),
//   };
// });

const Index = () => {
  const [isopen, setIsopen] = useState(false);
  return (
    <Box sx={{ flexGrow: 1, overflow: "hidden" }}>
      <AppBar position="static">
        <Toolbar sx={{ position: "initial", gap: "2rem" }}>
          <Typography
            variant="h5"
            component="h1"
            sx={{ flexGrow: 1, fontWeight: "bold" }}
          >
            Marque
          </Typography>
          <Menu open={isopen}>
            <Typography variant="h6" conponent="p">
              Home
            </Typography>
            <Typography variant="h6" conponent="p">
              About
            </Typography>
            <Typography variant="h6" conponent="p">
              Shop
            </Typography>
            <Typography variant="h6" conponent="p">
              Blog
            </Typography>
            <Typography variant="h6" conponent="h3">
              Contact
            </Typography>
          </Menu>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "end",
              gap: "3vw",
              alignItems: "center",
            }}
          >
            <PersonOutlineIcon />
            <WorkOutlineIcon />
            <Burger open={isopen} onClick={() => setIsopen(!isopen)}>
              <div></div>
            </Burger>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Index;
