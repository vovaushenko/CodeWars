class Dictionary {
  constructor() {
    this.lookup = {};
  }

  newEntry(key, value) {
    this.lookup[key] = value;
  }

  look(key) {
    return this.lookup[key] ? this.lookup[key] : `Can't find entry for ${key}`;
  }
}
