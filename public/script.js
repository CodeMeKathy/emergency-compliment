var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

var body = document.body

// body.style.background

function makeRandom (min, max) {
   min = Math.ceil(min)
   max = Math.floor(max)
   return Math.floor(Math.random() * (max - min) + min)
}

function randomColor() {
  document.body.style.background = colors[makeRandom(0, 4)]
} 

randomColor()

var getQuote = document.body.appendChild(document.createElement('section'))

getQuote.innerHTML = compliments[makeRandom(0, 4)]