import { styled } from "@mui/system";

export const Button = styled("button")`
  border-radius: 0px;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
  font-weight: bold;
  outline: none;
  width: fit-content;
  padding: 1rem 2rem;
  font-size: 0.9rem;
  background-color: ${(props) => props.bg_color || "#646262"};
  color: ${(props) => props.color || "#fff"};
  border: none;
  cursor: pointer;
  &:after {
    content: "";
    position: absolute;
    top: 0px;
    bottom: 0px;
    right: 0px;
    left: 0px;
    z-index: -1;
    border-radius: 0px;
    background: ${(props) => props.hb_color || "#fff"};
    transition: transform 0.3s ease;
    transform: scaleX(0);
    transform-origin: left;
  }
  &:hover::after {
    transform: scaleX(1);
  }
  &:hover {
    /* transform: scaleX(1); */

    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    color: ${(props) => props.h_color || "#646262"};
    /* font-weight: 900; */
  }
`;
