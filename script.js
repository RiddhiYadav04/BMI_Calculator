document.getElementById("bmiForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const dob = new Date(document.getElementById("dob").value);
    const gender = document.getElementById("gender").value;
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
  
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
  
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    let category = "";
  
    // Basic categorization based on BMI
    if (bmi < 18.5) category = "Underweight";
    else if (bmi >= 18.5 && bmi < 25) category = "Normal weight";
    else if (bmi >= 25 && bmi < 30) category = "Overweight";
    else category = "Obesity";
  
    const result = `
      <strong>Name:</strong> ${name}<br>
      <strong>Age:</strong> ${age}<br>
      <strong>Gender:</strong> ${gender.charAt(0).toUpperCase() + gender.slice(1)}<br>
      <strong>BMI:</strong> ${bmi.toFixed(2)}<br>
      <strong>Category:</strong> ${category}
    `;
  
    document.getElementById("result").innerHTML = result;
  });