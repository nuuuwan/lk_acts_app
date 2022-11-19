import AbstractActEntity from "../../nonview/core/AbstractActEntity";
import ENTITY_TYPES from "../../nonview/core/ENTITY_TYPES";
import L2SubSection from "../../nonview/core/L2SubSection";

export default class L1Section extends AbstractActEntity {
  constructor(sectionNum, marginalNote, textLines, subSections) {
    super();
    this.sectionNum = sectionNum;
    this.marginalNote = marginalNote;
    this.textLines = textLines;
    this.subSections = subSections;
  }

  get subEntities() {
    return this.subSections;
  }

  get entityTypeName() {
    return ENTITY_TYPES.L1Section;
  }

  get num() {
    return this.sectionNum;
  }

  get numFormatted() {
    return this.num;
  }

  get supertitle() {
    return this.marginalNote;
  }

  static fromD(d) {
    return new L1Section(
      d.section_num,
      d.marginal_note,
      d.textlines,
      d.subsections
        ? d.subsections.map((dSubSection) => L2SubSection.fromD(dSubSection))
        : []
    );
  }
}
