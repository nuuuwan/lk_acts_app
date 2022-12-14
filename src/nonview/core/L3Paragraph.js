import AbstractActEntity from "../../nonview/core/AbstractActEntity";
import ENTITY_TYPES from "../../nonview/core/ENTITY_TYPES";
import L4SubParagraph from "../../nonview/core/L4SubParagraph";

export default class L3Paragraph extends AbstractActEntity {
  constructor(paragraphNum, textLines, subParagraphs) {
    super();
    this.paragraphNum = paragraphNum;
    this.textLines = textLines;
    this.subParagraphs = subParagraphs;
  }

  get subEntities() {
    return this.subParagraphs;
  }

  get entityType() {
    return ENTITY_TYPES.L3Paragraph;
  }

  get num() {
    return this.paragraphNum;
  }

  static fromD(d) {
    return new L3Paragraph(
      d.paragraph_num,
      d.textlines,
      d.sub_paragraphs
        ? d.sub_paragraphs.map((dSubParagraph) =>
            L4SubParagraph.fromD(dSubParagraph)
          )
        : []
    );
  }
}
