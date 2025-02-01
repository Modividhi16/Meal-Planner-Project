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
  const mealType = document.getElementById("meal_options").value; // Get the selected meal type

  if (inputValue && mealType !== "mealType") {
      // Create a new option element
      const option = document.createElement("option");
      option.textContent = inputValue;

      // Loop through each day of the week
      const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
      for (let day of days) {
          // Find the corresponding dropdown for the selected meal type and day
          const dropdown = document.getElementById(`${mealType}_${day}`);
          if (dropdown) {
              dropdown.appendChild(option.cloneNode(true)); // Add the new meal to each day's dropdown
          }
      }

      // Clear the input field and reset the form
      input.value = '';
      document.getElementById("addMealsForm").reset();
  } else {
      console.warn("No meal entered or invalid selection!");
  }
}


window.onclick = function (event) {
  const dropdown = document.getElementById("addMealsForm");
  const button = document.querySelector(".dropbtn");

  // Check if the clicked target is NOT the dropdown or the button
  if (!dropdown.contains(event.target) && event.target !== button) {
      dropdown.classList.remove("show");
  }
};

function storeMeal () {
  const inputValue = document.getElementById("breakfast_monday").value;
  localStorage.setItem("breakfast_monday", inputValue);
  console.log(inputValue);
}