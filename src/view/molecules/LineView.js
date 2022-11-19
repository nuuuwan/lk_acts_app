import React, { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const MIN_TEXT_FOR_SPEAKER = 30;

export default function LineView({ line, sx }) {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const showSpeaker = line.length > MIN_TEXT_FOR_SPEAKER;
  const { speak, cancel } = useSpeechSynthesis();

  const onClick = function (event) {
    event.stopPropagation();
    if (isSpeaking) {
      setIsSpeaking(false);
      cancel();
    } else {
      setIsSpeaking(true);
      speak({ text: line });
    }
  };

  const styleIcon = { color: sx.color, opacity: 0.2 };
  return (
    <Stack direction="row" sx={{ alignItems: "center" }}>
      <Typography variant="body1" sx={sx}>
        {line}
      </Typography>
      {showSpeaker ? (
        <IconButton onClick={onClick} size="small">
          {isSpeaking ? (
            <PauseIcon sx={styleIcon} />
          ) : (
            <PlayArrowIcon sx={styleIcon} />
          )}
        </IconButton>
      ) : null}
    </Stack>
  );
}
