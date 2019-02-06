import { readFileSync, writeFileSync, existsSync } from "fs";
/**
 * @description Provides disk storage support
 * @class Storable
 */
export class Storable {
  constructor(storage = false) {
    this.storage = storage;
  }
  getState() {
    return {};
  }
  runsInBrowser() {
    return undefined !== window;
  }
  hasStorage(mustExist = false) {
    return (
      !this.runsInBrowser() &&
      this.storage &&
      (!mustExist || existsSync(this.storage))
    );
  }
  loadFromStorage(defaultState) {
    if (this.hasStorage(true)) {
      return JSON.parse(readFileSync(this.storage));
    }
    return defaultState;
  }
  saveToStorage() {
    if (this.hasStorage()) {
      writeFileSync(this.storage, JSON.stringify(this.getState()));
    }
  }
}
