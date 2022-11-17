import AbstractActEntity from "../../nonview/core/AbstractActEntity";
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
    return "L0Schedule";
  }

  static fromD(d) {
    return new L0Schedule(
      d.schedule_num,
      d.textlines,
      d.sections ? d.sections.map((dSection) => L1Section.fromD(dSection)) : []
    );
  }
}
