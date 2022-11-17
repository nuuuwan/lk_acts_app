import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const STYLE = {
  margin: 1,
};

export default function LinesView({ lines, sx }) {
  let line = lines.join(" ");
  if (!line) {
    line = '...';
  }
  lines = [line];
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
