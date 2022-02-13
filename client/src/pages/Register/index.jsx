import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import {
  List,
  ListItem,
  Typography,
  TextField,
  Container,
  Button,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { signup } from "../../redux/actions/userActions";

const Index = () => {
  const dispatch = useDispatch();
  const { error, success, token } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (token) {
      return navigate("/");
    } else if (success) {
      return navigate("/login", { state: location.state });
    } else if (error) {
      alert(error);
    }
  }, [error, success]);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const register = (data) => {
    dispatch(signup(data));
  };
  return (
    <Container maxWidth="sm">
      <Typography align="center" component="h1" variant="h3">
        Register
      </Typography>
      <form onSubmit={handleSubmit(register)}>
        <List>
          <ListItem>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="name"
                  label="Name"
                  color="text"
                  error={Boolean(errors.name)}
                  helperText={errors.name ? "Name is required" : ""}
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="email"
                  label="Email"
                  color="text"
                  inputProps={{ type: "email" }}
                  error={Boolean(errors.email)}
                  helperText={
                    errors.email
                      ? errors.email.type === "pattern"
                        ? "Invalid email"
                        : "Email is required"
                      : ""
                  }
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
                  helperText={errors.password ? "Password is required" : ""}
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Button type="submit" color="secondary" variant="contained">
              Register
            </Button>
          </ListItem>
          <ListItem
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/login", { state: location.state })}
          >
            You have an account? &nbsp;
            <span style={{ color: "blue" }}>Login</span>
          </ListItem>
        </List>
      </form>
    </Container>
  );
};

export default Index;
