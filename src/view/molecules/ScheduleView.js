import Box from "@mui/material/Box";
import LinesView from "../../view/molecules/LinesView";
import SectionView from "../../view/molecules/SectionView";

const STYLE = {
  color: 'black',
  fontSize: '100%',
  fontWeight: "bold",
}

export default function ScheduleView({ schedule }) {
  return (
    <Box>
      <LinesView lines={schedule.textlines} sx={STYLE}/>
      {schedule.sections.map(
        function(section, iSection) {
          return <SectionView key={'section-' + iSection} section={section} />;
        }
      )}
    </Box>
  );
}
