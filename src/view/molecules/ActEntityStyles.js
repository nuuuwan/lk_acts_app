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
    let style = {
      color: ActEntityStyles.getColor(entity),
      fontSize: ActEntityStyles.getFontSize(entity),
      marginLeft: 0.5,
      marginRight: 0.5,
      marginBottom: 0.5,
    };

    if (entity.entityTypeName === "L1Section") {
      style = {
        ...style,
        ...{
          borderRadius: "12px",
          background: "#f8f8f8",
          padding: 1,
        },
      };
    }
    return style;
  }
}
