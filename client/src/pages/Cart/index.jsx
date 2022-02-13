import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  TableContainer,
  Table,
  Typography,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Select,
  MenuItem,
  Card,
  List,
  ListItem,
} from "@mui/material";
import Button from "../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/actions/cartActions";
import { SimpleLink } from "../../styles";

const Index = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  return (
    <>
      {cartItems.length !== 0 ? (
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Image</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartItems.map((item) => (
                    <TableRow key={item._id}>
                      <TableCell>
                        <SimpleLink to={`/products/${item._id}`}>
                          <img
                            style={{ width: 60, height: 50 }}
                            src={item.image}
                            alt={item.name}
                          ></img>
                        </SimpleLink>
                      </TableCell>

                      <TableCell>
                        <SimpleLink to={`/products/${item._id}`}>
                          <Typography style={{ color: "black" }}>
                            {item.name}
                          </Typography>
                        </SimpleLink>
                      </TableCell>
                      <TableCell align="right">
                        <Select
                          value={item.quantity}
                          onChange={(e) =>
                            dispatch(addToCart(item._id, e.target.value))
                          }
                        >
                          {[...Array(item.inStock).keys()].map((x) => (
                            <MenuItem key={x + 1} value={x + 1}>
                              {x + 1}
                            </MenuItem>
                          ))}
                        </Select>
                      </TableCell>
                      <TableCell align="right">${item.price}</TableCell>
                      <TableCell align="right">
                        <Button
                          color="#fff"
                          value={"x"}
                          onclick={() => dispatch(removeFromCart(item._id))}
                        ></Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <List>
                <ListItem>
                  <Typography variant="h6">
                    Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{" "}
                    items) : $
                    {cartItems
                      .reduce((a, c) => a + c.quantity * c.price, 0)
                      .toFixed(2)}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Button
                    color="#fff"
                    onclick={() => navigate("/shipping")}
                    value={"Check Out"}
                  ></Button>
                </ListItem>
              </List>
            </Card>
          </Grid>
        </Grid>
      ) : (
        <>
          <Typography variant="h3" component="h1">
            Cart is Empty
          </Typography>
          <SimpleLink to="/shop/0">Go shopping now</SimpleLink>
        </>
      )}
    </>
  );
};

export default Index;
