import React, { useState } from "react";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Toolbar, Typography, Box, AppBar } from "@mui/material";
import { Burger, Menu, MyLink } from "./style";
import { SimpleLink } from "../../styles";
const items = [
  { to: "/", name: "Home" },
  { to: "/about", name: "About" },
  { to: "/products", name: "Shop" },
  { to: "/blog", name: "Blog" },
  { to: "/contact", name: "Contact" },
];
const Index = () => {
  const [isopen, setIsopen] = useState(false);
  return (
    <Box sx={{ flexGrow: 1, overflow: "hidden" }}>
      <AppBar position="fixed">
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
              <MyLink key={i} to={item.to}>
                <Typography variant="h6" conponent="p">
                  {item.name}
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
            <SimpleLink to="/login">
              <PersonOutlineIcon sx={{ cursor: "pointer" }} />
            </SimpleLink>
            <SimpleLink to="/cart">
              <WorkOutlineIcon sx={{ cursor: "pointer" }} />
            </SimpleLink>
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
