import Box from "@mui/material/Box";

import L3ParagraphView from "../../view/molecules/L3ParagraphView";
import LinesView from "../../view/molecules/LinesView";

const STYLE_BOX = {
  margin: 1,
};

const STYLE = {
  color: "maroon",
  fontSize: "80%",
  fontWeight: "normal",
};

export default function L2SubSectionView({ subSection }) {
  return (
    <Box sx={STYLE_BOX}>
      <LinesView lines={subSection.textLines} sx={STYLE} />
      {subSection.paragraphs
        ? subSection.paragraphs.map(function (paragraph, iParagraph) {
            return (
              <L3ParagraphView
                key={"paragraph-" + iParagraph}
                paragraph={paragraph}
              />
            );
          })
        : null}
    </Box>
  );
}
