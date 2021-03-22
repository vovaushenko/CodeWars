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

let d = new Dictionary();

d.newEntry('Apple', 'A fruit that grows on trees');

console.log(d.look('Tree'));
