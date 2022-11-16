import WWW from "../../nonview/base/WWW";

const URL_BASE = "https://raw.githubusercontent.com/nuuuwan/lk_acts/main/data";
export default class Act {
  constructor(
    year,
    num,
    name,
    url,
    shortTitle,
    longTitleLines,
    presentedByLines,
    priceLKR,
    postageLKR,
    datePublished,
    preambleLines,
    parts,
    schedules
  ) {
    this.year = year;
    this.num = num;
    this.name = name;
    this.url = url;
    this.shortTitle = shortTitle;
    this.longTitleLines = longTitleLines;
    this.presentedByLines = presentedByLines;
    this.priceLKR = priceLKR;
    this.postageLKR = postageLKR;
    this.datePublished = datePublished;
    this.preambleLines = preambleLines;
    this.parts = parts;
    this.schedules = schedules;
  }

  static getJSONFileName(year, num, name) {
    return `${year}-${num}-${name}/data.json`;
  }

  static getURL(year, num, name) {
    return URL_BASE + "/" + Act.getJSONFileName(year, num, name);
  }

  static async load(year, num, name) {
    const d = await WWW.json(Act.getURL(year, num, name));
    return new Act(
      d.year,
      d.num,
      d.name,
      d.url,
      d.short_title,
      d.long_title_lines,
      d.presented_by_lines,
      d.price_lkr,
      d.postage_lkr,
      d.date_published,
      d.preamble_lines,
      d.parts,
      d.schedules
    );
  }
}
