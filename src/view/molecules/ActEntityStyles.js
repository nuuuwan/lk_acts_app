import ENTITY_TYPES from "../../nonview/core/ENTITY_TYPES";

export default class ActEntityStyles {
  static getFontSize(entity) {
    switch (entity.entityType) {
      case ENTITY_TYPES.L0Part:
      case ENTITY_TYPES.L0Schedule:
      case ENTITY_TYPES.L1Section:
        return "100%";
      case ENTITY_TYPES.L2SubSection:
        return "95%";
      case ENTITY_TYPES.L3Paragraph:
        return "90%";
      case ENTITY_TYPES.L4SubParagraph:
      default:
        return "85%";
    }
  }

  static getColor(entity) {
    switch (entity.entityType) {
      case ENTITY_TYPES.L0Part:
      case ENTITY_TYPES.L1Section:
        return "maroon";
      case ENTITY_TYPES.L0Schedule:
        return "orange";

      case ENTITY_TYPES.L2SubSection:
        return "orange";
      case ENTITY_TYPES.L3Paragraph:
        return "darkgreen";
      case ENTITY_TYPES.L4SubParagraph:
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
      entity.entityType !== ENTITY_TYPES.L0Part &&
      entity.entityType !== ENTITY_TYPES.L0Schedule
    ) {
      style.marginLeft = 2;
      style.marginTop = 1;
      style.marginBottom = 2;
    }

    if (entity.entityType === ENTITY_TYPES.L1Section) {
      style.borderRadius = "12px";
      style.background = "rgba(0,0,0,0.02)";
      style.padding = "6px";
    }

    return style;
  }
}
