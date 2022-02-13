import { styled } from "@mui/system";
import { Link } from "react-router-dom";

export const SimpleLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.color || "inherit"}; ;
`;
