export default class ActEntityStyles {
  static getFontSize(entity) {
    switch (entity.entityTypeName) {
      case "L0Part":
      case "L0Schedule":
      case "L1Section":
        return "100%";
      case "L2SubSection":
        return "90%";
      case "L3Paragraph":
        return "80%";
      case "L4SubParagraph":
      default:
        return "70%";
    }
  }

  static getColor(entity) {
    switch (entity.entityTypeName) {
      case "L0Part":
      case "L0Schedule":
      case "L1Section":
        return "maroon";
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
    return {
      color: ActEntityStyles.getColor(entity),
      fontSize: ActEntityStyles.getFontSize(entity),
      margin: 1,
    };
  }
}
