import AbstractActEntity from "../../nonview/core/AbstractActEntity";
import ENTITY_TYPES from "../../nonview/core/ENTITY_TYPES";

export default class L4SubParagraph extends AbstractActEntity {
  constructor(subParagraphNum, textLines) {
    super();
    this.subParagraphNum = subParagraphNum;
    this.textLines = textLines;
  }

  get entityTypeName() {
    return ENTITY_TYPES.L4SubParagraph;
  }

  get num() {
    return this.subParagraphNum;
  }

  static fromD(d) {
    return new L4SubParagraph(d.sub_paragraph_num, d.textlines);
  }
}
