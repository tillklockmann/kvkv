
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

var spanK1 = document.querySelector('#k1')
var spanK2 = document.querySelector('#k2')
var spanV1 = document.querySelector('#v1')
var spanV2 = document.querySelector('#v2')
var dash = document.querySelector('#dash')
var btn = document.querySelector('#btn-container>a')
var spinner = document.querySelector('#btn-container>a>#span-img')
var word = document.querySelector('#word')
var wordContainer = document.querySelector('#word-container')
// word.classList.toggle('tkm-slide-in')

function generateWord ()
{
  spanK1.innerHTML = generator.consonant1
  spanK2.innerHTML = generator.consonant2
  spanV1.innerHTML = generator.vowel
  spanV2.innerHTML = generator.vowel
  dash.innerHTML = '-'
  spinner.classList.toggle('tkm-spin')
  wordContainer.style.height = 'auto'
}


var generateWordAnimation = function()
{
  wordContainer.style.height = wordContainer.clientHeight + 'px'

  spanK1.innerHTML = ''
  spanK2.innerHTML = ''
  spanV1.innerHTML = ''
  spanV2.innerHTML = ''
  dash.innerHTML = ''

  // word.classList.toggle('tkm-slide-in')
  spinner.classList.toggle('tkm-spin')
  setTimeout(generateWord,500,toggleAnimation)

}
 var toggleAnimation = function ()
 {
   // word.classList.toggle('tkm-slide-in')
 }

btn.addEventListener('click', generateWordAnimation)
