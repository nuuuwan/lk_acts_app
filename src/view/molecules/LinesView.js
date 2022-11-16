import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const STYLE = {
  margin: 1,
};

export default function LinesView({ lines, variant }) {
  return (
    <Box sx={STYLE}>
      {lines.map(function (line, iLine) {
        return (
          <Typography key={"line-" + iLine} variant={variant}>
            {line}
          </Typography>
        );
      })}
    </Box>
  );
}
