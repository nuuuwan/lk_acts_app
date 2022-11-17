import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const STYLE = {
  margin: 1,
};

export default function LinesView({ lines, sx }) {
  lines = [lines.join(' ')];
  return (
    <Box sx={STYLE}>
      {lines.map(function (line, iLine) {
        return (
          <Typography key={"line-" + iLine} variant="body1" sx={sx}>
            {line}
          </Typography>
        );
      })}
    </Box>
  );
}
