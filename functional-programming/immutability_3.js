const person = { 
  name: 'Mandy',
  height: 1.66,
  city: 'Taiba',
  state: 'Ceará'
}

/***  assignment by reference ***/
const newPerson = person
newPerson.name = 'Amanda'
console.log(person)  // { name: 'Amanda', height: 1.66, city: 'Taiba', state: 'Ceará' }
// the two constants point to the same changeable object in memory

/*** pass by reference (impure function!) ***/
function changePerson(person) {
  const newPerson = { ...person } // made a clone only at the first level of the attributes
  person.name = 'Galadriel'
  person.country = 'Arda'

  return newPerson
}

const personNotChanged = changePerson(person)
console.log(person) // { name: 'Galadriel', height: 1.66, city: 'Taiba', state: 'Ceará', country: 'Arda' }
console.log(personNotChanged) // { name: 'Amanda', height: 1.66, city: 'Taiba', state: 'Ceará' }

/*** assignment by value ***/
let a = 3
let b = a // copy!

a++
b--
console.log(a, b) // 4, 2


// best pratice: object.freeze