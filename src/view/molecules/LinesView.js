import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function LinesView({ lines, sx }) {
  return (
    <Box>
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
