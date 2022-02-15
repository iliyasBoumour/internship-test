import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  List,
  ListItem,
  TextField,
  Button,
  Container,
  ListItemText,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { update, getCurrent } from "../../redux/actions/userActions";

const Index = () => {
  const dispatch = useDispatch();
  const { loading, error, token, user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      return navigate("/");
    }
    dispatch(getCurrent());
  }, [token, dispatch]);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const updateProfile = (data) => {
    dispatch(update(data));
  };
  return (
    <Grid container>
      <Grid item md={4}>
        <List component="nav" sx={{ maxWidth: "300px", margin: "auto" }}>
          <ListItem button divider sx={{ background: "#000", color: "#fff" }}>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button divider>
            <ListItemText primary="Orders" />
          </ListItem>
        </List>
      </Grid>
      <Grid item md={8}>
        <Container maxWidth="sm">
          <Typography variant="h3" component="h1" sx={{ p: 3 }}>
            Update profile
          </Typography>
          {loading ? (
            <h1>loading</h1>
          ) : (
            <form onSubmit={handleSubmit(updateProfile)}>
              <List>
                <ListItem>
                  <Controller
                    name="name"
                    control={control}
                    defaultValue={user?.name}
                    render={({ field }) => (
                      <TextField
                        variant="outlined"
                        fullWidth
                        id="name"
                        label="Name"
                        color="text"
                        error={Boolean(errors.name)}
                        {...field}
                      ></TextField>
                    )}
                  ></Controller>
                </ListItem>

                <ListItem>
                  <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: true,
                    }}
                    render={({ field }) => (
                      <TextField
                        variant="outlined"
                        fullWidth
                        id="password"
                        label="Password"
                        color="text"
                        inputProps={{ type: "password" }}
                        error={Boolean(errors.password)}
                        helperText={
                          errors.password ? "Password is required" : ""
                        }
                        {...field}
                      ></TextField>
                    )}
                  ></Controller>
                </ListItem>
                <ListItem>
                  <Controller
                    name="newpassword"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        variant="outlined"
                        fullWidth
                        id="newpassword"
                        label="Password"
                        color="text"
                        inputProps={{ type: "password" }}
                        error={Boolean(errors.newpassword)}
                        {...field}
                      ></TextField>
                    )}
                  ></Controller>
                </ListItem>
                <ListItem>
                  <Button
                    fullWidth
                    type="submit"
                    color="secondary"
                    variant="contained"
                  >
                    Update
                  </Button>
                </ListItem>
              </List>
            </form>
          )}
        </Container>
      </Grid>
    </Grid>
  );
};

export default Index;
