import AbstractActEntity from "../../nonview/core/AbstractActEntity";
import ENTITY_TYPES from "../../nonview/core/ENTITY_TYPES";
import L1Section from "../../nonview/core/L1Section";

export default class L0Schedule extends AbstractActEntity {
  constructor(scheduleNum, textLines, sections) {
    super();
    this.scheduleNum = scheduleNum;
    this.textLines = textLines;
    this.sections = sections;
  }

  get subEntities() {
    return this.sections;
  }

  get entityTypeName() {
    return ENTITY_TYPES.L0Schedule;
  }

  get num() {
    return this.scheduleNum;
  }

  get numFormatted() {
    return "SCHEDULE " + this.num;
  }

  get textLinesSmart() {
    return [this.numFormatted + " - " + this.textLinesOnly.join(" ")];
  }

  static fromD(d) {
    return new L0Schedule(
      d.schedule_num,
      d.textlines,
      d.sections ? d.sections.map((dSection) => L1Section.fromD(dSection)) : []
    );
  }
}
