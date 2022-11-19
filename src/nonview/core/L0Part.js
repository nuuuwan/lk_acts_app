import AbstractActEntity from "../../nonview/core/AbstractActEntity";
import ENTITY_TYPES from "../../nonview/core/ENTITY_TYPES";
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

  get entityType() {
    return ENTITY_TYPES.L0Part;
  }

  get num() {
    return this.partNum;
  }

  get numFormatted() {
    return "PART " + this.num;
  }

  get textLinesSmart() {
    if (!this.num) {
      return ["Introduction"];
    }
    return [this.numFormatted + " - " + this.textLinesOnly.join(" ")];
  }

  get subtitle() {
    const firstChild = this.subEntities[0];
    const lastChild = this.subEntities[this.subEntities.length - 1];
    const sectionStr =
      firstChild !== lastChild
        ? "Sections " + firstChild.sectionNum + " to " + lastChild.sectionNum
        : "Section " + firstChild.sectionNum;
    return sectionStr;
  }

  static fromD(d) {
    return new L0Part(
      d.part_num,
      d.textlines,
      d.sections ? d.sections.map((dSection) => L1Section.fromD(dSection)) : []
    );
  }
}
