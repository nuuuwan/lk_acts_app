export default class ActEntityStyles {
  static getFontSize(entity) {
    switch (entity.entityTypeName) {
      case "L0Part":
      case "L0Schedule":
      case "L1Section":
        return "100%";
      case "L2SubSection":
        return "95%";
      case "L3Paragraph":
        return "90%";
      case "L4SubParagraph":
      default:
        return "85%";
    }
  }

  static getColor(entity) {
    switch (entity.entityTypeName) {
      case "L0Part":
      case "L1Section":
        return "maroon";
      case "L0Schedule":
        return "orange";

      case "L2SubSection":
        return "orange";
      case "L3Paragraph":
        return "darkgreen";
      case "L4SubParagraph":
      default:
        return "black";
    }
  }

  static getStyle(entity) {
    let style = {
      color: ActEntityStyles.getColor(entity),
      fontSize: ActEntityStyles.getFontSize(entity),
      margin: 0,
    };

    if (
      entity.entityTypeName !== "L0Part" &&
      entity.entityTypeName !== "L0Schedule"
    ) {
      style.marginLeft = 2;
      style.marginBottom = 2;
    }

    return style;
  }
}
