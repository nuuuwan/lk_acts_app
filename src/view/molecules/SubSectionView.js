import Box from "@mui/material/Box";
import LinesView from "../../view/molecules/LinesView";
import ParagraphView from "../../view/molecules/ParagraphView";

const STYLE_BOX = {
  margin: 1,
}

const STYLE = {
  color: 'maroon',
  fontSize: '80%',
  fontWeight: "normal",
}

export default function SubSectionView({ subsection }) {
  return (
    <Box sx={STYLE_BOX}>
      <LinesView lines={subsection.textlines} sx={STYLE} />
      {subsection.paragraphs ? subsection.paragraphs.map(
        function(paragraph, iParagraph) {
          return <ParagraphView key={'paragraph-' + iParagraph} paragraph={paragraph} />;
        }
      ) : null}
    </Box>
  );
}
