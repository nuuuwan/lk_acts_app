import Box from "@mui/material/Box";
import LinesView from "../../view/molecules/LinesView";
import SectionView from "../../view/molecules/SectionView";

const STYLE = {
  color: 'black',
  fontSize: '100%',
  fontWeight: "bold",
}

export default function PartView({ part }) {
  return (
    <Box>
      <LinesView lines={part.textlines} sx={STYLE}/>
      {part.sections.map(
        function(section, iSection) {
          return <SectionView key={'section-' + iSection} section={section} />;
        }
      )}
    </Box>
  );
}
