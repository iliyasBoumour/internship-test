import { styled } from "@mui/system";
import { Box, Grid } from "@mui/material";
export const ImgCont = styled(Box)`
  flex: 1;
  height: 100%;
  overflow: hidden;
  position: relative;
  transition: all 0.5s ease;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-repeat: no-repeat;
    transition: all 0.5s ease;
  }
  h2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    text-transform: capitalize;
    transition: all 0.5s ease;
    z-index: 2;
    color: rgba(255, 255, 255, 0.7);
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: all 0.5s ease;
  }
  &:hover {
    &::after {
      background-color: rgba(0, 0, 0, 0.7);
    }
    h2 {
      opacity: 1;
    }
    img {
      transform: scale(1.2);
    }
  }
`;
