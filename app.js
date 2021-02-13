class WordDictionary {
  constructor() {
    this.words = [];
  }
  addWord(word) {
    this.words.push(word);
  }

  search(word) {
    if (!word.includes('.')) return this.words.includes(word);
    let reg = new RegExp('^' + word + '$');
    return this.words.find((v) => reg.test(v)) !== undefined;
  }
}

let dict = new WordDictionary();
dict.addWord('bad');
dict.addWord('dad');
dict.addWord('mad');

console.log(dict);
console.log(dict.search('mad'));
console.log(dict.search('.ad'));
