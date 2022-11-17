import Box from "@mui/material/Box";

import LineView from "../../view/molecules/LineView";

export default function LinesView({ lines, sx }) {
  return (
    <Box>
      {lines.map(function (line, iLine) {
        return (
          <LineView key={"line-" + iLine} variant="body1" sx={sx} line={line} />
        );
      })}
    </Box>
  );
}
