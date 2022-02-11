import { styled } from "@mui/system";
import { Box, Grid } from "@mui/material";
export const Header = styled("section")`
  height: calc(100vh - 64px - 1rem);
  padding-bottom: 1rem;
`;
export const ImgCont = styled(Box)`
  flex: 2;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-repeat: no-repeat;
  }
`;
export const TextCont = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(255, 255, 255, 0.8);
  height: 100%;
  z-index: 5;
`;
export const OneGrid = styled(Grid)`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  &::after {
    content: "";
    position: absolute;

    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgb(255, 255, 255);
    background: ${(props) =>
      props.right
        ? "linear-gradient( 180deg, rgba(100, 98, 98, 1) 0%, rgba(100, 98, 98, 0) 100%)"
        : "linear-gradient( 0deg, rgba(100, 98, 98, 1) 0%, rgba(100, 98, 98, 0) 100%)"};
  }
`;
