const STRING_REPLACE_LIST = [
  [" Of ", " of "],
  ["Election Presidential", "Presidential Election"],
];

export default class StringX {
  static toTitleCase(str) {
    if (!str) {
      return "";
    }

    if (str === str.toUpperCase()) {
      return str;
    }
    str = str.replaceAll("_", " ");
    str = str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
    for (let [before, after] of STRING_REPLACE_LIST) {
      str = str.replaceAll(before, after);
    }
    return str;
  }
}
