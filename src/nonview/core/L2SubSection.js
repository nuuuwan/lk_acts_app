import AbstractActEntity from "../../nonview/core/AbstractActEntity";
import ENTITY_TYPES from "../../nonview/core/ENTITY_TYPES";
import L3Paragraph from "../../nonview/core/L3Paragraph";

export default class L2SubSection extends AbstractActEntity {
  constructor(subSectionNum, textLines, paragraphs) {
    super();
    this.subSectionNum = subSectionNum;
    this.textLines = textLines;
    this.paragraphs = paragraphs;
  }

  get subEntities() {
    return this.paragraphs;
  }

  get entityType() {
    return ENTITY_TYPES.L2SubSection;
  }

  get num() {
    return this.subSectionNum;
  }

  static fromD(d) {
    return new L2SubSection(
      d.subsection_num,
      d.textlines,
      d.paragraphs
        ? d.paragraphs.map((dParagraph) => L3Paragraph.fromD(dParagraph))
        : []
    );
  }
}
