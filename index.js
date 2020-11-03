import Generator from './src/Generator.js'
import Word from './src/Word.js'

let btn = document.querySelector('#js-get-new-word')
let output = document.querySelector('#js-word')
var word = new Word(new Generator)
btn.addEventListener('click', () => {
    output.innerHTML = word.cvcv()
})



