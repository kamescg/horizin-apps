/** @jsx jsx */
import { jsx } from "theme-ui";

import Blockies from "react-blockies";
export const Blockie = ({ seed, scale = 4, size = 10, sx, sxBlockie }) => {
  return (
    <Atom.Flex center column sx={{ ...sx, overflow: "hidden" }}>
      <Blockies
        seed={seed}
        size={size}
        scale={scale}
        className="identicon"
        sx={sxBlockie}
      />
    </Atom.Flex>
  );
};
