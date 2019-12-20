
var generator = {
  v: ["a","e","i","o","u","ei","au"],
  k1: ["sch","s","m","l","w","r","g","n","p","b","d","t","z","f","st","sp"],
  k2: ["sch","s","m","l","w","r","g","n","p","b","d","t","z","f"],
  omitK1: [],
  get vowel() {
    return this.v[Math.floor(Math.random() * (this.v.length))]
  },
  get consonant1() {
    return this.k1[Math.floor(Math.random() * (this.k1.length))]
  },
  get consonant2() {
    return this.k2[Math.floor(Math.random() * (this.k2.length))]
  },
  set omitConsonant1(k) {
    this.omitK1.push(k)
  },
  get omitConsonant1() {
    return this.omitK1;
  }
}

export {generator}
