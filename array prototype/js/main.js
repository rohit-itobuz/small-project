//call back
function record(name, callback) {
  console.log(name);
  callback();
}
function calling() {
  console.log("calling function");
}
record("rohit", calling);

//closure
function f1() {
  const number = 5;
  return function f2() {
    console.log(number);
  };
  f2();
}
f1();

//foreach / map

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumberForEach = arr.forEach((num) => console.log(num * 5));
console.log(newNumberForEach);

const newArray = [];
arr.forEach((num) => {
  if (num > 4) {
    newArray.push(num);
  }
});
console.log(newArray);

const newNumberMap = arr.map((element) => element + 5);
console.log(newNumberMap);

const newThing = arr
  .map((ele) => ele * 5)
  .map((ele) => ele + 2)
  .filter((ele) => ele > 10);
console.log(newThing);

// find/filter
const find = arr.find((fin) => fin>4);
console.log(find);

const filter = arr.filter((fil) => fil>4);
console.log(filter);

//spread
const spread = [...arr];
console.log(spread);

//rest with call back
 function product (callback, ...number){
    let result = 1;
    for(let num of number)
    result = result* num;
    console.log(result);
    callback()
}
function rohit(){
    console.log("Hii");
}
product(rohit,2,3,5,6,7,8)

//rest
function res(...numb) {
    let re = 1;
    console.log(numb);
    for(let num of numb)
    console.log(re = re*num);
}
res(1,2,3,4,5);

const b = 45;
const a = () => console.log(b);
a();