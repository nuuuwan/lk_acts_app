import Box from "@mui/material/Box";
import LinesView from "../../view/molecules/LinesView";
import SubParagraphView from "../../view/molecules/SubParagraphView";

const STYLE_BOX = {
  margin: 1,
}

const STYLE = {
  color: 'darkgreen',
  fontSize: '70%',
  fontWeight: "normal",
}

export default function ParagraphView({ paragraph }) {
  return (
    <Box sx={STYLE_BOX}>
      <LinesView lines={paragraph.textlines} sx={STYLE} />
      {paragraph.subparagraphs ? paragraph.subparagraphs.map(
        function(subparagraph, iSubParagraph) {
          return <SubParagraphView key={'subparagraph-' + iSubParagraph} subparagraph={subparagraph} />;
        }
      ) : null}
    </Box>
  );
}
