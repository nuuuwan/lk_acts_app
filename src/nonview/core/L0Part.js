import AbstractActEntity from "../../nonview/core/AbstractActEntity";
import L1Section from "../../nonview/core/L1Section";

export default class L0Part extends AbstractActEntity {
  constructor(partNum, textLines, sections) {
    super();
    this.partNum = partNum;
    this.textLines = textLines;
    this.sections = sections;
  }

  get subEntities() {
    return this.sections;
  }

  get entityTypeName() {
    return "L0Part";
  }

  get num() {
    return this.partNum;
  }

  get numFormatted() {
    return "PART " + this.num;
  }

  static fromD(d) {
    return new L0Part(
      d.part_num,
      d.textlines,
      d.sections ? d.sections.map((dSection) => L1Section.fromD(dSection)) : []
    );
  }
}
