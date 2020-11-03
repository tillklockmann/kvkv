
class Generator {

    vowels = ["a", "e", "i", "o", "u", "ei", "au"]

    c1s = ["sch", "s", "m", "l", "w", "r", "g", "n", "p", "b", "d", "t", "z", "f", "st", "sp"]

    c2s = ["sch", "s", "m", "l", "w", "r", "g", "n", "p", "b", "d", "t", "z", "f"]

    omitC1s = []

    get randV() {
        return this.vowels[Math.floor(Math.random() * (this.vowels.length))]
    }

    get randC1() {
        return this.c1s[Math.floor(Math.random() * (this.c1s.length))]
    }

    get randC2() {
        return this.c2s[Math.floor(Math.random() * (this.c2s.length))]
    }

    set omitC1s(c) {
        this.omitC1s.push(c)
    }

    get omitC1s() {
        return this.omitC1s;
    }
}

export default Generator
