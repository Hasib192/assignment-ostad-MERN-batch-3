const btn = document.getElementById("calculateBtn");
const result = document.getElementById("result");

btn.addEventListener("click", calculatBMI);

function calculatBMI(e) {
  e.preventDefault();

  let weight = document.getElementById("weightInput").value;
  let height = document.getElementById("heightInput").value;

  if (height === "" || isNaN(height)) {
    return (result.innerHTML = "Provide a valid Height");
  } else if (weight === "" || isNaN(weight)) {
    return (result.innerHTML = "Provide a valid Weight");
  } else {
    height /= 100;

    let bmi = (weight / Math.pow(height, 2)).toFixed(2);
    if (bmi < 18.5) {
      return (result.innerHTML = "Underweight");
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return (result.innerHTML = "Normal");
    } else if (bmi >= 25.0 && bmi < 29.9) {
      return (result.innerHTML = "Overweight");
    } else {
      return (result.innerHTML = "Obese");
    }
  }
}
