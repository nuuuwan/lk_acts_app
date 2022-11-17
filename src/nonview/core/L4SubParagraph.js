import AbstractActEntity from "../../nonview/core/AbstractActEntity";

export default class L4SubParagraph extends AbstractActEntity {
  constructor(subParagraphNum, textLines) {
    super();
    this.subParagraphNum = subParagraphNum;
    this.textLines = textLines;
  }

  get entityTypeName() {
    return "L4SubParagraph";
  }

  get num() {
    return this.subParagraphNum;
  }

  static fromD(d) {
    return new L4SubParagraph(d.sub_paragraph_num, d.textlines);
  }
}
