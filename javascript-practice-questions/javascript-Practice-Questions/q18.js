// 18. Calculate BMI and classify

function calculateBMI(weight, height) {
  const BMI = weight / (height * height);

  if (BMI < 18.5) {
    return;

    ("Underweight");
  } else if (BMI >= 18.5 && BMI < 24.9) {
    return;

    ("Normal weight");
  } else if (BMI >= 25 && BMI < 29.9) {
    return;

    ("Overweight");
  } else {
    return;

    ("Obesity");
  }
}
