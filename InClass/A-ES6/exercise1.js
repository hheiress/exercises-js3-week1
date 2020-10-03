// Turn this function into an arrow function
function arrow() {
  return "es6 is awesome!";
}
const arrow2 = () => "es6 is awesome!";

//Use the es6 syntax for default parameter
function defaultParameter(name) {
  var name = name || "sam";
  return name;
}
const defaultParameter2 = (name = "sam") => name;

// Use the spread operator to combine arr1 and arr2
function combineArrays(arr1, arr2) {
  return arr1.concat(arr2);
}
const combineArrays2 = (arr1, arr2)=> arr1 + arr2

//use destructuring to return the object's cyf property
let obj ={
  name:"Liza",
  age:24,
  cyf:"red",
}
function destructuring(obj) {
  return obj.cyf;
}
let {cyf} = obj;
// use template literal to return a string with the sum of a and b
function templateString(a, b) {
  return "The sum is equal to " + (a + b).toString();
}
let sum = (a, b) =>"The sum is equal to " + (a + b).toString();