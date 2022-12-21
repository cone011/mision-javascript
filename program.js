//Hello ES6
console.log("HELLO ES6");

//TEMPLATE STRING
console.log(`Hello, ${process.argv[2]}!
Your name lowercased is "${process.argv[2].toLowerCase()}".`);

//Arrow Function Part 1
var inputs = process.argv.slice(2);
var result = inputs
  .map((primerCaracter) => primerCaracter[0])
  .reduce(
    (caracterAcumulado, caracterActual) => caracterAcumulado + caracterActual
  );
console.log(`[${inputs}] becomes "${result}"`);

//ARROW FUNCTIONS AND THIS
var foot = {
  kick: function () {
    this.yelp = "Ouch!";
    setImmediate(() => {
      console.log(this.yelp);
    });
  },
};
foot.kick();

//DESTRUCTURING
let userArray = process.argv.slice(2);
let userObject = {
  username: userArray[1],
  email: userArray[2],
};
console.log(userObject);

//SPREAD
let number = process.argv.slice(2);
console.log(`The minimum of [${number}] is ${Math.min(...number)}`);

//REST
module.exports = function average(...args) {
  let totalSum = 0;
  args.forEach((item) => {
    totalSum += item;
  });
  return totalSum / args.length;
};

//DEFAULT ARGUMENTS, Part 1
module.exports = function midpoint() {
  const [value1, value2] = arguments;
  if (value1 === undefined && value2 === undefined) return 0.5;
  if (value1 === undefined && value2 !== undefined) return value2 / 2;
  if (value1 < 0) return 0;
  return (value1 + value2) / 2;
};

//DEFAULT ARGUMENTS, Part 2
module.exports = function makeImportant() {
  const [palabra, repeticion] = arguments;
  if (repeticion === undefined)
    return `${palabra}${"!".repeat(palabra.length)}`;
  return `${palabra}${"!".repeat(repeticion)}`;
};

//TAGGED TEMPLATE STRINGS
console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);
function html(pieces, ...values) {
  let valueReturn = pieces[0];
  for (let i = 0; i < values.length; ++i) {
    valueReturn += substitution(values[i]) + pieces[i + 1];
  }
  return valueReturn;
}

function substitution(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&apos;")
    .replace(/"/g, "&quot;");
}

//BONUS TWO-SUM
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
  return null;
};
