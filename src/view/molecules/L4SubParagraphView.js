import Box from "@mui/material/Box";

import LinesView from "../../view/molecules/LinesView";

const STYLE_BOX = {
  margin: 1,
};

const STYLE = {
  color: "darkgreen",
  fontSize: "60%",
  fontWeight: "normal",
};

export default function L4SubParagraphView({ paragraph }) {
  return (
    <Box sx={STYLE_BOX}>
      <LinesView lines={paragraph.textlines} sx={STYLE} />
    </Box>
  );
}