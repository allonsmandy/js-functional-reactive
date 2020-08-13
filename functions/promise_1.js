let me = 'mandy'
console.log(me)

// promise of something that will be executed and returned in the future
let myPromise = new Promise(function(resolve) {
    resolve(['Galadriel', 'Frodo', 'Sauron'])
})

myPromise
    .then(names => names[0])
    .then(firstName => firstName[0])
    .then(firstLetter => firstLetter.toLowerCase())
    .then(console.log) // g

console.log(typeof myPromise) // object