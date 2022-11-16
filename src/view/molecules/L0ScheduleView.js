import Box from "@mui/material/Box";
import LinesView from "../../view/molecules/LinesView";
import L1SectionView from "../../view/molecules/L1SectionView";

const STYLE = {
  color: 'black',
  fontSize: '100%',
  fontWeight: "bold",
}

export default function L0ScheduleView({ schedule }) {
  return (
    <Box>
      <LinesView lines={schedule.textlines} sx={STYLE}/>
      {schedule.sections.map(
        function(section, iSection) {
          return <L1SectionView key={'section-' + iSection} section={section} />;
        }
      )}
    </Box>
  );
}
