export default class AbstractActEntity {
  get subEntities() {
    return [];
  }

  get entityTypeName() {
    return "AbstractActEntity";
  }

  get num() {
    return "";
  }

  get numFormatted() {
    return "(" + this.num + ")";
  }

  get textLinesOnly() {
    return [this.textLines.join(" ").replace(this.numFormatted, "")];
  }

  get textLinesSmart() {
    if (this.num === "dummy") {
      return [];
    }
    if (!this.num) {
      if (this.entityTypeName === "L0Part") {
        return ["Introduction"];
      }
      return ["..."];
    }
    return [this.numFormatted + " " + this.textLinesOnly.join(" ")];
  }
}
