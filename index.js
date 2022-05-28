// Number 2 //
const nameArr = ['Mohammed', 'Zainab', 'Aishat', 'Memunat', 'Rahmat'];
console.log(nameArr[0]);
console.log(nameArr[1]);
console.log(nameArr[2]);
console.log(nameArr[3]);
console.log(nameArr[4]);

// Number 3 //
const info = {
  'First name': ['Zara', 'Ope', 'Jomi', 'Deola', 'Lola'],
  'Last name': ['Oyede', 'Akinola', 'Aina', 'Ogunola', 'Abass'],
  'Best movie': ['Titanic', 'Sophia', 'Spongebob', 'Thunderman', 'Barbie'],
  'Best food': ['Rice', 'Beans', 'Yam', 'Bread', 'salad'],
  'Complexion': ['Dark', 'Chocolate', 'Fair', 'Light', 'Burnt-dark'],
  'Birth month': ['January', 'December', 'March', 'July', 'October'],
  'State': ['Oyo', 'Osun', 'Ogun', 'Kwara', 'Abia'],
  'Group name': 'Supermen'
};
console.log(info['Best movie'][3]);

// Number 4 //
const noun = 'dog';
const verb = 'love';
const adjective = 'huge';
const firstSentence = 'I ' + verb + ' ' + adjective + ' ' + noun + '.';
const secondSentence = 'My ' + noun + ' ' + 'is ' + adjective + '.';
const thirdSentence = 'I ' + verb + ' ' + 'to ' + 'play ' + 'with ' + noun + '.';
const fourthSentence = 'I ' + 'bought ' + 'a ' + adjective + ' ' + noun + '.';
const fifthSentence = 'Gosh ' + 'it\'s ' + 'hard ' + 'forming ' + 'sentences ' + 'with ' + noun + ' ' + 'and ' + verb + '.';
console.log(firstSentence);
console.log(secondSentence);
console.log(thirdSentence);
console.log(fourthSentence);
console.log(fifthSentence);

// Number 5 //
function remainder(a, b) {
  const modulo = a % b;
  console.log(modulo);
}
remainder(11, 3);

// Number 6 //
const quadratic = (a, b, c) => {
  const first = Math.pow(b, 2);
  const second = 4 * a * c;
  const third = first - second;
  const fourth = Math.sqrt(third);
  const fifth = 2 * a;
  const sixth = -b + fourth;
  const seventh = sixth / fifth;
  const eighth = -b - fourth;
  const ninth = eighth / fifth;
  console.log(seventh);
  console.log(ninth);
}
quadratic(4, -11, -21);

// Number 7 //
const myNoun = 'dog';
const myAdjective = 'big';
const myVerb = 'ran';
const myAdverb = 'quickly';
const wordBlanks = 'The ' + myAdjective + ' ' + myNoun + ' ' + myVerb + ' ' + myAdverb + '.';
console.log(wordBlanks);

//Number 8 //
const area = radius => {
  const pi = 3.142;
  const radSquare = radius * radius;
  console.log(pi * radSquare);
}
area(9);

//Number 9 //
const si = (p, r, t) => {
  const multiplication = p * r * t;
  console.log(multiplication / 100);
}
si(8200, 17.5, 2.5);

//Number 10 //
console.log(10 % 4);

//Number 11 //
function meritBmi(mass, height) {
  const square = height * height;
  console.log(mass / square);
}
function nutjobBmi(mass, height) {
  const square = height * height;
  console.log(mass / square);
}
const meritHigherBmi = (meritBmi, nutjobBmi) => {
  if(meritBmi > nutjobBmi) {
  return true;
} else {
  return false;
}
}

meritBmi(95, 1.88);
nutjobBmi(85, 1.76);
