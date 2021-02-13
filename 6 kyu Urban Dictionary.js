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
