// Different quotes
const single = 'Hello, world!';
const double = "Hello, world!";
const literal = `Hello world!`;

// Printing w/ variables: concatenation (first) vs templating (second)
const result = 5;
console.log("The result is " + result + " for this operation.");
console.log(`The result is ${result} for this operation.`);

// Similarities with arrays
console.log(`${single[0]}${double[1]}${literal[2]}`);
console.log(single.length);

// Useful methods
console.log(single.at(3));
console.log(single.charAt(3));

console.log(single.toUpperCase());
console.log(double.toLowerCase());

console.log(single.concat("!!!dhsfgjisdfjksdhf"));

console.log(single.startsWith("blue"));
console.log(double.endsWith("world!"));

console.log(literal.slice(1, 10));

console.log(double.split(" ").join(" "));