import Box from "@mui/material/Box";
import LinesView from "../../view/molecules/LinesView";
import L2SubSectionView from "../../view/molecules/L2SubSectionView";

const STYLE_BOX = {
  margin: 1,
}

const STYLE = {
  color: 'maroon',
  fontSize: '90%',
  fontWeight: "normal",
}

export default function L1SectionView({ section }) {
  return (
    <Box sx={STYLE_BOX}>
      <LinesView lines={section.textlines} sx={STYLE} />
      {section.subsections.map(
        function(subsection, iSubSection) {
          return <L2SubSectionView key={'subsection-' + iSubSection} subsection={subsection} />;
        }
      )}
    </Box>
  );
}
