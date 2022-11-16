import LinesView from "../../view/molecules/LinesView";
export default function ScheduleView({ schedule }) {
  return <LinesView lines={schedule.textlines} variant="h6" />;
}
