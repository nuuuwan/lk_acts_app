export default class AbstractActEntity {
  get subEntities() {
    return [];
  }

  get entityTypeName() {
    return "AbstractActEntity";
  }

  get textLinesSmart() {
    return this.textLines;
  }

  get num() {
    return undefined;
  }
}
