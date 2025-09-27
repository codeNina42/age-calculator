// Select form and age result element
const form = document.getElementById('ageForm');
const ageResult = document.getElementById('ageResult');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const dob = document.getElementById('dob').value; // Get the date of birth
  if (dob) {
    calculateAge(dob);
  }
});

// Function to calculate age
function calculateAge(dob) {
  const birthDate = new Date(dob);
  const today = new Date();
  
  // Calculate difference in years
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  // Adjust age if birthday hasn't occurred yet this year
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  // Display the result
  ageResult.textContent = `Your age is ${age} years old.`;
}
