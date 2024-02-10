function calculateAge() {
    
    const dobInput = document.getElementById('dob').value;
    const dob = new Date(dobInput);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - dob.getFullYear();
    document.getElementById('result').innerText = `Your age is ${age} years.`;
  }
  