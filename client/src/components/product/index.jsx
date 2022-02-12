import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { SimpleLink } from "../../styles";

export default function index({ id, name, image, description }) {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 440, margin: "auto" }}>
      <CardActionArea
        onClick={() => {
          navigate(`/products/${id}`);
        }}
      >
        <CardMedia component="img" height="200" image={image} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="text">
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
}
