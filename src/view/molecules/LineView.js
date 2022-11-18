import { useSpeechSynthesis } from "react-speech-kit";

import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

const MIN_TEXT_FOR_SPEAKER = 30;

export default function LineView({ line, sx }) {
  const showSpeaker = line.length > MIN_TEXT_FOR_SPEAKER;
  const { speak } = useSpeechSynthesis();

  const onClick = function () {
    speak({ text: line });
  };

  const styleIcon = { color: sx.color, opacity: 0.2 };
  return (
    <Stack direction="row" sx={{ alignItems: "center" }}>
      <Typography variant="body1" sx={sx}>
        {line}
      </Typography>
      {showSpeaker ? (
        <IconButton onClick={onClick} size="small">
          <VolumeUpIcon sx={styleIcon} />
        </IconButton>
      ) : null}
    </Stack>
  );
}
