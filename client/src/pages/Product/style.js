import { styled } from "@mui/system";
import { Box } from "@mui/system";

export const ImgCont = styled(Box)`
  min-height: 70vh;
  overflow: hidden;
  img {
    height: 100%;
    object-fit: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
`;
