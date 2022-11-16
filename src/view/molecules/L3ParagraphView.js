import Box from "@mui/material/Box";

import L4SubParagraphView from "../../view/molecules/L4SubParagraphView";
import LinesView from "../../view/molecules/LinesView";

const STYLE_BOX = {
  margin: 1,
};

const STYLE = {
  color: "darkgreen",
  fontSize: "70%",
  fontWeight: "normal",
};

export default function L3ParagraphView({ paragraph }) {
  return (
    <Box sx={STYLE_BOX}>
      <LinesView lines={paragraph.textlines} sx={STYLE} />
      {paragraph.subparagraphs
        ? paragraph.subparagraphs.map(function (subparagraph, iSubParagraph) {
            return (
              <L4SubParagraphView
                key={"subparagraph-" + iSubParagraph}
                subparagraph={subparagraph}
              />
            );
          })
        : null}
    </Box>
  );
}
