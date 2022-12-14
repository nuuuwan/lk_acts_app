export default class AbstractActEntity {
  get subEntities() {
    return [];
  }

  get entityType() {
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
    if (this.num === null) {
      return ["..."];
    }
    return [this.numFormatted + " " + this.textLinesOnly.join(" ")];
  }

  get subtitle() {
    return undefined;
  }

  get supertitle() {
    return undefined;
  }
}
