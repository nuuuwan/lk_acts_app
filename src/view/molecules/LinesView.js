import { useSpeechSynthesis } from "react-speech-kit";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function LinesView({ lines, sx }) {
  const { speak } = useSpeechSynthesis();
  const onClick = function () {
    speak({ text: lines.join(" . ") });
  };
  return (
    <Box onClick={onClick}>
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
