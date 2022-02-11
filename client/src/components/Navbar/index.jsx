import React, { useState } from "react";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Toolbar, Typography, Box, AppBar, IconButton } from "@mui/material";
import { Burger, Menu, MyLink } from "./style";
const items = ["Home", "About", "Shop", "Blog", "Contact"];
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
            {items.map((item, i) => (
              <MyLink key={i}>
                <Typography variant="h6" conponent="p">
                  {item}
                </Typography>
              </MyLink>
            ))}
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
            <PersonOutlineIcon sx={{ cursor: "pointer" }} />
            <WorkOutlineIcon sx={{ cursor: "pointer" }} />
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
