import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Toolbar,
  Typography,
  Box,
  AppBar,
  Badge,
  Button,
  MenuItem,
  Menu as MuiMenu,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/actions/userActions";
import { Burger, Menu, MyLink } from "./style";
import { parseJwt } from "../../utils/parseJwt";
import { SimpleLink } from "../../styles";
const items = [
  { to: "/", name: "Home" },
  { to: "/about", name: "About" },
  { to: "/shop/0", name: "Shop" },
  { to: "/blog", name: "Blog" },
  { to: "/contact", name: "Contact" },
];
const Index = () => {
  const [isopen, setIsopen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { cart, user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { cartItems } = cart;
  const { token } = user;
  const currentUser = parseJwt(token);
  const navigate = useNavigate();
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const signOut = () => {
    dispatch(logout());
    setAnchorEl(null);
    return navigate("/");
  };
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
            {currentUser ? (
              <div>
                <Button
                  id="basic-button"
                  color="text"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  endIcon={<KeyboardArrowDownIcon />}
                >
                  {currentUser.name}
                </Button>
                <MuiMenu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={signOut}>Logout</MenuItem>
                </MuiMenu>
              </div>
            ) : (
              <SimpleLink to="/login">
                <PersonOutlineIcon sx={{ cursor: "pointer" }} />
              </SimpleLink>
            )}
            <SimpleLink to="/cart">
              <Badge badgeContent={cartItems.length} color="secondary">
                <WorkOutlineIcon sx={{ cursor: "pointer" }} />
              </Badge>
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
