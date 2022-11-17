import AbstractActEntity from "../../nonview/core/AbstractActEntity";
import L4SubParagraph from "../../nonview/core/L4SubParagraph";

export default class L3Paragraph extends AbstractActEntity {
  constructor(paragraphNum, textLines, subParagraphs) {
    super();
    this.paragraphNum = paragraphNum;
    this.textLines = textLines;
    this.subParagraphs = subParagraphs;
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
