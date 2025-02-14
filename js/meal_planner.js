const getMeals = (items) => {
    const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
    
    for (let day of days) {
      const breakfastDropdown = document.getElementById(`breakfast_${day}`);
      const lunchDropdown = document.getElementById(`lunch_${day}`);
      const dinnerDropdown = document.getElementById(`dinner_${day}`);

        for(let item of items.breakfast){
            const option = document.createElement("option");
            option.textContent = item.name;
            breakfastDropdown.appendChild(option);
        }

        for(let item of items.lunch){
            const option = document.createElement("option");
            option.textContent = item.name;
            lunchDropdown.appendChild(option);
        }

        for(let item of items.dinner){
            const option = document.createElement("option");
            option.textContent = item.name;
            dinnerDropdown.appendChild(option);
        }
    }
  };
  getMeals(meals);

function getMealDropdown(){
    document.getElementById("addMealsForm").classList.toggle("show");
}

   function getValue() {
        const input = document.querySelector('.input');
        const inputValue = input.value.trim(); // Trim extra spaces
        const mealType = document.getElementById("meal_options").value; // Get selected meal type
    
        if (!inputValue) {
            alert("Please enter a meal name.");
            return;
        }
    
        if (!mealType || mealType === "mealType") {
            alert("Please select a meal type.");
            return;
        }
    
        // Get existing meals from localStorage or initialize an empty object
        let storedMeals = JSON.parse(localStorage.getItem('meals')) || { breakfast: [], lunch: [], dinner: [] };
    
        if (!storedMeals[mealType].includes(inputValue)) {  // Prevent duplicates
            storedMeals[mealType].push(inputValue);
            localStorage.setItem('meals', JSON.stringify(storedMeals)); // Save updated meals
        }
    
        // Retrieve the stored meal list for the selected type
        const mealValues = storedMeals[mealType];
    
        // Loop through each day of the week and add the meal to the corresponding dropdown
        const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
        for (let day of days) {
            const dropdown = document.getElementById(`${mealType}_${day}`);
            if (dropdown) {
                mealValues.forEach(meal => {
                    const option = document.createElement("option");
                    option.textContent = meal;
                    dropdown.appendChild(option);
                });
            }
        }
    
        console.log(`Added ${inputValue} to ${mealType}`);
        input.value = ""; // Clear input field
        document.getElementById("addMealsForm").reset();
    
    }

    function loadStoredMeals() {
      let storedMeals = JSON.parse(localStorage.getItem('meals')) || { breakfast: [], lunch: [], dinner: [] };
  
      const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
      ["breakfast", "lunch", "dinner"].forEach(mealType => {
          days.forEach(day => {
              const dropdown = document.getElementById(`${mealType}_${day}`);
              if (dropdown) {
                  storedMeals[mealType].forEach(meal => {
                      const option = document.createElement("option");
                      option.textContent = meal;
                      dropdown.appendChild(option);
                  });
              }
          });
      });
  }
  
  // Load meals from localStorage when the page loads
  window.onload = loadStoredMeals;

window.onclick = function (event) {
  const dropdown = document.getElementById("addMealsForm");
  const button = document.querySelector(".dropbtn");

  // Check if the clicked target is NOT the dropdown or the button
  if (!dropdown.contains(event.target) && event.target !== button) {
      dropdown.classList.remove("show");
  }
};