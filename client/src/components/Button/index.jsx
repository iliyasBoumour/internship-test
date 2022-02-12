import { Button } from "./style";

const index = ({ value, bg_color, onclick, color, h_color, hb_color }) => {
  return (
    <Button
      onClick={onclick}
      color={color}
      bg_color={bg_color}
      h_color={h_color}
      hb_color={hb_color}
    >
      {value}
    </Button>
  );
};

export default index;
