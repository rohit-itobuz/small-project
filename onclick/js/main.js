const firstInput = document.getElementById("one");
const secondInput = document.getElementById("inputTwo");

function myFunction() {
  const inputFirst = firstInput.value.trim();
  const inputSecond = secondInput.value.trim();
  const multiply = Number(inputFirst) * Number(inputSecond);
  document.getElementById("show").innerHTML = multiply;
}
