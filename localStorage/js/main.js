const firstInput = document.getElementById("one");
const secondInput = document.getElementById("inputTwo");

const array = [];
const arrayObject = [];

function myFunction() {
  const inputFirst = firstInput.value.trim();
  const inputSecond = secondInput.value.trim();


  localStorage.setItem("one", inputFirst);
  localStorage.setItem("two", inputSecond);

  const multiply = Number(inputFirst) * Number(inputSecond);
  localStorage.setItem("result", multiply);
  document.getElementById("show").innerHTML = multiply;

  array.push(inputFirst, inputSecond, multiply);
  console.log(array);

  arrayObject.push({first: inputFirst, second: inputSecond, answer: multiply});
  console.log(arrayObject);
  localStorage.setItem("record", JSON.stringify(arrayObject));

}

const store = localStorage.getItem("result");
document.getElementById("store").innerHTML = store;

const objectResult = JSON.parse(localStorage.getItem("record"));
document.getElementById("object").innerHTML = objectResult;



