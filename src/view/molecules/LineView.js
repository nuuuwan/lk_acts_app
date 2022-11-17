import { useSpeechSynthesis } from "react-speech-kit";

import Typography from "@mui/material/Typography";

export default function LineView({ line, sx }) {
  const { speak } = useSpeechSynthesis();
  const onClick = function () {
    speak({ text: line });
  };
  return (
    <Typography variant="body1" sx={sx} onClick={onClick}>
      {line}
    </Typography>
  );
}
