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

window.onclick = function(event) {
  // Close the dropdown if the clicked target is not the button or the dropdown itself
  if (!event.target.matches('.dropbtn') && !event.target.closest('.dropdown-content')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}