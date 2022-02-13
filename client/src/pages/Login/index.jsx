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
import { login } from "../../redux/actions/userActions";

const Index = () => {
  const dispatch = useDispatch();
  const { error, token } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (token) {
      const redirect = location.state?.redirect || "/";
      return navigate(redirect);
    }
    if (error) {
      alert(error);
    }
  }, [token, error]);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const signin = (data) => {
    dispatch(login(data));
  };
  return (
    <Container maxWidth="sm">
      <Typography align="center" component="h1" variant="h3">
        Login
      </Typography>
      <form onSubmit={handleSubmit(signin)}>
        <List>
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
              Login
            </Button>
          </ListItem>
          <ListItem
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/register", { state: location.state })}
          >
            Don't have an account? &nbsp;
            <span style={{ color: "blue" }}>Register</span>
          </ListItem>
        </List>
      </form>
    </Container>
  );
};

export default Index;
