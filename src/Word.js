
class Word {

    constructor(generator) {
        this.generator = generator
    }

    cvcv() {
        let c1 = this.generator.randC1 
        let c2 = this.generator.randC2 
        let v1 = this.generator.randV
        let v2 = this.generator.randV
        return c1 + v1 + c2 + v2
    }
}

export default Word